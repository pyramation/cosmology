import styled from 'styled-components';
import css from '@styled-system/css';

import Box from '../box';
import Text from '../text';
import colors from '../theme/base-theme/colors';

const sizes = props =>
  css({
    width: props.size || 6,
    height: props.size || 6,
    borderRadius: '50%'
  });

const border = () =>
  css({
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'gray.100',
    bg: 'gray.200'
  });

export const StyledAvatarWrapper = styled(Box)`
  display: inline-block;
`;

export const StyledAvatar = styled(Box).attrs({
  as: 'img'
})`
  object-fit: cover;
  ${sizes}
  ${border}
`;

const colorBuckets = [
  colors.gray[500],
  colors.blue[500],
  colors.cyan[500],
  colors.green[500],
  colors.orange[500],
  colors.pink[500],
  colors.purple[500],
  colors.red[500],
  colors.teal[500]
].map((color, index) => ({
  color,
  range: [Math.round((26 / 9) * index), Math.round((26 / 9) * (index + 1))]
}));

const getColor = shortName => {
  const value = shortName.charCodeAt(0) - 65;
  const bucket = colorBuckets.find(
    i => i.range[0] <= value && value <= i.range[1]
  );
  if (!bucket) return colors.dimGold;
  return bucket.color;
};

export const StyledAvatarName = styled(Text).attrs({
  as: 'span'
})`
  ${sizes}
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
  background-color: ${props => getColor(props.shortName)};
`;

export const StyledDefaultAvatar = styled(Box)`
  ${sizes}
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.midGrey20};
  color: ${colors.blackGrey};
  border-width: 0 0 1px 0;
  ${border}
`;

export const StyledLoadingAvatar = styled(Box)`
  ${sizes}
  ${css({
    bg: 'gray.200'
  })}
`;
