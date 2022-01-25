import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Link,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormFieldError,
  Input,
  Textarea,
  Select,
  Switch
} from '@webql/core';

export const ContactSection1 = ({
  majorText,
  minorText,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  policy,
  button
}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [selectedCountryNum, setSelectedCountryNum] = useState(
    input5.country[89].number
  );
  const [selectedCountry, setSelectedCountry] = useState(
    input5.country[89].name
  );
  const [submittedData, setSubmittedData] = useState({});
  const watchPolicy = watch('policy', false);

  const onSubmit = (data, e) => {
    setSubmittedData({ ...data, country: selectedCountry });
    e.target.reset();
  };

  useEffect(() => {
    input5.country.map(({ name, number }) => {
      if (selectedCountry === name) setSelectedCountryNum(number);
    });
  }, [selectedCountry]);

  console.log('submittedData', submittedData);

  return (
    <Flex position="relative" justifyContent="center" px={4} py={12}>
      <Box
        position="absolute"
        top={0}
        right={0}
        zIndex={-5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="25px 20px"
        width="full"
        maxWidth={{ _: 32, md: 48 }}
        height={{ _: '20vh', md: '50vh' }}
      ></Box>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        zIndex={-5}
        backgroundImage="radial-gradient(rgb(60 60 60 / 16%) 15%, transparent 20%)"
        backgroundPosition="0 0"
        backgroundSize="25px 20px"
        width="full"
        maxWidth={{ _: 32, md: 48 }}
        height={{ _: '20vh', md: '50vh' }}
      ></Box>
      <Box
        id="signup-form"
        as="form"
        maxWidth="2xl"
        p={4}
        backgroundColor="white"
        borderRadius="md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text fontSize="4xl" fontWeight="extrabold" textAlign="center" mb={4}>
          {majorText}
        </Text>
        <Text
          fontSize="xl"
          color="blackAlpha.600"
          lineHeight="shorter"
          textAlign="center"
          mb={8}
        >
          {minorText}
        </Text>
        <Flex
          justifyContent="space-between"
          flexDirection={{ _: 'column', md: 'row' }}
          flexGrow={1}
          mb={6}
        >
          <FormControl
            flexGrow={1}
            mr={{ md: 6 }}
            mb={{ _: 6, md: 0 }}
            required
            invalid={Boolean(errors.firstName)}
          >
            <FormLabel>
              <Text as="span" fontSize="inherit" color="blackAlpha.700">
                {input1}
              </Text>
            </FormLabel>
            <Input
              name="firstName"
              type="text"
              size="lg"
              ref={register({
                minLength: 2
              })}
            />
            {errors.firstName && (
              <FormFieldError>At least 2 characters</FormFieldError>
            )}
          </FormControl>
          <FormControl flexGrow={1} required invalid={Boolean(errors.lastName)}>
            <FormLabel>
              <Text as="span" fontSize="inherit" color="blackAlpha.700">
                {input2}
              </Text>
            </FormLabel>
            <Input
              name="lastName"
              type="text"
              size="lg"
              ref={register({
                minLength: 2
              })}
            />
            {errors.lastName && (
              <FormFieldError>At least 2 characters</FormFieldError>
            )}
          </FormControl>
        </Flex>
        <FormControl mb={6}>
          <FormLabel>
            <Text fontSize="inherit" color="blackAlpha.700">
              {input3}
            </Text>
          </FormLabel>
          <Textarea name="address" type="text" size="lg" ref={register} />
        </FormControl>
        <FormControl mb={6} required invalid={Boolean(errors.email)}>
          <FormLabel>
            <Text as="span" fontSize="inherit" color="blackAlpha.700">
              {input4}
            </Text>
          </FormLabel>
          <Input
            name="email"
            type="text"
            size="lg"
            ref={register({
              pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            })}
          />
          {errors.email && <FormFieldError>Email is invalid</FormFieldError>}
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>
            <Text fontSize="inherit" color="blackAlpha.700">
              {input5.title}
            </Text>
          </FormLabel>
          <Flex position="relative">
            <Flex
              position={{ _: 'relative', md: 'absolute' }}
              alignItems="center"
              borderRadius="sm"
              boxShadow={{
                _:
                  'inset 0 0 0 1px rgb(16 22 26 / 20%), inset 0 -1px 0 rgb(16 22 26 / 10%);',
                md: 'none'
              }}
              zIndex={5}
              width="full"
              maxWidth={{ _: 'full', md: 48 }}
            >
              <Box width="full" maxWidth={{ _: '50%', md: '50%' }}>
                <Select
                  name="country"
                  variant="tertiary"
                  size="lg"
                  fluidWidth
                  items={input5.country.map(({ name }) => name)}
                  selectedItem={selectedCountry}
                  onSelectedItemChange={changes => {
                    console.log('onSelectedItemChange', changes);
                    setSelectedCountry(changes.selectedItem);
                  }}
                  ref={register}
                />
              </Box>
              <Flex
                justifyContent="center"
                flexGrow={1}
                maxWidth={{ _: '50%', md: '45%' }}
              >
                <Input
                  name="countryCallingCode"
                  readOnly
                  style={{ boxShadow: 'none', textAlign: 'center' }}
                  value={selectedCountryNum}
                  ref={register}
                />
              </Flex>
            </Flex>
            <Box display={{ _: 'none', md: 'block' }} width="full">
              <Input
                name="phoneNumber"
                size="lg"
                pl={48}
                defaultValue={input5.number}
                ref={register}
              />
            </Box>
          </Flex>
          <Box display={{ _: 'block', md: 'none' }}>
            <Input
              name="phoneNumber"
              size="lg"
              defaultValue={input5.number}
              ref={register}
            />
          </Box>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>
            <Text fontSize="inherit" color="blackAlpha.700">
              {input6}
            </Text>
          </FormLabel>
          <Textarea name="message" type="text" size="lg" ref={register} />
        </FormControl>
        <Flex alignItems="center" mb={6} required>
          <Switch
            name="policy"
            size="lg"
            onChange={e => console.log(e.target.checked)}
            mr={4}
            ref={register}
          />
          <Text color="blackAlpha.700">
            {policy.text}&ensp;
            <Link href={policy.link1.href} color>
              {policy.link1.text}
            </Link>
            ,&ensp;
            <Link href={policy.link2.href} color>
              {policy.link2.text}&ensp;
            </Link>
            and&ensp;
            <Link href={policy.link3.href} color>
              {policy.link3.text}
            </Link>
          </Text>
        </Flex>
        <Button
          style={{ width: '100%' }}
          size="lg"
          type="submit"
          form="signup-form"
          disabled={!watchPolicy}
        >
          {button}
        </Button>
      </Box>
    </Flex>
  );
};
