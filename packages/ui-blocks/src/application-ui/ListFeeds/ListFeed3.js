import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Text, Box, Icon, Avatar, Tag } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

const slide = keyframes`
 from {
    transform: translateY(-100px);
    opacity: 0;
  }
 to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDiv = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);

const SlideBox = styled(slideDiv)`
  transform-style: preserve-3d;
  animation-name: ${slide};
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-duration: 1s;
  animation-delay: ${({ timeout }) => `${timeout}ms`};
`;

export const ListFeed3 = ({ data1, data2, active1, active2 }) => {
  return (
    <NavBarWidthWrapper py={8}>
      <Flex justifyContent="center">
        <Box maxWidth={{ md: 'xl' }}>
          <SlideBox timeout={400}>
            <Flex alignItems="center" mb={3}>
              <Box position="relative" mr={4}>
                <Avatar src={data1.authorImage} size={16} minWidth={16} />
                <Box
                  position="absolute"
                  right={-1}
                  bottom={-1}
                  borderRadius="sm"
                  backgroundColor="white"
                  p={1}
                >
                  <Icon name={data1.icon} size={4} color="blue.200" />
                </Box>
              </Box>
              <Box>
                <Text color="blue.900" mb={2}>
                  {data1.author}
                </Text>
                <Text color="blue.300">{data1.status}</Text>
              </Box>
            </Flex>
            <Box
              borderLeft="2px solid #A0AEC0"
              minWidth={{ lg: 'xl' }}
              ml={8}
              pl={12}
              pb={8}
              mb={4}
            >
              <Text color="blue.600" letterSpacing="wide" lineHeight="shorter">
                {data1.desc}
              </Text>
            </Box>
          </SlideBox>
          <SlideBox timeout={800}>
            <Box pl={3}>
              <Flex alignItems="center" mb={3}>
                <Box p={3} mr={6} borderRadius="50%" backgroundColor="blue.50">
                  <Icon name={active1.icon} size={5} color="blue.500" />
                </Box>
                <Box>
                  <Text as="span" color="blue.600">
                    <Text as="span" color="blue.900">
                      {active1.name1}{' '}
                    </Text>
                    {active1.active}{' '}
                    <Text as="span" color="blue.900">
                      {active1.name2}{' '}
                    </Text>
                    {active1.time}
                  </Text>
                </Box>
              </Flex>
              <Box
                borderRight="2px solid"
                borderColor="gray.400"
                mb={3}
                ml={2}
                width={4}
                height={8}
              ></Box>
            </Box>
          </SlideBox>
          <SlideBox timeout={1200}>
            <Box pl={3}>
              <Flex alignItems="center" mb={3}>
                <Box p={3} mr={6} borderRadius="50%" backgroundColor="blue.50">
                  <Icon name={active2.icon} size={5} color="blue.500" />
                </Box>
                <Flex alignItems="center" flexWrap="wrap">
                  <Text as="span" color="blue.600" pr={2}>
                    <Text as="span" color="blue.900">
                      {active2.name}{' '}
                    </Text>
                    {active2.active}{' '}
                  </Text>
                  {active2.tags.map(({ id, color, text }) => {
                    return (
                      <Tag
                        dot
                        color={`palette.${color}.base`}
                        borderRadius="lg"
                        mr={2}
                      >
                        {text}
                      </Tag>
                    );
                  })}
                </Flex>
              </Flex>
              <Box
                borderRight="2px solid"
                borderColor="gray.400"
                mb={3}
                ml={2}
                width={4}
                height={8}
              ></Box>
            </Box>
          </SlideBox>
          <SlideBox timeout={1600}>
            <Flex alignItems="center" mb={3}>
              <Box position="relative" mr={4}>
                <Avatar src={data2.authorImage} size={16} minWidth={16} />
                <Box
                  position="absolute"
                  right={-1}
                  bottom={-1}
                  borderRadius="sm"
                  backgroundColor="white"
                  p={1}
                >
                  <Icon name={data2.icon} size={4} color="blue.200" />
                </Box>
              </Box>
              <Box>
                <Text color="blue.900" mb={2}>
                  {data2.author}
                </Text>
                <Text color="blue.300">{data2.status}</Text>
              </Box>
            </Flex>
            <Box minWidth={{ lg: 'xl' }} ml={8} pl={12} pb={8} mb={4}>
              <Text color="blue.600" letterSpacing="wide" lineHeight="shorter">
                {data2.desc}
              </Text>
            </Box>
          </SlideBox>
        </Box>
      </Flex>
    </NavBarWidthWrapper>
  );
};
