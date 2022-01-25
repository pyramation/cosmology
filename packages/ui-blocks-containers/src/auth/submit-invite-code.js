import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { SubmitInviteCode as SubmitInviteCodeComponent } from '@webql/ui-blocks';

export const submitInviteCodeMutation = gql`
  mutation submitInviteCodeMutation($token: String!) {
    submitInviteCode(input: { token: $token }) {
      success: boolean
    }
  }
`;

export const SubmitInviteCode = props => {
  const [submitInvite, { loading }] = useMutation(submitInviteCodeMutation);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = data => {
    setSubmitError(null);
    const { inviteToken } = data;
    return submitInvite({
      variables: {
        token: inviteToken
      }
    })
      .then(response => {
        const {
          data: {
            submitInviteCode: { success }
          }
        } = response;
        setSuccess(success);
      })
      .catch(err => {
        console.log({ err });

        if (err.message) {
          if (err.message === 'UNAUTHENTICATED') {
            setSubmitError(`Your session has expired. Please login.`);
          } else if (err.message === 'INVITE_NOT_FOUND') {
            setSubmitError(`Invite not found, sorry!`);
          } else {
            setSubmitError(err.message);
          }
        }
      });
  };

  return (
    <SubmitInviteCodeComponent
      onSubmit={handleSubmit}
      loading={loading}
      submitError={submitError}
      success={success}
      {...props}
    />
  );
};
