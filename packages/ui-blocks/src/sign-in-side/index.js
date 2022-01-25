import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Button,
  Checkbox,
  Link,
  Heading,
  Avatar,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Center,
  Text,
  Divider
} from '@webql/core';
import { Container, FormContainer, SpaceBetween } from './styled';

export const SignInSide = ({
  background,
  avatar,
  header,
  email,
  socials,
  password,
  button
}) => {
  const { text: buttonText, ...buttonRest } = button;

  return (
    <Container background={background}>
      <FormContainer>
        <Stack space={6} mb={24} mt={12} className="stack">
          <Center>
            <Avatar src={avatar ? avatar : null} size={12} />
          </Center>
          <Center>
            <Heading fontSize="3xl" textAlign="center">
              {header}
            </Heading>
          </Center>
          {socials && (
            <Box mb={5}>
              <Text fontSize="md" mb={2} color="#6b7280">
                Sign in with
              </Text>
              <Box display="flex" justifyContent="space-between">
                {socials.map((social, i) => {
                  const { icon, ...rest } = social;
                  return (
                    <Button
                      key={i}
                      ml={i !== 0 ? 2 : 0}
                      flex="1"
                      variant="secondary"
                      size="md"
                      startIcon={icon}
                      {...rest}
                    />
                  );
                })}
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={5}
              >
                <Divider flex="1" />
                <Text fontSize="md" ml={2} mr={2} color="#6b7280">
                  Or continue with
                </Text>
                <Divider flex="1" />
              </Box>
            </Box>
          )}
          <FormControl required>
            <FormLabel>Email address</FormLabel>
            <Input width="100%" type="text" {...email} />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input width="100%" type="password" {...password} />
          </FormControl>
          <SpaceBetween>
            <Box>
              <Checkbox>Remember me</Checkbox>
            </Box>
            <Box>
              <Link href="#" color>
                Forgot your password?
              </Link>
            </Box>
          </SpaceBetween>
          <Button size="md" {...buttonRest}>
            {buttonText}
          </Button>
        </Stack>
      </FormContainer>
    </Container>
  );
};

export default SignInSide;

SignInSide.propTypes = {
  background: PropTypes.string,
  avatar: PropTypes.string,
  header: PropTypes.string,
  email: PropTypes.object,
  password: PropTypes.object,
  socials: PropTypes.array,
  button: PropTypes.object
};

SignInSide.defaultProps = {
  background: '',
  avatar: '',
  header: '',
  email: {},
  password: {},
  socials: [],
  button: {}
};
