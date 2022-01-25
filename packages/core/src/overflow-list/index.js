import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useSpring, animated } from 'react-spring';
import get from '@styled-system/theme-get';
import Box from '../box';
import Button from '../button';

import { useMeasure, useVisible, usePrevious } from '@webql/hooks';

const StyledOverflowList = styled(animated.div)`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;

  ${props =>
    props.isOverflowed &&
    css({
      overflowX: 'scroll',
      marginBottom: '-0.5rem' // account for the scrollbar
    })}
`;

const StyledOverflowItem = styled.div`
  flex: none;
  position: relative;
`;

const StyledSensor = styled.div`
  flex-shrink: 0;
  width: 1px;
`;

const buttonStyles = css({
  "& [data-overflow-list='button']": {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    bg: 'gray.100',
    width: 5,
    height: 5,
    borderRadius: 'round',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'divider',
    boxShadow: 'divider',
    svg: {
      color: 'gray.500'
    }
  }
});

const StyledLeftButton = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  min-width: 3rem;
  z-index: 1;

  background-image: linear-gradient(
    to left,
    rgba(1, 169, 219, 0),
    ${props => get(`colors.${props.blendColor}`, props.blendColor)(props)}
  );

  ${buttonStyles}

  & [data-overflow-list='button'] {
    left: 1rem;
  }
`;

const StyledRightButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  min-width: 3rem;
  z-index: 1;

  background-image: linear-gradient(
    to right,
    rgba(1, 169, 219, 0),
    ${props => get(`colors.${props.blendColor}`, props.blendColor)(props)}
  );

  ${buttonStyles}

  & [data-overflow-list='button'] {
    right: 1rem;
  }
`;

