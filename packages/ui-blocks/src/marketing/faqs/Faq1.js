import React from 'react';
import { Text, Heading, Box, Divider, Accordion } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const Faq1 = ({ majorText, questions }) => {
  return (
    <Box py={24}>
      <NavBarWidthWrapper>
        <Box px={{ _: 4, lg: 8 }}>
          <Heading as="h1" color="blue.700" textAlign="center" mb={6}>
            {majorText}
          </Heading>
          <Divider mb={1} />
          {questions.map(({ id, question, answer }) => {
            return (
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>
                    <Text
                      fontSize="lg"
                      fontWeight="medium"
                      letterSpacing="wide"
                      color="blue.900"
                      pr={{ _: 2, md: 4 }}
                    >
                      {question}
                    </Text>
                    <Accordion.Icon />
                  </Accordion.Header>
                  <Accordion.Panel>
                    <Text
                      color="blue.600"
                      letterSpacing="wide"
                      lineHeight="base"
                    >
                      {answer}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Box>
      </NavBarWidthWrapper>
    </Box>
  );
};
