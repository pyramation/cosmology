import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Invite as InviteComponent } from '@webql/ui-blocks';

export const createInviteMutation = gql`
  mutation createInviteMutation($email: String) {
    createInvite(input: { invite: { email: $email } }) {
      invite {
        id
        email
      }
    }
  }
`;

export const Invite = props => {
  const [createInvite, { loading }] = useMutation(createInviteMutation);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = data => {
    setSubmitError(null);
    const { email } = data;
    return createInvite({
      variables: {
        email
      }
    })
      .then(response => {
        const {
          data: {
            createInvite: { clientMutationId }
          }
        } = response;
        setSuccess(true);
      })
      .catch(err => {
        console.log({ err });

        if (err.message) {
          if (err.message === 'UNAUTHENTICATED') {
            setSubmitError(`Your session has expired. Please login.`);
          } else if (err.message === 'ACCOUNT_EXISTS') {
            // just treat is as an invite... (means their friend is already a user)
            setSuccess(true);
          } else if (err.message.match(/violates check constraint/)) {
            setSubmitError('email is invalid');
          } else {
            setSubmitError(err.message);
          }
        }
      });
  };

  return (
    <InviteComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      success={success}
      {...props}
    />
  );
};
