import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Subscribe as SubscribeComponent } from '@webql/ui-blocks';

export const subscribeMutation = gql`
  mutation subscribeMutation($email: String!) {
    subscribe(input: { email: $email }) {
      success: boolean
    }
  }
`;

export const Subscribe = ({ onSuccess, ...props } = {}) => {
  const [subscribe, { loading }] = useMutation(subscribeMutation);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = data => {
    setSubmitError(null);

    // cannot be logged in if you login
    localStorage.removeItem('token');

    return subscribe({
      variables: {
        ...data
      }
    })
      .then(response => {
        // reset();

        try {
          const {
            data: {
              subscribe: { success }
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
    <SubscribeComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      {...props}
    />
  );
};
