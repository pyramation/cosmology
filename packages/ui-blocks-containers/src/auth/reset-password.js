import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { ResetPassword as ResetPasswordComponent } from '@webql/ui-blocks';

export const resetPasswordMutation = gql`
  mutation resetPasswordMutation(
    $roleId: UUID!
    $resetToken: String!
    $newPassword: String!
  ) {
    resetPassword(
      input: {
        roleId: $roleId
        resetToken: $resetToken
        newPassword: $newPassword
      }
    ) {
      successful: boolean
    }
  }
`;

export const ResetPassword = props => {
  const [resetPassword, { loading }] = useMutation(resetPasswordMutation);
  const [submitError, setSubmitError] = useState(null);
  const [resetSubmitted, setResetSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = data => {
    setSubmitError(null);
    const { password: newPassword, resetToken, roleId } = data;
    return resetPassword({
      variables: {
        roleId,
        resetToken,
        newPassword
      }
    })
      .then(response => {
        const {
          data: {
            resetPassword: { successful }
          }
        } = response;
        setResetSubmitted(true);
        if (successful) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
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
    <ResetPasswordComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      success={success}
      resetSubmitted={resetSubmitted}
      {...props}
    />
  );
};
