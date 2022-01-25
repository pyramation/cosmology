import css from "@styled-system/css";
import get from "@styled-system/theme-get";
import { Box } from "@webql/core";
import { darken, lighten } from "@webql/core/main/utils/colors";
import styled from "styled-components";

export const StyledStackListItem = styled(Box)`
  display: flex;
  justify-content: space-between;

  ${props => {
    const baseBg = get("colors.accent")(props);
    return css({
      "&:hover, &:active, &:focus": {
        bg: lighten(baseBg, 0.9),
        ".highlight": {
          color: baseBg,
        },
      },
      "&:focus": {
        boxShadow: "outline",
      },
    });
  }}

  ${props => {
    const selectedAndHighlighted = props.selected && props.highlighted;
    const baseBg = get("colors.accent")(props);
    const bg = selectedAndHighlighted
      ? lighten(baseBg, 0.8) // slightly darker than if only either selected or highlighted
      : lighten(baseBg, 0.9);

    return (
      (props.selected || props.highlighted) &&
      css({
        bg,
        color: selectedAndHighlighted ? darken(baseBg, 0.1) : "accent",
        "&:hover": {
          bg,
        },
        "&:active": {
          bg,
        },
        "&:focus": {
          bg,
        },
      })
    );
  }}
`;
