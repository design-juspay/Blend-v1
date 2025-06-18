import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";

const MenuGroupSeperator = styled(RadixMenu.Separator)(() => ({
  height: 1,
  backgroundColor: FOUNDATION_THEME.colors.gray[200],
  margin: "6px 0",
  // margin: "6px 0",
}));

export default MenuGroupSeperator;
