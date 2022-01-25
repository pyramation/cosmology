import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';

const numericStyles = {
  '&[data-is-numeric=true]': {
    textAlign: 'right'
  }
};

// Variants
const simpleVariant = {
  th: {
    color: `gray.600`,
    borderBottom: '1px',
    borderColor: 'divider',
    ...numericStyles
  },
  td: {
    borderBottom: '1px',
    borderColor: 'divider',
    bg: 'white',
    ...numericStyles
  },
  tr: {
    bg: 'white'
  },
  tfoot: {
    tr: {
      '&:last-of-type': {
        th: { borderBottomWidth: 0 }
      }
    }
  }
};

export const variants = {
  simple: simpleVariant
};

// Sizes
export const sizes = {
  sm: {
    th: {
      px: '4',
      py: '1',
      lineHeight: '4',
      fontSize: 'xs'
    },
    td: {
      px: '4',
      py: '2',
      fontSize: 'sm',
      lineHeight: '4'
    }
  },
  md: {
    th: {
      px: '6',
      py: '3',
      lineHeight: '4',
      fontSize: 'xs'
    },
    td: {
      px: '6',
      py: '4',
      lineHeight: '5'
    }
  },
  lg: {
    th: {
      px: '8',
      py: '4',
      lineHeight: '5',
      fontSize: 'sm'
    },
    td: {
      px: '8',
      py: '5',
      lineHeight: '6'
    }
  }
};

// exports
export const StyledThead = styled(Box)``;

export const StyledTbody = styled(Box)``;

export const StyledTfoot = styled(Box)``;

export const StyledTh = styled(Box)`
  ${css({
    fontFamily: 'heading',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 'wider',
    textAlign: 'left',
    bg: '#F8F8FA',
    borderRightColor: 'divider',
    borderRightStyle: 'solid',
    borderRightWidth: '1px'
  })}
`;

export const StyledTr = styled(Box)``;

export const StyledTd = styled(Box)`
  ${css({
    textAlign: 'left',
    borderRightColor: 'divider',
    borderRightStyle: 'solid',
    borderRightWidth: '1px'
  })}
`;

export const StyledTable = styled(Box)`
  ${css({
    fontVariantNumeric: 'lining-nums tabular-nums',
    borderCollapse: 'collapse',
    borderColor: 'divider',
    borderStyle: 'solid',
    borderWidth: '0.0625rem 0.0625rem',
    width: '100%'
  })}

  ${props => {
    const sizeObj = sizes[props.size] || sizes.md;
    const variantObj = variants[props.variant] || variants.simple;

    return css({
      [`${StyledTh}`]: {
        ...variantObj.th,
        ...sizeObj.th
      },
      [`${StyledTd}`]: {
        ...variantObj.td,
        ...sizeObj.td
      },
      [`${StyledTbody} ${StyledTr}`]: {
        ...variantObj.tr,
        [`&:hover ${StyledTd}`]: {
          bg: '#f0f5ff'
        }
      },
      [`${StyledTfoot}`]: {
        ...variantObj.tfoot
      }
    });
  }}
`;
