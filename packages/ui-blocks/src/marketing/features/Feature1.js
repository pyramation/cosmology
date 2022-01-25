import React, { useState } from 'react';
import { Box, Link, Flex, Text, Icon } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const svgProps = props => (
  <svg viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="M10 2.531a7.469 7.469 0 1 0 0 14.938 7.469 7.469 0 0 0 0-14.938m0 1.245c1.48 0 2.84.519 3.908 1.384a16.224 16.224 0 0 1-3.298 2.066 17.371 17.371 0 0 0-2.47-3.167A6.246 6.246 0 0 1 10 3.776m-3.097.83c.962.93 1.82 1.969 2.53 3.112A16.113 16.113 0 0 1 3.902 8.75a6.227 6.227 0 0 1 3.001-4.144M3.776 10c2.219 0 4.338-.418 6.29-1.175.209.404.405.813.579 1.236a10.6 10.6 0 0 0-5.177 4.195A6.19 6.19 0 0 1 3.776 10M10 16.224a6.189 6.189 0 0 1-3.586-1.143 9.367 9.367 0 0 1 4.659-3.853 16.17 16.17 0 0 1 .784 4.714 6.226 6.226 0 0 1-1.857.282m3.075-.817a17.372 17.372 0 0 0-.806-4.542 9.332 9.332 0 0 1 2.087-.243c.621 0 1.22.085 1.807.203a6.217 6.217 0 0 1-3.088 4.582m1.281-6.029c-.868 0-1.708.116-2.515.313a17.397 17.397 0 0 0-.621-1.359 17.422 17.422 0 0 0 3.587-2.284 6.202 6.202 0 0 1 1.395 3.517c-.6-.11-1.212-.187-1.846-.187"
    />
  </svg>
);

export const Feature1 = ({
  separator,
  subText,
  majorWords,
  minorWords,
  features,
  ctaText
}) => {
  const [hover, setHover] = useState(false);
  const [iconHover, setIconHover] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);

  function encodeSvg(str) {
    return (
      'data:image/svg+xml;utf8,' +
      str
        .replace(/"/g, "'")
        .replace(/%/g, '%25')
        .replace(/#/g, '%23')
        .replace(/{/g, '%7B')
        .replace(/}/g, '%7D')
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')
    );
  }

  return (
    <Flex width="full" py={24} alignItems="center">
      <NavBarWidthWrapper>
        <Box mt={{ md: 2 }}>
          <Text
            textAlign="center"
            color="gray.500"
            letterSpacing="wide"
            fontSize="lg"
            mb={4}
          >
            {subText}
          </Text>
          <Text as="h1" textAlign="center" fontSize={{ _: '3xl', lg: '4xl' }}>
            {majorWords}
          </Text>
          <Text as="h1" textAlign="center" fontSize={{ _: '3xl', lg: '4xl' }}>
            {minorWords}
          </Text>
        </Box>
        <Flex justifyContent="center" color="#01A1FF" mb={{ _: 12, lg: 16 }}>
          <Box
            backgroundImage={`url("${encodeSvg(separator)}")`}
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
            width={48}
            height={16}
          ></Box>
        </Flex>
        <Flex
          mb={{ _: 0, md: 2, lg: 0 }}
          justifyContent={{ _: 'center', md: 'space-between' }}
          alignItems="center"
          flexWrap={{ _: 'wrap', lg: 'noWrap' }}
        >
          {features.map(({ id, icon, title, description, link }) => {
            return (
              <Box
                id={id}
                maxWidth={{ md: '19rem', lg: 'md' }}
                mb={{ _: 16, md: 8, lg: 0 }}
                mx={{ md: 6, lg: 8 }}
                p={8}
                pb={16}
                borderRadius="sm"
                boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1)"
                onMouseEnter={() => {
                  setHover(true);
                  setSelectedData(id);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setSelectedData(null);
                }}
                style={{
                  transition: 'all .5s',
                  transform:
                    hover && selectedData === id
                      ? 'translate(0px, -20px)'
                      : 'translate(0px, 0px)'
                }}
              >
                <Flex m={4} justifyContent="center">
                  <Icon
                    name={icon}
                    size={16}
                    color="palette.primary.base"
                  ></Icon>
                </Flex>
                <Text as="h2" textAlign="center" fontSize="2xl" mb={2}>
                  {title}
                </Text>
                <Text
                  textAlign="center"
                  fontSize="sm"
                  lineHeight="base"
                  color="gray.600"
                >
                  {description}
                </Text>
                <Flex position="relative" justifyContent="center">
                  <Link
                    position="absolute"
                    zIndex={50}
                    top={10}
                    href={link.href}
                  >
                    <Flex
                      backgroundColor="palette.primary.base"
                      width={12}
                      height={12}
                      borderRadius="round"
                      justifyContent="center"
                      alignItems="center"
                      onMouseEnter={() => {
                        setIconHover(true);
                        setSelectedIcon(id);
                      }}
                      onMouseLeave={() => {
                        setIconHover(false);
                        setSelectedIcon(null);
                      }}
                      style={{
                        transition: 'all .3s',
                        opacity: iconHover && selectedIcon === id ? '0.8' : '1'
                      }}
                    >
                      <Icon name={link.icon} size={4} color="white"></Icon>
                    </Flex>
                  </Link>
                </Flex>
              </Box>
            );
          })}
        </Flex>
        <Box mt={16}>
          <Text textAlign="center" color="gray.600">
            {ctaText}
          </Text>
        </Box>
      </NavBarWidthWrapper>
    </Flex>
  );
};
