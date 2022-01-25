import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormFieldError,
  Input,
  Textarea,
  RadioGroup,
  Radio
} from '@webql/core';

export const ContactSection5 = ({
  majorText,
  minorText,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  radios,
  button,
  backgroundImage,
  imageReverse
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [radioValue, setRadioValue] = useState('');
  const [submittedData, setSubmittedData] = useState({});

  const onSubmit = (data, e) => {
    setSubmittedData(data);
    setRadioValue('');
    e.target.reset();
  };

  console.log('submittedData', submittedData);

  return (
    <Flex
      flexDirection={{
        _: imageReverse ? 'column-reverse' : 'column',
        md: imageReverse ? 'row-reverse' : 'row'
      }}
    >
      <Box
        id="contact-form"
        as="form"
        width="full"
        maxWidth="3xl"
        px={{ _: 4, md: 8 }}
        py={{ _: 8, md: 12 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text fontSize={{ _: '3xl', md: '5xl' }} fontWeight="extrabold" mb={4}>
          {majorText}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          color="blackAlpha.600"
          lineHeight={{ _: 'short', md: 'base' }}
          mb={{ _: 8, md: 12 }}
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
              ref={register({
                minLength: 2
              })}
            />
            {errors.lastName && (
              <FormFieldError>At least 2 characters</FormFieldError>
            )}
          </FormControl>
        </Flex>
        <FormControl mb={6} required invalid={Boolean(errors.email)}>
          <FormLabel>
            <Text as="span" fontSize="inherit" color="blackAlpha.700">
              {input3}
            </Text>
          </FormLabel>
          <Input
            name="email"
            type="text"
            ref={register({
              pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            })}
          />
          {errors.email && <FormFieldError>Email is invalid</FormFieldError>}
        </FormControl>
        <FormControl mb={6}>
          <FormLabel width="full">
            <Flex justifyContent="space-between">
              <Text fontSize="inherit" color="blackAlpha.700" pr={4}>
                {input4.title}
              </Text>
              <Text fontSize="inherit" color="blackAlpha.600">
                {input4.tip}
              </Text>
            </Flex>
          </FormLabel>
          <Input
            name="phone"
            type="text"
            fluidWidth
            placeholder={input4.placeholder}
            ref={register}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel width="full">
            <Flex justifyContent="space-between">
              <Text fontSize="inherit" color="blackAlpha.700" pr={4}>
                {input5.title}
              </Text>
              <Text fontSize="inherit" color="blackAlpha.600">
                {input5.tip}
              </Text>
            </Flex>
          </FormLabel>
          <Textarea name="address" type="text" ref={register} />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel width="full">
            <Flex justifyContent="space-between">
              <Text fontSize="inherit" color="blackAlpha.700" pr={4}>
                {input6.title}
              </Text>
              <Text fontSize="inherit" color="blackAlpha.600">
                {input6.tip}
              </Text>
            </Flex>
          </FormLabel>
          <Textarea name="message" type="text" ref={register} />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel mb={4}>
            <Text as="span" fontSize="inherit" color="blackAlpha.700">
              {radios.title}
            </Text>
          </FormLabel>
          <RadioGroup
            name="radio"
            value={radioValue}
            onChange={e => setRadioValue(e)}
          >
            {radios.options.map((option, i) => {
              const last = radios.options.length;
              return (
                <Radio value={option} mb={last === i ? 6 : 2} ref={register}>
                  <Text fontSize="sm" color="blackAlpha.700">
                    {option}
                  </Text>
                </Radio>
              );
            })}
          </RadioGroup>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>
            <Text as="span" fontSize="inherit" color="blackAlpha.700">
              {input7}
            </Text>
          </FormLabel>
          <Input name="howToKnow" type="text" ref={register} />
        </FormControl>
        <Flex width="full" justifyContent="end">
          <Box width={{ _: 'full', md: 24 }}>
            <Button type="submit" form="contact-form" style={{ width: '100%' }}>
              {button}
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        flexGrow={1}
        width="full"
        height={{ _: 56, md: 'initial' }}
      ></Box>
    </Flex>
  );
};
