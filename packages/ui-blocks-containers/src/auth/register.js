import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Register as RegisterComponent } from '@webql/ui-blocks';

export const registerMutation = gql`
  mutation registerMutation($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      apiToken {
        accessToken
      }
    }
  }
`;

export const submitInviteCodeMutation = gql`
  mutation submitInviteCodeMutation($token: String!) {
    submitInviteCode(input: { token: $token }) {
      success: boolean
    }
  }
`;

export const Register = ({
  onSuccess,
  email: suppliedEmail,
  ...props
} = {}) => {
  const [register, { loading }] = useMutation(registerMutation);
  const [submitInvite] = useMutation(submitInviteCodeMutation);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = data => {
    setSubmitError(null);
    let { inviteToken, email, password } = data;

    // cannot be logged in if you register
    localStorage.removeItem('token');

    return register({
      variables: {
        email,
        password
      }
    })
      .then(response => {
        // reset();

        const {
          data: {
            register: {
              apiToken: { accessToken }
            }
          }
        } = response;
        localStorage.setItem('token', accessToken);
        if (!inviteToken && localStorage.getItem('invite_token') !== null) {
          inviteToken = localStorage.getItem('invite_token');
        }
        if (inviteToken) {
          submitInvite({
            variables: {
              token: inviteToken
            }
          })
            .then(resp => {})
            .catch(e => {
              console.log(e);
            })
            .finally(() => {
              localStorage.removeItem('invite_token');
            });
        }
        if (typeof onSuccess === 'function') {
          onSuccess(response);
        }
      })
      .catch(err => {
        console.log({ err });

        if (err.message) {
          if (err.message === 'PASSWORD_LEN') {
            setSubmitError('password must be at least 8 characters');
          } else if (err.message === 'ACCOUNT_EXISTS') {
            setSubmitError(`we're sorry, that account already exists!`);
          } else if (err.message === 'UNAUTHENTICATED') {
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
    <RegisterComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      suppliedEmail={suppliedEmail}
      {...props}
    />
  );
};
