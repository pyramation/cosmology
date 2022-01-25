import React from 'react';
import {
  Button,
  Box,
  Stack,
  Link,
  Text,
  FormControl,
  Checkbox
} from '@webql/core';

const TERMS_URL = '/terms-of-service';

export const AgreeToTerms = ({ agreeToTerms = true, ...otherProps }) => {
  return (
    <Box as="form" id="agree-to-terms" {...otherProps}>
      <Box p={{ _: 8, lg: 10 }} minWidth={{ _: '0', md: 'sm' }}>
        <Stack space={5}>
          <FormControl>
            <Checkbox name="accept_terms" size="md" value={false}>
              <Text as="p" muted fontSize={{ _: 'sm', xl: 'md' }}>
                I have read and agreed to the &nbsp;
                <Link href={TERMS_URL} underline>
                  Terms of Service
                </Link>
              </Text>
            </Checkbox>
          </FormControl>

          <Button disabled={!agreeToTerms}>Agree</Button>
        </Stack>
      </Box>
    </Box>
  );
};
