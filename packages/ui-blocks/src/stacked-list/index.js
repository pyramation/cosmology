import { Box, Stack } from "@webql/core";
import React, { useMemo } from "react";
import StackedListHeader from "./stacked-list-header";
import StackedListItem, { ListItemActionMenu } from "./stacked-list-item";

function StackedList({
  title,
  listActions,
  items,
  itemActions,
  itemComponent,
  itemSpace = 0,
}) {
  const showMenu = useMemo(
    () =>
      itemActions &&
      ((Array.isArray(itemActions) && itemActions.length) ||
        (typeof itemActions === "object" && Object.keys(itemActions).length)),
    [itemActions]
  );

  return (
    <Box
      bg="white"
      overflow="hidden"
      border="1px solid rgba(0,0,0,0.1)"
      borderRadius="sm"
    >
      {/* Header */}
      {title || (listActions && listActions.length) ? (
        <StackedListHeader p={4} title={title} actions={listActions} />
      ) : null}

      <Stack space={itemSpace}>
        {/* Items */}
        {items.map((item, index) => (
          <StackedListItem
            key={`staked-li-${index}`}
            p={4}
            borderBottom={
              index < items.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none"
            }
            item={item}
            showMenu={showMenu}
            actions={itemActions}
            component={itemComponent}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default StackedList;
