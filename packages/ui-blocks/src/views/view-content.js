import { Box } from "@webql/core";
import React from "react";

function ViewContent({ children }) {
  return <Box py={6}>{children}</Box>;
}

export default ViewContent;
