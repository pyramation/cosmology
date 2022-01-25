import { Box, Divider, Heading, Text } from "@webql/core";
import React from "react";

function ViewHeader({ title, hasDivider = true, ...props }) {
  return (
    <Box {...props}>
      <Box height={6}>
        <Heading size="sm">{title.toUpperCase()}</Heading>
      </Box>
      {hasDivider ? <Divider mt={4} space={0} /> : null}
    </Box>
  );
}

export default ViewHeader;
