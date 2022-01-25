import { Button, Heading, Stack, Text } from "@webql/core";
import React from "react";

function StackedListHeader({ title, actions, ...props }) {
  return (
    <Stack
      inline
      width="100%"
      borderBottom="1px solid rgba(0,0,0,0.1)"
      {...props}
    >
      <Heading size="sm" width="100%">
        {title}
      </Heading>
      {actions && actions.length ? (
        <Stack inline space={2}>
          {actions.map((action, index) => (
            <Button
              key={`action-${index}`}
              variant="secondary"
              size="sm"
              onClick={action.onClick}
              icon={action.icon}
            >
              {action.label}
            </Button>
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
}

export default StackedListHeader;
