import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { SetPassword as SetPasswordComponent } from '@webql/ui-blocks';

export const setPasswordMutation = gql`
  mutation setPasswordMutation(
    $currentPassword: String!
    $newPassword: String!
  ) {
    setPassword(
      input: { currentPassword: $currentPassword, newPassword: $newPassword }
    ) {
      success: boolean
    }
  }
`;

export const SetPassword = props => {
  const [setPassword, { loading }] = useMutation(setPasswordMutation);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = data => {
    setSubmitError(null);
    const { currentPassword, password: newPassword } = data;
    return setPassword({
      variables: {
        currentPassword,
        newPassword
      }
    })
      .then(response => {
        const {
          data: {
            setPassword: { success }
          }
        } = response;
        setSuccess(success);
      })
      .catch(err => {
        console.log({ err });

        if (err.message) {
          if (err.message === 'UNAUTHENTICATED') {
            setSubmitError(`Your session has expired. Please login.`);
          } else {
            setSubmitError(err.message);
          }
        }
      });
  };

  return (
    <SetPasswordComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      success={success}
      {...props}
    />
  );
};
