import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Link,
  Flex,
  Text,
  Button,
  FormControl,
  FormFieldError,
  Input,
  Textarea
} from '@webql/core';
import Icon from '@webql/core/src/icon';

export const ContactSection4 = ({ contact, form }) => {
  const { register, handleSubmit, errors } = useForm();
  const [submittedData, setSubmittedData] = useState({});

  const onSubmit = (data, e) => {
    setSubmittedData(data);
    e.target.reset();
  };

  console.log('submittedData', submittedData);

  return (
    <Flex flexDirection={{ _: 'column', md: 'row' }}>
      <Box
        backgroundColor={contact.backgroundColor}
        px={{ _: 6, md: 10 }}
        py={{ _: 10, md: 24 }}
      >
        <Text fontSize={{ _: '3xl', md: '4xl' }} fontWeight="bold" mb={4}>
          {contact.title}
        </Text>
        <Box maxWidth={{ md: 'xs', lg: 'lg' }} mb={8}>
          <Text
            fontSize="lg"
            lineHeight={{ _: 'shorter', md: 'short' }}
            color="blackAlpha.600"
          >
            {contact.desc}
          </Text>
        </Box>
        <Text color="blackAlpha.600" mb={1}>
          {contact.address}
        </Text>
        <Text color="blackAlpha.600" mb={8}>
          {contact.city},&ensp;{contact.stateShort}&ensp;{contact.zipCode}
        </Text>
        <Flex alignItems="center" mb={3}>
          <Icon
            name={contact.phone.icon}
            color="blackAlpha.600"
            size={5}
            mr={3}
          />
          <Text color="blackAlpha.600">{contact.phone.number}</Text>
        </Flex>
        <Flex alignItems="center" mb={6}>
          <Icon
            name={contact.mail.icon}
            color="blackAlpha.600"
            size={5}
            mr={3}
          />
          <Text color="blackAlpha.600">{contact.mail.email}</Text>
        </Flex>
        <Text color="blackAlpha.600">
          {contact.text}&ensp;
          <Box display="inline" borderBottom="1px solid rgba(0, 0, 0, 0.80)">
            <Link href={contact.link.href}>
              <Text as="span" color="blackAlpha.800">
                {contact.link.text}
              </Text>
            </Link>
          </Box>
        </Text>
      </Box>
      <Box
        id="contact-form"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexGrow={1}
        px={{ _: 6, md: 10 }}
        py={{ _: 10, md: 24 }}
      >
        <FormControl mb={6} required invalid={Boolean(errors.fullName)}>
          <Input
            name="fullName"
            type="text"
            size="lg"
            fluidWidth
            placeholder={form.input1}
            ref={register({
              minLength: 2
            })}
          />
          {errors.fullName && (
            <FormFieldError>At least 2 characters</FormFieldError>
          )}
        </FormControl>
        <FormControl mb={6} required invalid={Boolean(errors.email)}>
          <Input
            name="email"
            type="text"
            size="lg"
            fluidWidth
            placeholder={form.input2}
            ref={register({
              pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            })}
          />
          {errors.email && <FormFieldError>Email is invalid</FormFieldError>}
        </FormControl>
        <FormControl mb={6} required>
          <Input
            name="phone"
            type="text"
            size="lg"
            fluidWidth
            placeholder={form.input3}
            ref={register}
          />
        </FormControl>
        <FormControl mb={8}>
          <Textarea
            name="message"
            type="text"
            size="lg"
            fluidWidth
            placeholder={form.input4}
            ref={register}
          />
        </FormControl>
        <Box width={{ _: 'full', md: 24 }}>
          <Button
            type="submit"
            form="contact-form"
            style={{ width: '100%' }}
            py={6}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
