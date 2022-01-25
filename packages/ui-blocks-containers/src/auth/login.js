import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Login as LoginComponent } from '@webql/ui-blocks';

export const loginMutation = gql`
  mutation loginMutation(
    $email: String!
    $password: String!
    $rememberMe: Boolean
  ) {
    login(
      input: { email: $email, password: $password, rememberMe: $rememberMe }
    ) {
      apiToken {
        accessToken
      }
    }
  }
`;

export const Login = ({ onSuccess, ...props } = {}) => {
  const [login, { loading }] = useMutation(loginMutation);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = data => {
    setSubmitError(null);

    // cannot be logged in if you login
    localStorage.removeItem('token');

    return login({
      variables: {
        ...data
      }
    })
      .then(response => {
        // reset();

        try {
          const {
            data: {
              login: {
                apiToken: { accessToken }
              }
            }
          } = response;
          localStorage.setItem('token', accessToken);
          if (typeof onSuccess === 'function') {
            onSuccess(response);
          }
        } catch (e) {
          setSubmitError(`Email or password incorrect.`);
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
    <LoginComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      {...props}
    />
  );
};
