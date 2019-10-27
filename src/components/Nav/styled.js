import styled from "styled-components";
import { rem } from "polished";
import Link from "../Link";

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-left: ${rem("24px")};
  margin-right: ${rem("24px")};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.light};

  &:before {
    content: "";
    position: absolute;
    height: ${rem("2px")};
    width: ${rem("20px")};
    margin: 0 auto;
    bottom: ${rem("-10px")};
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => rem(theme.radius.medium)};
    opacity: 0;
    transition: all ease 0.3s;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;
