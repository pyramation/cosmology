import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Unsubscribe as UnsubscribeComponent } from '@webql/ui-blocks';

export const unsubscribeMutation = gql`
  mutation unsubscribeMutation($email: String!) {
    unsubscribe(input: { email: $email }) {
      success: boolean
    }
  }
`;

export const Unsubscribe = ({ onSuccess, ...props } = {}) => {
  const [unsubscribe, { loading }] = useMutation(unsubscribeMutation);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = data => {
    setSubmitError(null);

    // cannot be logged in if you login
    localStorage.removeItem('token');

    return unsubscribe({
      variables: {
        ...data
      }
    })
      .then(response => {
        // reset();

        try {
          const {
            data: {
              unsubscribe: { success }
            }
          } = response;

          if (typeof onSuccess === 'function') {
            onSuccess(response);
          }
        } catch (e) {
          setSubmitError(`Email incorrect or link expired`);
        }
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
    <UnsubscribeComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      {...props}
    />
  );
};
