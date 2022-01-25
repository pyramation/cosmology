import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { SendVerification as SendVerificationComponent } from '@webql/ui-blocks';

export const sendVerificationEmailMutation = gql`
  mutation sendVerificationEmailMutation($email: String!) {
    sendVerificationEmail(input: { email: $email }) {
      success: boolean
    }
  }
`;

export const SendVerification = ({ suppliedEmail, ...props }) => {
  const [sendVerificationEmail, { loading }] = useMutation(
    sendVerificationEmailMutation
  );
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [initiated, setInitiated] = useState(false);

  const handleSubmit = data => {
    setSubmitError(null);
    setInitiated(true);
    return sendVerificationEmail({
      variables: {
        ...data
      }
    })
      .then(response => {
        const {
          data: {
            sendVerificationEmail: { success }
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
    <SendVerificationComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      suppliedEmail={suppliedEmail}
      success={success}
      initiated={initiated}
      {...props}
    />
  );
};
