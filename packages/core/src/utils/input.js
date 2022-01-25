const rootProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginY',
  'marginX',
  'flex',
  'flexBasis',
  'width',
  'minWidth',
  'maxWidth',
  'maxW',
  'minW',
  'w',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'position',
  'pos',
  'fluidWidth'
];

export const splitProps = props => {
  const root = {};
  const input = {};

  Object.keys(props).forEach(key => {
    if (rootProps.includes(key)) {
      root[key] = props[key];
    } else {
      input[key] = props[key];
    }
  });
  return { root, input };
};
