import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { ForgotPassword as ForgotPasswordComponent } from '@webql/ui-blocks';

export const forgotPasswordMutation = gql`
  mutation forgotPasswordMutation($email: String!) {
    forgotPassword(input: { email: $email }) {
      clientMutationId
    }
  }
`;

export const ForgotPassword = props => {
  const [forgot, { loading }] = useMutation(forgotPasswordMutation);
  const [submitError, setSubmitError] = useState(null);
  const [sentEmail, setSentEmail] = useState(false);

  const handleSubmit = data => {
    setSubmitError(null);
    return forgot({
      variables: {
        ...data
      }
    })
      .then(response => {
        const {
          data: {
            forgotPassword: { clientMutationId }
          }
        } = response;
        setSentEmail(true);
      })
      .catch(err => {
        console.log({ err });

        if (err.message) {
          if (err.message === 'UNAUTHENTICATED') {
            setSubmitError(`Your session has expired. Please login.`);
          } else if (err.message.match(/violates check constraint/)) {
            setSubmitError('email is invalid');
          } else {
            setSubmitError(err.message);
          }
        }
      });
  };

  return (
    <ForgotPasswordComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      sentEmail={sentEmail}
      {...props}
    />
  );
};
