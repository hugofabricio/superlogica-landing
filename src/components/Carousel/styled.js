import styled from "styled-components";
import { rem } from "polished";
import Icon from "../Icon";

export const NavIcon = styled(Icon)`
  height: ${rem(25)};
  width: ${rem(25)};

  path {
    fill: ${({ theme }) => theme.colors.light};
  }
`;

export const NavButton = styled.div`
  height: ${rem(25)};
  width: ${rem(25)};
  display: block;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 100;
  cursor: pointer;

  &:hover {
    ${NavIcon} {
      path {
        fill: ${({ theme }) => theme.colors.greyMedium};
      }
    }
  }
`;

export const NavButtonPrev = styled(NavButton)`
  left: ${rem(25)};
`;

export const NavButtonNext = styled(NavButton)`
  right: ${rem(25)};
`;
