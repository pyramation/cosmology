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
  Icon,
  Link
} from '@webql/core';

export const ContactSection7 = ({ contact, form, contactReverse }) => {
  const { register, handleSubmit, errors } = useForm();
  const [submittedData, setSubmittedData] = useState({});

  const onSubmit = (data, e) => {
    setSubmittedData(data);
    e.target.reset();
  };

  console.log('submittedData', submittedData);

  return (
    <Flex
      flexDirection={{
        _: contactReverse ? 'column-reverse' : 'column',
        md: contactReverse ? 'row-reverse' : 'row'
      }}
    >
      <Box
        position="relative"
        width="full"
        maxWidth={{ md: 'xl' }}
        backgroundColor={contact.backgroundColor}
        px={{ _: 6, md: 8 }}
        py={{ _: 8, md: 12 }}
      >
        <Text
          fontSize="xl"
          fontWeight="medium"
          color="whiteAlpha.900"
          mb={{ _: 5, md: 8 }}
        >
          {contact.title}
        </Text>
        <Text
          fontSize={{ md: 'lg' }}
          fontWeight="normal"
          color="whiteAlpha.700"
          lineHeight="short"
          mb={{ _: 6, md: 10 }}
        >
          {contact.desc}
        </Text>
        <Flex alignItems="center" mb={{ _: 4, md: 6 }}>
          <Icon
            name={contact.phone.icon}
            color="whiteAlpha.700"
            size={5}
            mr={3}
          />
          <Text color="whiteAlpha.700">{contact.phone.number}</Text>
        </Flex>
        <Flex alignItems="center" mb={{ _: 8, md: 12 }}>
          <Icon
            name={contact.mail.icon}
            color="whiteAlpha.700"
            size={5}
            mr={3}
          />
          <Text color="whiteAlpha.700">{contact.mail.email}</Text>
        </Flex>
        <Flex maxWidth={48} justifyContent="space-between">
          {contact.socialMedia.map(({ href, icon }) => {
            return (
              <Link href={href}>
                <Icon name={icon} color="whiteAlpha.700" size="1.75rem" />
              </Link>
            );
          })}
        </Flex>
        <Box
          position="absolute"
          bottom={0}
          right={0}
          zIndex={5}
          style={{
            clipPath: 'polygon(100% 0px, 100% 100%, 20% 100%, 20% 70%)'
          }}
          backgroundColor="whiteAlpha.300"
          width="50%"
          height={{ _: 48, md: 'xs' }}
        ></Box>
      </Box>
      <Box
        id="contact-form"
        as="form"
        width="full"
        flexGrow={1}
        px={{ _: 6, md: 8 }}
        py={{ _: 6, md: 12 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text fontSize={{ _: 'xl', md: '2xl' }} fontWeight="semibold" mb={6}>
          {form.title}
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
                {form.input1}
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
                {form.input2}
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
        <Flex
          justifyContent="space-between"
          flexDirection={{ _: 'column', md: 'row' }}
          flexGrow={1}
          mb={6}
        >
          <FormControl
            mr={{ md: 6 }}
            mb={{ _: 6, md: 0 }}
            flexGrow={1}
            required
            invalid={Boolean(errors.email)}
          >
            <FormLabel>
              <Text as="span" fontSize="inherit" color="blackAlpha.700">
                {form.input3}
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
          <FormControl flexGrow={1}>
            <FormLabel width="full">
              <Flex justifyContent="space-between">
                <Text fontSize="inherit" color="blackAlpha.700" pr={4}>
                  {form.input4.title}
                </Text>
                <Text fontSize="inherit" color="blackAlpha.600">
                  {form.input4.tip}
                </Text>
              </Flex>
            </FormLabel>
            <Input
              name="phone"
              type="text"
              size="lg"
              fluidWidth
              placeholder={form.input4.placeholder}
              ref={register}
            />
          </FormControl>
        </Flex>
        <FormControl mb={6}>
          <FormLabel width="full">
            <Flex justifyContent="space-between">
              <Text fontSize="inherit" color="blackAlpha.700" pr={4}>
                {form.input5}
              </Text>
            </Flex>
          </FormLabel>
          <Input name="subject" type="text" size="lg" ref={register} />
        </FormControl>
        <FormControl mb={8}>
          <FormLabel width="full">
            <Flex justifyContent="space-between">
              <Text fontSize="inherit" color="blackAlpha.700" pr={4}>
                {form.input6.title}
              </Text>
              <Text fontSize="inherit" color="blackAlpha.600">
                {form.input6.tip}
              </Text>
            </Flex>
          </FormLabel>
          <Textarea name="message" type="text" ref={register} />
        </FormControl>
        <Flex width="full" justifyContent="end">
          <Box width={{ _: 'full', md: 24 }}>
            <Button type="submit" form="contact-form" style={{ width: '100%' }}>
              {form.button}
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
