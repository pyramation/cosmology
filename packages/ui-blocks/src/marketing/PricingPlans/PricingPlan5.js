import React, { useState } from 'react';
import {
  Box,
  Link,
  Flex,
  Text,
  Button,
  Icon,
  Grid,
  ButtonGroup,
  Divider
} from '@webql/core';

export const PricingPlan5 = ({ subtitle, minorText, toggle, tiers }) => {
  const [selected, setSelected] = useState('month');
  return (
    <Box py={{ _: 12, md: 16 }} px={{ _: 4, md: 8 }}>
      <Text
        fontSize={{ _: '3xl', md: '5xl' }}
        fontWeight="extrabold"
        textAlign="center"
        mb={5}
      >
        {subtitle}
      </Text>
      <Text
        fontSize={{ _: 'lg', md: '2xl' }}
        color="blackAlpha.600"
        fontWeight="medium"
        textAlign="center"
        letterSpacing="wide"
        mb={8}
      >
        {minorText}
      </Text>
      <Flex justifyContent="center" mb={{ _: 10, md: 16 }}>
        <Box
          maxWidth="md"
          width="full"
          borderRadius="sm"
          backgroundColor="blackAlpha.200"
          p={1}
        >
          <ButtonGroup
            mode="radio"
            variant="tertiary"
            style={{ width: '100%' }}
            selected={selected}
          >
            {toggle.map(({ id, text }) => {
              return (
                <Button
                  id={id}
                  size="md"
                  style={{
                    width: '50%',
                    backgroundColor: selected === id && 'white',
                    borderRadius: selected === id && '4px'
                  }}
                  boxShadow={selected === id && '0 0 5px #cccccc'}
                  onClick={() => setSelected(id)}
                >
                  <Text
                    color={selected === id ? 'blackAlpha.600' : 'inherit'}
                    fontSize={{ _: 'sm', md: 'md' }}
                  >
                    {text}
                  </Text>
                </Button>
              );
            })}
          </ButtonGroup>
        </Box>
      </Flex>
      <Grid
        templateColumns={{
          _: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)'
        }}
        gap={6}
        px={{ md: 4 }}
      >
        {tiers.map(
          ({
            id,
            program,
            desc,
            monthPrice,
            yearPrice,
            link,
            title,
            included
          }) => {
            return (
              <Box
                border="1px solid #cccccc"
                borderRadius="md"
                px={6}
                py={{ _: 6, md: 8 }}
              >
                <Text
                  fontWeight="semibold"
                  fontSize="lg"
                  color="blackAlpha.800"
                  mt={{ _: 2, md: 3 }}
                  mb={{ _: 4, md: 6 }}
                >
                  {program}
                </Text>
                <Text
                  color="blackAlpha.700"
                  lineHeight={{ _: 'shorter', md: 'short' }}
                  mb={{ _: 5, md: 8 }}
                >
                  {desc}
                </Text>
                <Text fontSize="5xl" fontWeight="bold" mb={{ _: 6, md: 10 }}>
                  {selected === 'month' ? monthPrice : yearPrice}
                  <Text
                    as="span"
                    fontSize="lg"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    color="blackAlpha.700"
                    px={4}
                  >
                    {selected === 'month' ? '/ mo' : '/ yr'}
                  </Text>
                </Text>
                <Box mb={8}>
                  <Link href={link.href}>
                    <Button
                      bg={link.bg}
                      color={link.color}
                      style={{ width: '100%' }}
                      py={6}
                    >
                      {link.text}
                    </Button>
                  </Link>
                </Box>
                <Divider my={0} mx={-6} />
                <Box mt={8}>
                  <Text mb={6}>{title}</Text>
                  {included.map(({ id, icon, text }) => {
                    return (
                      <Flex id={id} mb={{ _: 4, md: 6 }}>
                        <Icon
                          name={icon}
                          color="palette.success.base"
                          size={5}
                          mr={4}
                        />
                        <Text color="blackAlpha.700" lineHeight="shorter">
                          {text}
                        </Text>
                      </Flex>
                    );
                  })}
                </Box>
              </Box>
            );
          }
        )}
      </Grid>
    </Box>
  );
};
