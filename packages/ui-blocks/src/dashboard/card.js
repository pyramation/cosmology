import React from 'react';
import { Flex, Text, Avatar, Icon, Button, Divider } from '@webql/core';
import { CardContainer, PulicProfileBox1, RightIcon } from './styled';

export const Card = ({
  left,
  title,
  setLeftAnimateMain,
  setactive,
  setLeftAnimate,
  data,
  button
}) => {
  return (
    <CardContainer left={left}>
      <PulicProfileBox1>
        <Flex>
          <Avatar
            src="https://avatars.githubusercontent.com/u/545047?s=460&u=9298cb1f2a7caf18a146e56f20b3d205e3abbd93&v=4"
            size={8}
          />
          <Text mt={1} pl={2} color="#4D4D4D">
            {title.toUpperCase()}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          {button === true ? (
            <>
              <Button
                mr={2}
                variant="secondary"
                size="md"
                color="#808080"
                bg="#fcfcfc"
              >
                Preview
              </Button>
              <Divider orientation="verticle" />
            </>
          ) : null}
          <RightIcon
            onClick={() => {
              setLeftAnimateMain('translateX(0)');
              setLeftAnimate('translate(480px,10px)');
              setactive('');
            }}
          >
            <Icon color="#808080" size={6} name="chevron-right" />
          </RightIcon>
        </Flex>
      </PulicProfileBox1>

      {data}
    </CardContainer>
  );
};
