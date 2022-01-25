import React from 'react';
import Text from '../text';
import Icon from '../icon';

const FormSubmitError = ({ children, ...otherProps }) => {
  return (
    <Text
      minHeight={12}
      p={4}
      fontSize="sm"
      borderRadius="sm"
      textAlign="left"
      bg="red.100"
      color="intent.danger"
      display="flex"
      {...otherProps}
    >
      <Icon aria-hidden name="alert-triangle" size={4} mr="2" />
      <span>{children}</span>
    </Text>
  );
};

export default FormSubmitError;