// NOTE: children must be array
const OverflowList = ({ blendColor, activeIndex, children, ...rest }) => {
  // 0 neutral/in the middle
  // 1 child reached right edge of parent
  // -1 child reached left edge of parent
  // 2 show both left and right navigation
  const [collision, setCollision] = useState(0);
  const [nextScrollWindow, setNextScrollWindow] = useState({
    start: -1,
    end: -1
  });
  const [prevScrollWindow, setPrevScrollWindow] = useState({
    start: -1,
    end: -1
  });
  const [itemRefs, setItemRefs] = React.useState([]);
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const sensorRef = useRef(null);
  const isActiveIndexSynced = useRef(false);

  const sensorVisibility = useVisible(sensorRef, parentRef, {
    // initially we want the scrollbar to be hidden to avoid flashing
    visible: true
  });
  const prevVisibility = usePrevious(sensorVisibility, { fullyVisible: false });

  const calcIndexReverse = useCallback(
    from => {
      const parentRect = parentRef.current.getBoundingClientRect();
      const windowWidth = parentRect.width;
      const widths = getWidthList(itemRefs);

      let start = from;
      let stop = 0;
      let accumulateWidth = 0;
      for (let index = start; index >= 0; index--) {
        const width = widths[index];
        if (accumulateWidth + width > windowWidth) {
          start = index;
          break;
        }
        accumulateWidth += width;
        stop = index;
      }
      if (stop === 0) return stop;
      return start;
    },
    [itemRefs]
  );

  const calcIndex = useCallback(
    from => {
      const parentRect = parentRef.current.getBoundingClientRect();
      const windowWidth = parentRect.width;
      const widths = getWidthList(itemRefs);

      let start = from;
      let stop = 0;
      let accumulateWidth = 0;
      for (let index = start; index < widths.length; index++) {
        const width = widths[index];

        if (accumulateWidth + width > windowWidth) {
          start = index;
          break;
        }
        accumulateWidth += width;
        stop = index;
      }
      if (stop === widths.length - 1) return stop;
      return start;
    },
    [itemRefs]
  );

  const repartition = useCallback(
    from => {
      const prevStart = calcIndexReverse(from);
      const prevEnd = from;
      const nextStart = calcIndex(from);
      const nextEnd = calcIndex(nextStart);

      setNextScrollWindow({
        start: nextStart,
        end: nextEnd
      });

      setPrevScrollWindow({
        start: prevStart,
        end: prevEnd
      });
    },
    [calcIndex, calcIndexReverse]
  );

  const repartitionActiveIndex = useCallback(
    activeIndex => {
      if (
        typeof activeIndex !== 'undefined' &&
        (isNaN(activeIndex) || activeIndex < 0)
      ) {
        // eslint-disable-next-line no-console
        console.error(
          '<OverflowList />: activeIndex should be a positive number'
        );
      } else {
        // Minus 1 to ensure the active item is fully visible
        const inviewIndex = Number(activeIndex) - 1;
        // Calculate scrolling window bounds
        const prevStart = calcIndexReverse(inviewIndex);
        repartition(prevStart);
      }
    },
    [calcIndexReverse, repartition]
  );

  const onResize = useCallback(
    entry => {
      // If activeIndex not synced yet, skip this repartition call entirely to prioritize
      // showing active item
      if (!isActiveIndexSynced.current) {
        return;
      } else {
        if (typeof activeIndex === 'undefined') {
          repartition(0);
        } else {
          repartitionActiveIndex(activeIndex);
        }
      }
    },
    [activeIndex, repartition, repartitionActiveIndex]
  );

  const parentRect = useMeasure(parentRef, onResize);

  const [_, set] = useSpring(() => ({
    x: 0,
    config: {
      duration: 350,
      mass: 1,
      friction: 30,
      clamp: true
    },
    onFrame: props => {
      const list = parentRef.current;
      if (!list) return;
      list.scrollLeft = props.x;
    },
    onRest: () => {
      if (!childRef.current || !parentRef.current) return;
      const childRect = childRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();
      if (reachedEnd(childRect, parentRect)) {
        return setCollision(-1);
      }
      if (reachedStart(childRect, parentRect)) {
        return setCollision(1);
      }
      if (inTheMiddle(childRect, parentRect)) {
        return setCollision(2);
      }
    }
  }));

  useEffect(() => {
    // Reinit itemRefs whenever children changes
    const childArr = React.Children.toArray(children);
    setItemRefs(refs =>
      Array(childArr.length)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, [children]);

  useEffect(() => {
    if (!childRef.current) return;
    const childRect = childRef.current.getBoundingClientRect();

    if (prevVisibility.fullyVisible !== sensorVisibility.fullyVisible) {
      if (sensorVisibility.fullyVisible) {
        setCollision(0);
      } else {
        if (reachedEnd(childRect, parentRect)) {
          return setCollision(-1);
        }
        if (reachedStart(childRect, parentRect)) {
          return setCollision(1);
        }
        if (inTheMiddle(childRect, parentRect)) {
          return setCollision(2);
        }
      }
    }
  }, [parentRect, prevVisibility, sensorVisibility]);

  const scrollLeft = () => {
    const currentScroll = parentRef.current.scrollLeft;
    const prevWindowWidth = getWidthRange(
      prevScrollWindow.start,
      prevScrollWindow.end,
      itemRefs
    );
    const scroll =
      prevScrollWindow.start === 0 ? 0 : currentScroll - prevWindowWidth;
    set({ x: scroll });
    repartition(prevScrollWindow.start);
  };

  const scrollRight = () => {
    const parentWidth = parentRect.width;
    const currentScroll = parentRef.current.scrollLeft;

    const childWidth = childRef.current.getBoundingClientRect().width;
    const maxScroll = childWidth - parentWidth;
    const nextWindowWidth = getWidthRange(
      nextScrollWindow.start,
      nextScrollWindow.end,
      itemRefs
    );
    const scroll =
      nextScrollWindow.end === itemRefs.length - 1
        ? maxScroll
        : currentScroll + nextWindowWidth;
    set({ x: scroll });
    repartition(nextScrollWindow.start);
  };

  // Scroll activeIndex item into view if given
  useEffect(() => {
    repartitionActiveIndex(activeIndex);
    const parentWidth = parentRect.width;
    const currentScroll = parentRef.current.scrollLeft;

    const childWidth = childRef.current.getBoundingClientRect().width;
    const widthFromStart = getWidthRange(0, activeIndex - 1, itemRefs);
    const maxScroll = childWidth - parentWidth;
    const scroll =
      activeIndex === itemRefs.length - 1
        ? maxScroll
        : currentScroll + widthFromStart;
    set({ x: scroll });
  }, [activeIndex, itemRefs, parentRect.width, repartitionActiveIndex, set]);

  const shouldShowPrevButton = useMemo(() => {
    // If children total length > parent container length, always show prev button
    const parentWidth = parentRect.width;
    const childrenWidth = getAccumulativeWidth(itemRefs);
    return childrenWidth > parentWidth;
  }, [itemRefs, parentRect.width]);

  return (
    <Box
      position="relative"
      overflow="hidden"
      display="flex"
      flex="1 1 auto"
      minWidth="0"
      minHeight="0"
      {...rest}
    >
      {collision !== 1 && shouldShowPrevButton && (
        <StyledLeftButton blendColor={blendColor}>
          <Button
            icon="chevron-left"
            variant="secondary"
            bare
            onClick={scrollLeft}
            iconSize={4}
            data-overflow-list="button"
          />
        </StyledLeftButton>
      )}
      <StyledOverflowList
        ref={parentRef}
        isOverflowed={!sensorVisibility.visible}
        data-overflow-list="parent"
      >
        <Box
          ref={childRef}
          data-overflow-list="children"
          display="flex"
          flex="none"
        >
          {React.Children.toArray(children).map((child, i) => (
            <StyledOverflowItem key={child.key} ref={itemRefs[i]}>
              {child}
            </StyledOverflowItem>
          ))}
        </Box>
        <StyledSensor ref={sensorRef} />
      </StyledOverflowList>
      {!sensorVisibility.visible && (collision === 1 || collision === 2) > 0 && (
        <StyledRightButton blendColor={blendColor}>
          <Button
            icon="chevron-right"
            variant="secondary"
            bare
            onClick={scrollRight}
            iconSize={4}
            data-overflow-list="button"
          />
        </StyledRightButton>
      )}
    </Box>
  );
};

export default OverflowList;

OverflowList.propTypes = {
  blendColor: PropTypes.string,
  // If activeIndex is provided valid, it will be scrolled into view on first mount
  activeIndex: PropTypes.number
};

OverflowList.defaultProps = {
  blendColor: 'bg.100'
};

function reachedStart(childRect, parentRect) {
  return Math.floor(childRect.left) === Math.floor(parentRect.left);
}

function reachedEnd(childRect, parentRect) {
  return Math.floor(childRect.right) === Math.floor(parentRect.right);
}

function inTheMiddle(childRect) {
  return childRect.left < 0;
}

function getWidthList(refs) {
  return refs.map(ref => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    return rect.width;
  });
}

function getAccumulativeWidth(refs) {
  return refs.reduce((totalWidth, ref) => {
    if (!ref.current) {
      return totalWidth;
    }
    const rect = ref.current.getBoundingClientRect();
    totalWidth += rect.width;
    return totalWidth;
  }, 0);
}

function getWidthRange(start, end, refs) {
  const allWidths = getWidthList(refs);
  let w = 0;
  for (let index = start; index < end; index++) {
    const width = allWidths[index] || 0;
    w += width;
  }
  return w;
}
