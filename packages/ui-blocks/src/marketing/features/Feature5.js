import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Icon,
  Grid,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Divider,
  Input,
  Button,
  Avatar,
  Tag
} from '@webql/core';
import { CountryFlagCanada } from '../svg/index';

export const Feature5 = ({
  title,
  description,
  typeA,
  typeB,
  form,
  paymentList
}) => {
  const [spendValue, setSpendValue] = useState(null);
  const [recipientValue, setRecipientValue] = useState(null);
  const [currencyValue, setCurrencyValue] = useState(null);

  useEffect(() => {
    if (!currencyValue)
      setCurrencyValue(form.currency.options.map(({ text }) => text)[0]);
    if (!spendValue) setSpendValue(form.inputB.inputDefault);
    if (!recipientValue) setRecipientValue(form.inputC.inputDefault);
  }, []);

  return (
    <Box py={{ _: 12, md: 24 }}>
      <Box px={{ _: 16, md: 20, lg: 32 }}>
        <Heading
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          color="black"
          mb={{ _: 4, md: 4, lg: 3 }}
        >
          {title}
        </Heading>
        <Box maxWidth="3xl" m="0 auto">
          <Text
            textAlign="center"
            mb={{ _: 12, md: 16 }}
            lineHeight={{ _: 'base', lg: 'short' }}
            color="blackAlpha.700"
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Grid
        px={{ _: 0, md: 16, lg: 32 }}
        templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
        rowGap={4}
        columnGap={{ _: 32, md: 20 }}
        justifyContent={{ _: 'center', md: 'space-between' }}
      >
        <Box pl={{ _: 10, md: 0, lg: 2 }} pr={{ _: 10, md: 0 }}>
          <Text fontSize="3xl" fontWeight="medium" mb={{ _: 4, lg: 2 }}>
            {typeA.title}
          </Text>
          <Text
            mb={{ _: 12, md: 16 }}
            lineHeight="short"
            color="blackAlpha.700"
          >
            {typeA.description}
          </Text>
          {typeA.features.map(({ id, icon, title, description }) => {
            return (
              <Flex mb={16}>
                <Box
                  borderRadius="sm"
                  backgroundColor="palette.primary.base"
                  px={5}
                  py={5}
                  maxHeight={16}
                  mr={4}
                >
                  <Icon name={icon} size={6} color="white"></Icon>
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="lg" color="black">
                    {title}
                  </Text>
                  <Text fontSize="sm" lineHeight="base" color="blackAlpha.700">
                    {description}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
        <Box pl={{ _: 10, md: 0 }} pr={{ _: 10, md: 4 }}>
          <Box boxShadow="0 10px 15px -3px rgb(0 0 0 / 10%)" px={6}>
            <Box py={8}>
              <Text fontWeight="medium" mb={2}>
                {form.title}
              </Text>
              <Text fontSize="sm" color="blackAlpha.700" mb={{ _: 4, md: 6 }}>
                {form.description}
              </Text>

              <FormControl>
                <FormLabel color="blackAlpha.700" mb={4}>
                  {form.inputA.label}
                </FormLabel>
                <Select
                  size="lg"
                  fluidWidth
                  style={{
                    boxShadow:
                      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)'
                  }}
                  placeholder={form.inputA.placeholder}
                  items={form.inputA.options.map(({ text }) => text)}
                  onSelectedItemChange={changes => {
                    console.log('onSelectedItemChange', changes);
                    console.log(
                      'filter the value:',
                      form.inputA.options.filter(
                        obj => obj.text === changes.selectedItem
                      )[0].id
                    );
                  }}
                />
              </FormControl>
            </Box>
            <Divider mx={-6} />
            <Box py={8}>
              <FormControl>
                <FormLabel color="blackAlpha.700" mb={4}>
                  {form.inputB.label}
                </FormLabel>
                <Flex flexWrap={{ _: 'wrap', md: 'nowrap' }} width="full">
                  <Box flexGrow={1}>
                    <Input
                      size="lg"
                      autoFocus
                      fluidWidth
                      minWidth={40}
                      type="text"
                      value={spendValue}
                      startElement={<Icon name="dollar-sign" />}
                      onChange={e => {
                        console.log('spend', e.target.value);
                      }}
                    />
                  </Box>
                  <Box
                    maxWidth={{ _: 'full', md: 40 }}
                    flexGrow={{ _: 1, lg: 0 }}
                  >
                    <Select
                      size="lg"
                      style={{
                        boxShadow:
                          'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)'
                      }}
                      startElement={
                        currencyValue ? (
                          <CountryFlagCanada
                            width={24}
                            height="full"
                            style={{ marginRight: '12px' }}
                          />
                        ) : null
                      }
                      items={form.currency.options.map(({ text }) => text)}
                      placeholder={
                        currencyValue
                          ? currencyValue
                          : form.currency.placeholder
                      }
                      onSelectedItemChange={changes => {
                        console.log('onSelectedItemChange', changes);
                        setCurrencyValue(changes.selectedItem);
                      }}
                    />
                  </Box>
                </Flex>
              </FormControl>
              <Box
                width="full"
                mt={6}
                border="1px solid"
                borderColor="gray.100"
                borderRadius="sm"
                py={3}
                px={5}
              >
                <Flex justifyContent="space-between" flexWrap="wrap">
                  <Text fontSize="sm" fontWeight="medium">
                    {form.detail.text1}
                  </Text>
                  <Text fontSize="sm" color="blackAlpha.700">
                    {form.detail.label1}
                  </Text>
                </Flex>
                <Divider mx={-5} my={3} />
                <Flex justifyContent="space-between" flexWrap="wrap">
                  <Text fontSize="sm" fontWeight="medium">
                    {form.detail.text2}
                  </Text>
                  <Text fontSize="sm" color="blackAlpha.700">
                    {form.detail.label2}
                  </Text>
                </Flex>
              </Box>
              <Box mt={8}>
                <FormControl>
                  <FormLabel color="blackAlpha.700" mb={4}>
                    {form.inputC.label}
                  </FormLabel>
                </FormControl>
                <Flex flexWrap={{ _: 'wrap', md: 'nowrap' }} width="full">
                  <Box flexGrow={1}>
                    <Input
                      size="lg"
                      fluidWidth
                      minWidth={40}
                      type="text"
                      value={recipientValue}
                      startElement={<Icon name="dollar-sign" />}
                    />
                  </Box>
                  <Box
                    maxWidth={{ _: 'full', md: 40 }}
                    flexGrow={{ _: 1, lg: 0 }}
                  >
                    <Select
                      size="lg"
                      style={{
                        boxShadow:
                          'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)'
                      }}
                      startElement={
                        currencyValue ? (
                          <CountryFlagCanada
                            width={24}
                            height="full"
                            style={{ marginRight: '12px' }}
                          />
                        ) : null
                      }
                      items={form.currency.options.map(({ text }) => text)}
                      placeholder={
                        currencyValue
                          ? currencyValue
                          : form.currency.placeholder
                      }
                      onSelectedItemChange={changes => {
                        console.log('onSelectedItemChange', changes);
                        setCurrencyValue(changes.selectedItem);
                      }}
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box
              backgroundColor="blackAlpha.50"
              py={3}
              px={12}
              mx={-6}
              space={0}
            >
              <Stack
                justifyContent={{ _: 'center', md: 'end' }}
                inline
                wrap
                pb={4}
              >
                <Button
                  variant="tertiary"
                  flexGrow={{ _: 1, md: 0 }}
                  mr={{ _: 0, md: 4 }}
                  style={{ marginBottom: 0 }}
                >
                  <Text fontSize="sm" color="blackAlpha.700" px={2}>
                    Cancel
                  </Text>
                </Button>
                <Button
                  type="submit"
                  flexGrow={{ _: 1, md: 0 }}
                  style={{ boxShadow: 'none', marginBottom: 0 }}
                >
                  <Text fontSize="sm" color="white" px={2}>
                    Submit
                  </Text>
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        mt={{ _: 16, lg: 24 }}
        px={{ _: 0, md: 16, lg: 32 }}
        templateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
        rowGap={4}
        columnGap={{ _: 32, md: 20 }}
        justifyContent={{ _: 'center', md: 'space-between' }}
      >
        <Box pl={{ _: 10, md: 0 }} pr={{ _: 10, md: 4 }}>
          {paymentList.map(
            ({
              avatarImage,
              paymentName,
              paymentAmount,
              currency,
              status,
              statusText
            }) => {
              return (
                <Flex
                  backgroundColor="blackAlpha.50"
                  py={3}
                  px={5}
                  mb={6}
                  borderRadius="md"
                  boxShadow="0 4px 6px -1px rgb(0 0 0 / 10%)"
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap={{ _: 'wrap', md: 'nowrap' }}
                >
                  <Flex alignItems="center">
                    <Avatar
                      src={avatarImage}
                      size={12}
                      mr={4}
                      minWidth={12}
                    ></Avatar>
                    <Box>
                      <Text pb={1} fontSize="sm" fontWeight="semibold">
                        {paymentName}
                      </Text>
                      <Flex>
                        <Text fontSize="sm" fontWeight="semibold" mr={1}>
                          {paymentAmount}
                        </Text>
                        <Text fontSize="sm" color="blackAlpha.700">
                          {currency}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Tag
                    dot
                    color={`palette.${status}.base`}
                    py={2}
                    px={4}
                    borderRadius={20}
                    fontWeight="semibold"
                    fontSize="sm"
                    mt={{ _: 2, md: 0 }}
                    flexGrow={{ _: 1, md: 0 }}
                  >
                    {statusText}
                  </Tag>
                </Flex>
              );
            }
          )}
        </Box>
        <Box mt={{ _: 8, lg: 0 }} pl={{ _: 10, md: 0 }} pr={{ _: 10, md: 4 }}>
          <Text fontSize="3xl" fontWeight="medium" mb={{ _: 4, lg: 2 }}>
            {typeB.title}
          </Text>
          <Text
            mb={{ _: 12, md: 16 }}
            lineHeight="short"
            color="blackAlpha.700"
          >
            {typeB.description}
          </Text>
          {typeB.features.map(({ id, icon, title, description }) => {
            return (
              <Flex mb={16}>
                <Box
                  borderRadius="sm"
                  backgroundColor="palette.primary.base"
                  px={5}
                  py={5}
                  maxHeight={16}
                  mr={4}
                >
                  <Icon name={icon} size={6} color="white"></Icon>
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="lg" color="black">
                    {title}
                  </Text>
                  <Text fontSize="sm" lineHeight="base" color="blackAlpha.700">
                    {description}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
      </Grid>
    </Box>
  );
};
