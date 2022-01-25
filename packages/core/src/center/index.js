import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';

import Box from '../box';

const Center = styled(Box)`
  ${props =>
    css({
      boxSizing: 'content-box',
      maxWidth: props.max,
      mx: ['auto', 'auto'],
      px: props.gutters ? props.gutters : 0,
      textAlign: props.centerText ? 'center' : 'initial'
    })}

  ${props =>
    props.intrinsic &&
    css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    })}
`;

export default Center;

Center.propTypes = {
  // == CSS max-width value
  max: PropTypes.string,
  // == center align the text too
  centerText: PropTypes.bool,
  // == minimum on either side of the content (padding left and right)
  gutters: PropTypes.any,
  // == center child elements based on their content width
  // default behavior is <Center /> will make its children to span the full parent width
  intrinsic: PropTypes.bool
};

Center.defaultProps = {
  centerText: false,
  intrinsic: false
};
