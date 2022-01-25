import { Box, Button, Icon, Popover2, usePopup } from "@webql/core";
import { ListItem } from "@webql/core/main/list";
import { StyledMenuList } from "@webql/core/main/menu/styled";
import React from "react";
import { StyledStackListItem } from "./styled";

export default function StackedListItem({
  item,
  actions,
  showMenu,
  component: ItemComponent,
  ...props
}) {
  return (
    <StyledStackListItem {...props}>
      {/* Item */}
      <Box height="100%" flex={1} overflow="hidden">
        <ItemComponent {...item} />
      </Box>

      {/* Item actions */}
      {showMenu ? (
        <Box width={8} mx={2}>
          <ListItemActionMenu item={item} actions={actions} />
        </Box>
      ) : null}
    </StyledStackListItem>
  );
}

function ListItemActionMenu({ item, actions }) {
  const { bindToggle, bindPopover } = usePopup();

  return (
    <>
      <Button
        className="highlight"
        variant="tertiary"
        icon="more"
        {...bindToggle()}
      />

      <Popover2
        Popper={StyledMenuList}
        Arrow={null}
        placement="bottom"
        {...bindPopover()}
      >
        {Array.isArray(actions)
          ? actions.map((action, actionIndex) => (
              <LIActionMenuItem
                key={`li-action-${actionIndex}`}
                action={action}
                item={item}
              />
            ))
          : Object.entries(
              actions
            ).map(([sectionName, sectionActions], sectionIndex) => (
              <LIActionMenuSection
                key={`li-section-${sectionIndex}`}
                section={sectionName}
                actions={sectionActions}
                item={item}
              />
            ))}
      </Popover2>
    </>
  );
}

function LIActionMenuItem({ action, item }) {
  return (
    <ListItem
      href={action.href}
      external={action.external}
      onSelect={() => action.onClick(item)}
      color={action.color}
    >
      {action.icon ? <Icon mr={3} size={4} name={action.icon} /> : null}
      {action.label}
    </ListItem>
  );
}

function LIActionMenuSection({ section, actions, item }) {
  return (
    <>
      <ListItem heading>{section}</ListItem>
      {actions.map((action, actionIndex) => (
        <LIActionMenuItem
          key={`li-sec-action-${actionIndex}`}
          action={action}
          item={item}
        />
      ))}
    </>
  );
}
