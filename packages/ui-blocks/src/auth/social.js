import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Box,
  Text,
  Icon,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Center
} from '@webql/core';

const FlexRowContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    * > {
      margin-top: 0.5rem;
    }
  }
`;
const FlexRowContainer2 = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #6b46c1;
  transition: background-color 300ms ease, color 250ms ease;
  &:hover {
    background-color: white;
    color: #6b46c1;
  }
`;
const SocialButton = styled(Button)`
  padding: 0rem 2.8rem;
  width: 32%;
  @media (max-width: 415px) {
    padding: 0 2.2rem;
  }
`;
const CenteredText = styled(Text)`
  text-align: center;
`;

const ColoredSubtext = styled.span`
  color: #6b46c1;
`;
const Form = styled.form``;
const FixWidth = styled.div`
  margin: 2rem auto;
  width: 80%;
`;

export function RegisterWithSocial({
  emailText = 'Email address',
  passwordText = 'Password',
  haveExistingAccount = 'Already have an account?',
  signUpText = 'Sign Up',
  socialContinueText = 'Or continue with',
  useSocial = true
} = {}) {
  return (
    <Form>
      <FixWidth>
        <Stack space={6}>
          <FormControl>
            <FormLabel>{emailText}</FormLabel>
            <Input size="md" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>{passwordText}</FormLabel>
            <Input size="md" type="text" />
          </FormControl>
          <FlexRowContainer>
            <ColoredSubtext fontSize="sm" fontWeight="bold">
              {haveExistingAccount}
            </ColoredSubtext>
          </FlexRowContainer>
          <Box>
            <SubmitButton backgroundColor="purple.600" size="md">
              {signUpText}
            </SubmitButton>
          </Box>

          {useSocial && (
            <>
              <FlexRowContainer2>
                <Box width="30%">
                  <Divider backgroundColor="gray.800" />{' '}
                </Box>{' '}
                <CenteredText>{socialContinueText}</CenteredText>
                <Box width="30%">
                  <Divider backgroundColor="gray.800" />{' '}
                </Box>
              </FlexRowContainer2>
              <FlexRowContainer2>
                <SocialButton variant="secondary" size="md">
                  <Center intrinsic>
                    <Icon color="gray.600" size={5} name="facebook" />
                  </Center>
                </SocialButton>
                <SocialButton variant="secondary" size="md">
                  <Center intrinsic>
                    <Icon color="gray.600" size={5} name="twitter" />
                  </Center>
                </SocialButton>
                <SocialButton variant="secondary" size="md">
                  <Center intrinsic>
                    <Icon color="gray.600" size={5} name="github" />
                  </Center>
                </SocialButton>
              </FlexRowContainer2>
            </>
          )}
        </Stack>
      </FixWidth>
    </Form>
  );
}
