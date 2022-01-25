import React, { useState } from 'react';
import { Text, Box, Heading, Grid, Flex, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Faq4 = ({ majorText, icon, questions }) => {
  const [hover, setHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <Box px={4} py={24}>
      <NavBarWidthWrapper>
        <Heading as="h1" textAlign="center" mb={10}>
          {majorText}
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          columnGap={{ _: 8, md: 16, lg: 20 }}
          rowGap={8}
        >
          {questions.map(({ id, question, answer }) => {
            return (
              <Flex
                id={id}
                position="relative"
                justifyContent="center"
                onMouseEnter={() => {
                  setHover(true);
                  setSelectedData(id);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setSelectedData(null);
                }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  width="full"
                  height="full"
                  zIndex={-20}
                  display={hover && selectedData === id ? 'flex' : 'none'}
                >
                  <Icon name={icon} color="blackAlpha.50" size={40}></Icon>
                </Flex>
                <Box
                  py={16}
                  px={8}
                  minHeight={{ lg: '200px' }}
                  borderRadius={hover && selectedData === id ? 'md' : 'none'}
                  boxShadow={
                    hover && selectedData === id
                      ? '0 0 20px 0px rgba(0, 0, 0, 0.35)'
                      : '0px 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }
                >
                  <Text
                    fontSize="lg"
                    fontWeight="medium"
                    letterSpacing="wide"
                    lineHeight="shorter"
                    color="blue.900"
                    mb={3}
                  >
                    {question}
                  </Text>
                  <Text
                    color="blue.600"
                    letterSpacing="wide"
                    lineHeight="shorter"
                  >
                    {answer}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </NavBarWidthWrapper>
    </Box>
  );
};
