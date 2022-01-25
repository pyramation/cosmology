import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Login,
  Register,
  ResetPassword,
  ForgotPassword,
  SetPassword,
  VerifyEmail,
  SendVerification,
  AgreeToTerms,
  Subscribe,
  Unsubscribe,
  SubmitInviteCode,
  Invite
} from './index';
import { Icon } from '@webql/core';
import { CenteredLayout } from '@webql/ui-blocks';
import { boolean } from '@storybook/addon-knobs';

const logo = <Icon size={12} name="github" />;

storiesOf('Auth/Forms', module).add('Register', () => {
  return (
    <>
      <CenteredLayout
        logo={logo}
        header="Sign up today"
        subhead="it's quick and easy"
      >
        <Register inviteToken="62aea0a1c83221a99b1645fbb5832cde" />
      </CenteredLayout>
    </>
  );
});

storiesOf('Auth/Forms', module).add('Login', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Sign in to your account"
      subhead="Or start your 14-day free trial"
    >
      <Login />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('Invite', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Invite your friends"
      subhead="Have your friends join the party"
    >
      <Invite />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('SubmitInviteCode', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Enter your invite code"
      subhead="Enter your code to join the party"
    >
      <SubmitInviteCode />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('ForgotPassword', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Request Password Reset"
      subhead="enter your email below to reset your password"
    >
      <ForgotPassword />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('ResetPassword', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Password Reset"
      subhead="Enter a new password to secure your account"
    >
      <ResetPassword />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('SetPassword', () => {
  const requireCurrentPassword = boolean('requireCurrentPassword', true);
  return (
    <CenteredLayout
      logo={logo}
      header="Set your password"
      subhead="secure your account"
    >
      <SetPassword requireCurrentPassword={requireCurrentPassword} />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('VerifyEmail', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Verify Email"
      subhead="Email Verification"
    >
      <VerifyEmail
        emailId="7528f42b-feec-4f8f-d8f0-4980e0d557dd"
        token="90b8e2b1a3f31dd9508d"
      />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('SendVerification', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Send Verification"
      subhead="send an email verification"
    >
      <SendVerification />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('AgreeToTerms', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Terms of Service"
      subhead="verify that you have read and agree to our terms of service"
    >
      <AgreeToTerms />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('Subscribe', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Subscribe"
      subhead="Signup to stay in touch!"
    >
      <Subscribe />
    </CenteredLayout>
  );
});

storiesOf('Auth/Forms', module).add('Unsubscribe', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Unsubscribe"
      subhead="We're sorry to see you go!"
    >
      <Unsubscribe />
    </CenteredLayout>
  );
});
