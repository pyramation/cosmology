import React from 'react';
import { Flex, Text, Box, Icon, Button, Avatar } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const PageHeading7 = ({ name, avatar, backgroundImage, buttons }) => {
  return (
    <Box>
      <Box
        position="relative"
        zIndex={-10}
        width="full"
        height={250}
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
      ></Box>
      <NavBarWidthWrapper py={8}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Flex
            position="relative"
            alignItems={{ _: 'center', md: 'end' }}
            flexDirection={{ _: 'column', md: 'row' }}
            mb={{ _: 8, md: 0 }}
            mr={{ md: 4 }}
          >
            <Avatar
              src={avatar}
              size={48}
              minHeight={48}
              height="full"
              position="absolute"
              bottom={{ _: 16, md: -24 }}
              borderRadius="50%"
              boxShadow="0 2px 12px 3px rgba(0, 0, 0, 0.25)"
            />
            <Text
              fontWeight="extrabold"
              fontSize="2xl"
              pl={{ md: 48 }}
              ml={{ md: 4 }}
              pt={{ _: 24, md: 0 }}
            >
              {name}
            </Text>
          </Flex>
          <Flex justifyContent="center" flexWrap="wrap">
            {buttons.map(({ id, icon, text, variant }) => {
              const last = buttons.length;
              return (
                <Box mr={last !== id && 4} my={2}>
                  <Button variant={variant} py={6}>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      mx={{ _: 1, md: 4 }}
                    >
                      <Icon name={icon} color="inherit" size={5} mr={3} />
                      <Text color="inherit">{text}</Text>
                    </Flex>
                  </Button>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </NavBarWidthWrapper>
    </Box>
  );
};
