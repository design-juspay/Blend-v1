import styled from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";

const SearchInput = styled.input(() => ({
  padding: "6px 8px",
  borderRadius: 4,
  border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
  width: "100%",
  marginBottom: 10,
  position: "sticky",
  top: 0,
  zIndex: 1000,
  height: 40,
}));


export default SearchInput;