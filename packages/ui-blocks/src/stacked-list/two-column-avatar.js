import React from 'react';
import { Box, Stack, Avatar, Text, Icon, Center, Link } from '@webql/core';
import styled from 'styled-components';

const CustomStack = styled(Stack)`
  justify-content: center;
  @media (max-width: 321px) {
    > * {
      font-size: 0.85rem;
    }
  }
`;
const defaultTaskLogo = (
  <Icon mt={1} name="circle-check" size={4} mr={1} color="green.300"></Icon>
);
const ListRightColumn = styled(Box)`
  @media (max-width: 415px) {
    display: none;
  }
`;
const ListLeftColumn = styled(Box)`
  @media (max-width: 415px) {
    width: 90%;
  }
`;
const defaultIcon = (
  <Icon mt={1} size={4} mr={1} color="green.300" name="circle-check" />
);
export function TwoColumnAvatar({
  users = [],
  taskDoneIcon = defaultTaskLogo
} = {}) {
  return (
    <>
      <Box width="100%" backgroundColor="gray.100">
        <Box width="100%" py={6} overflow="hidden">
          <Center
            backgroundColor="whiteAlpha.800"
            width="90%"
            intrinsic
            display="flex"
            justifyContent="center"
            overflow="hidden"
            borderRadius="0.75rem"
          >
            <Box
              boxShadow="xs"
              width="100%"
              display="flex"
              flexDirection="column"
              overflow="hidden"
              borderRadius="0.7rem"
            >
              {users.map(user => (
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                  borderBottom="1px solid rgba(0,0,0,0.1)"
                >
                  <ListLeftColumn display="flex" width="50%" height="82.5px">
                    <Avatar
                      size={12}
                      minWidth="80px"
                      p={4}
                      src={user.imageURL}
                    ></Avatar>
                    <CustomStack space={2}>
                      <Text
                        fontSize="md"
                        color="purple.500"
                        fontWeight="medium"
                      >
                        {user.name}
                      </Text>
                      <Text fontSize="md" color="gray.500">
                        <Icon name="mail" size={5} mr={1}></Icon> {user.email}
                      </Text>
                    </CustomStack>
                  </ListLeftColumn>
                  <ListRightColumn
                    display="flex"
                    width="48%"
                    justifyContent="space-between"
                    alignItems="center"
                    height="82.5px"
                  >
                    <Stack space={2}>
                      <Text fontSize="md" fontWeight="medium">
                        Applied on {user.dateApplied}
                      </Text>
                      <Text fontSize="md" color="gray.500">
                        {taskDoneIcon} {user.taskDone}
                      </Text>
                    </Stack>
                  </ListRightColumn>
                  <Link>
                    <Icon name="chevron-right" size={4}></Icon>
                  </Link>
                </Box>
              ))}
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
}
export default TwoColumnAvatar;
