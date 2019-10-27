import styled from "styled-components";
import { rem } from "polished";

import Container from "../Container";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: ${rem("35px")};
  left: 0;
  right: 0;
  z-index: 999;
  height: ${rem("80px")};
  width: 100%;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBrand = styled.div``;
