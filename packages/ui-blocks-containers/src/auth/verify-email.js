import React, { useMemo, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import {
  VerifyEmail as VerifyEmailComponent,
  VerifyEmailLoading
} from '@webql/ui-blocks';

export const verifyEmailMutation = gql`
  mutation verifyEmailMutation($emailId: UUID!, $token: String!) {
    verifyEmail(input: { emailId: $emailId, token: $token }) {
      success: boolean
    }
  }
`;

export const VerifyEmail = props => {
  const [verifyEmail, { loading }] = useMutation(verifyEmailMutation);
  const [success, setSuccess] = useState(false);
  const [initiated, setInitiated] = useState(false);

  if (typeof window === 'undefined') {
    return <VerifyEmailLoading />;
  }

  const checkVerification = () => {
    const { emailId, token } = props;

    if (initiated) return;

    if (
      !/^([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}-){3})([0-9a-fA-F]{12})$/i.test(
        emailId
      ) ||
      !token ||
      !token.length
    ) {
      setInitiated(true);
      return;
    }

    return verifyEmail({
      variables: {
        emailId,
        token
      }
    })
      .then(response => {
        const {
          data: {
            verifyEmail: { success }
          }
        } = response;
        setInitiated(true);
        setSuccess(success);
      })
      .catch(err => {
        console.log({ err });
        setInitiated(true);
        setSuccess(false);
      });
  };

  checkVerification();

  return (
    <VerifyEmailComponent
      loading={loading}
      initiated={initiated}
      success={success}
      {...props}
    />
  );
};
