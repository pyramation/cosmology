import React from 'react';
import styled from 'styled-components';
import { Box, Text, Icon, Center } from '@webql/core';
import { MaxWidthWrapper } from '../max-width-wrapper';

const Container = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bg};
  justify-content: center;
`;
const CardBox = styled(Box)`
  border-radius: 0.5rem;
  width: 100%;
`;

// // can this be "primary"?
// const SubHead = styled.h3`
//   color: #01a1ff;
//   padding-top: 6px;
//   font-weight: normal;
//   font-size: 0.88em;
// `;

const defaultLogo = <Icon color="purple.600" size={16} name="home" mt={8} />;

export function CenteredLayout({
  header,
  subhead,
  logo = defaultLogo,
  children,
  bg = '#fffff',
  primaryColor
} = {}) {
  return (
    <Container bg={bg}>
      <Center>
        <Center intrinsic>
          {logo}
          <Text fontSize="2xl" fontWeight="extrabold" mt={3}>
            {header}
          </Text>
          <Text as="h2" pt={6} color={primaryColor}>
            {subhead}
          </Text>
        </Center>

        <CardBox
          backgroundColor="white"
          boxShadow="border"
          my={[12, 10]}
          mx="auto"
        >
          {children}
        </CardBox>
      </Center>
    </Container>
  );
}
