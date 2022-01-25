import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Flex, Text, Icon, Button, Fade } from '@webql/core';

const SlideLine = styled(Text)`
  --border-color: white;
  --border-width: 1px;
  --bottom-distance: 0px;
  padding: 5px 1px;

  color: white;
  display: inline-block;
  background-image: linear-gradient(var(--border-color), var(--border-color));
  background-size: 100% var(--border-width);
  background-repeat: no-repeat;
  background-position: 0 calc(100% - var(--bottom-distance));
  transition: background-size 0.3s;
  &:hover {
    background-size: 0% var(--border-width);
  }
`;

export const Banner3 = ({ fixed, timeout, link, text }) => {
  const [inProp, setIn] = useState(true);

  return (
    <Fade
      in={inProp}
      duration={timeout}
      width="full"
      position="fixed"
      top={fixed === 'top' ? 0 : null}
      bottom={fixed === 'bottom' ? 0 : null}
      right={0}
      left={0}
    >
      <Flex
        backgroundColor="palette.primary.base"
        alignItems="center"
        py={{ _: 5, md: 3 }}
        px={{ _: 5, md: 6 }}
      >
        <Flex
          justifyContent="center"
          alignItems={{ _: 'start', md: 'center' }}
          flexDirection={{ _: 'column', md: 'row' }}
          flexGrow={1}
        >
          <Text
            color="white"
            fontWeight="semiBold"
            textAlign={{ lg: 'center' }}
            mr={4}
            mb={{ _: 2, md: 0 }}
          >
            {text}
          </Text>
          <Link href={link.href}>
            <SlideLine>
              {link.text}
              <Icon name={link.icon} color="white" size={4} ml={1} />
            </SlideLine>
          </Link>
        </Flex>

        <Button
          shape="round"
          midIcon="x"
          onClick={() => {
            setIn(false);
          }}
        ></Button>
      </Flex>
    </Fade>
  );
};
