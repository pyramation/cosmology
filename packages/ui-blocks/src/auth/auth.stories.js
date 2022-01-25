import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Login,
  Register,
  ResetPassword,
  ForgotPassword,
  SetPassword,
  VerifyEmail,
  Invite,
  SendVerification,
  AgreeToTerms,
  Subscribe,
  Unsubscribe,
  SubmitInviteCode
} from './index';
import { Icon } from '@webql/core';
import { CenteredLayout } from '../layouts';
import { boolean } from '@storybook/addon-knobs';

const logo = <Icon size={12} name="github" />;

storiesOf('Examples/Forms', module).add('Register', () => {
  return (
    <>
      <CenteredLayout
        logo={logo}
        header="Sign up today"
        subhead="it's quick and easy"
      >
        <Register />
      </CenteredLayout>
    </>
  );
});

storiesOf('Examples/Forms', module).add('Login', () => {
  return (
    <CenteredLayout
      logo={logo}
      header="Sign in to your account"
      subhead="Or start your 14-day free trial"
    >
      <Login submitError="Hello there has been a problem" />
    </CenteredLayout>
  );
});

storiesOf('Examples/Forms', module).add('Invite', () => {
  const success = boolean('success', false);

  return (
    <CenteredLayout
      logo={logo}
      header="Invite your friends"
      subhead="Have your friends join the party"
    >
      <Invite success={success} />
    </CenteredLayout>
  );
});

storiesOf('Examples/Forms', module).add('SubmitInviteCode', () => {
  const success = boolean('success', false);

  return (
    <CenteredLayout
      logo={logo}
      header="Enter your invite code"
      subhead="Enter your code to join the party"
    >
      <SubmitInviteCode success={success} />
    </CenteredLayout>
  );
});

storiesOf('Examples/Forms', module).add('ForgotPassword', () => {
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

storiesOf('Examples/Forms', module).add('ResetPassword', () => {
  const success = boolean('success', false);
  const resetSubmitted = boolean('resetSubmitted', false);

  return (
    <CenteredLayout
      logo={logo}
      header="Password Reset"
      subhead="Enter a new password to secure your account"
    >
      <ResetPassword success={success} resetSubmitted={resetSubmitted} />
    </CenteredLayout>
  );
});

storiesOf('Examples/Forms', module).add('SetPassword', () => {
  const requireCurrentPassword = boolean('requireCurrentPassword', true);
  const success = boolean('success', false);
  return (
    <CenteredLayout
      logo={logo}
      header="Set your password"
      subhead="secure your account"
    >
      <SetPassword
        success={success}
        requireCurrentPassword={requireCurrentPassword}
      />
    </CenteredLayout>
  );
});

storiesOf('Examples/Forms', module).add('VerifyEmail', () => {
  const initiated = boolean('initiated', false);
  const success = boolean('success', false);
  return (
    <CenteredLayout
      logo={logo}
      header="Email Verification"
      subhead="your email has been verified"
    >
      <VerifyEmail initiated={initiated} success={success} />
    </CenteredLayout>
  );
});

storiesOf('Examples/Forms', module).add('SendVerification', () => {
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

storiesOf('Examples/Forms', module).add('AgreeToTerms', () => {
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

storiesOf('Examples/Forms', module).add('Subscribe', () => {
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

storiesOf('Examples/Forms', module).add('Unsubscribe', () => {
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
