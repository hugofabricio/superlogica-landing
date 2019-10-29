import styled from "styled-components";
import { rem, rgba } from "polished";

import Container from "../Container";

export const HeaderWrapper = styled.header`
  position: fixed;
  background-color: transparent;
  top: ${rem(25)};
  left: 0;
  right: 0;
  z-index: 999;
  height: ${rem(80)};
  width: 100%;
  visibility: visible;
  transition: all 300ms ease;

  ${params => {
    const { scrolled } = params;

    if (scrolled) {
      return `
        visibility: hidden;
        transition: all 300ms ease-out;
        transform: translate(0, -100%);
      `;
    }
  }};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-radius: ${({ theme }) => rem(theme.radius.larger)};
`;

export const HeaderBrand = styled.div``;
