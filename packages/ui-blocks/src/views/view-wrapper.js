import { Box } from "@webql/core";
import React from "react";
import ViewContent from "./view-content";
import ViewHeader from "./view-header";

function ViewWrapper({ title, titleDivider, children }) {
  return (
    <Box p={4} bg='bg.100'>
      <ViewHeader title={title} hasDivider={titleDivider} />
      <ViewContent>{children}</ViewContent>
    </Box>
  );
}

export default ViewWrapper;
