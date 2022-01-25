import { Avatar, Box, Center, Stack, Tag, Text } from "@webql/core";
import React from "react";
import StackedList from "../stacked-list";
import ViewWrapper from "./view-wrapper";

const ROLES_TAG_COLOR_MAP = {
  admin: "green.500",
  contributor: "blue.500",
  default: "gray.500",
};

function getColorForRole(role) {
  const roleKey = role in ROLES_TAG_COLOR_MAP ? role : "default";
  return ROLES_TAG_COLOR_MAP[roleKey];
}

function TeamsView({
  teams,
  users,
  onAddTeam,
  onRemoveTeam,
  onAddUser,
  onRemoveUser,
}) {
  return (
    <ViewWrapper title="Collaborators">
      <Stack space={4}>
        {users ? (
          <StackedList
            title="All members"
            items={users}
            itemComponent={UserItem}
            listActions={[
              {
                icon: "plus",
                onClick: () => onAddUser(),
              },
            ]}
            itemActions={[
              {
                icon: "trash",
                label: "Delete",
                color: "red.500",
                onClick: item => onRemoveUser(item),
              },
            ]}
          />
        ) : null}
        {teams ? (
          <StackedList
            title="Teams"
            items={teams}
            itemComponent={TeamItem}
            listActions={[
              {
                icon: "plus",
                onClick: () => onAddTeam(),
              },
            ]}
            itemActions={[
              {
                icon: "trash",
                label: "Delete",
                color: "red.500",
                onClick: item => onRemoveTeam(item),
              },
            ]}
          />
        ) : null}
      </Stack>
    </ViewWrapper>
  );
}

function UserRoles({ roles, ...props }) {
  return roles ? (
    <Stack space={2} inline>
      {roles.map((role, index) => (
        <Tag
          key={`ur-${index}`}
          color={getColorForRole(role.toLowerCase())}
          {...props}
        >
          {role}
        </Tag>
      ))}
    </Stack>
  ) : null;
}

function UserItem({ online, image, name, email, roles }) {
  return (
    /* Stack the user avatar and info inline, without wrapping */
    <Stack inline space={2} alignItems="stretch">
      {/* Avatar with online badge */}
      <Box position="relative" width={{ xs: 8, md: 12 }}>
        <Box
          position="absolute"
          top={1}
          left={1}
          width={2}
          height={2}
          border="1px"
          borderRadius="full"
          borderColor={online ? "green.300" : "gray.300"}
          bg={online ? "green.100" : "gray.100"}
        />
        <Avatar src={image} name={name} size={{ xs: 8, md: 12 }} />
      </Box>

      <Box flex={1} overflow="hidden">
        <Stack inline wrap space={2} height="100%" alignItems="stretch">
          {/* Stack user name, and email vertically */}
          <Stack space={2} flex={1}>
            <Text muted fontSize="sm" className="highlight">
              {name}
            </Text>
            <Text muted fontSize="xs" className="highlight">
              {email}
            </Text>
            <Box
              flex={1}
              display={{ xs: "flex", md: "none" }}
              alignItems="flex-start"
            >
              <UserRoles roles={roles} />
            </Box>
          </Stack>

          {/* Stack all roles horizontally */}
          {roles ? (
            <Box display={{ xs: "none", md: "flex" }} alignItems="center">
              <UserRoles roles={roles} />
            </Box>
          ) : null}
        </Stack>
      </Box>
    </Stack>
  );
}

function TeamItem({ name, members }) {
  return (
    <Center>
      <Stack space={2}>
        <Text muted fontSize="sm" className="highlight">
          {name}
        </Text>
        <Text muted fontSize="xs" className="highlight">
          {members ? members.length : 0} members
        </Text>
      </Stack>
    </Center>
  );
}

export default TeamsView;
