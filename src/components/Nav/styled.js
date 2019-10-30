import styled from "styled-components";
import media from "styled-media-query";
import { rem } from "polished";

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    margin-left: ${rem(50)};
  }

  ${media.lessThan("962px")`
    flex-direction: column;
    justify-content: center;

    &:last-of-type {
      margin-left: 0;
      margin-top: ${rem(30)};
    }
  `}
`;

export const NavItem = styled.li`
  margin-left: ${rem(24)};
  margin-right: ${rem(24)};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${media.lessThan("962px")`
    margin: ${rem(10)} 0;
  `}
`;

export const NavLink = styled.a`
  position: relative;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light};

  ${media.greaterThan("962px")`
    &:before {
      content: "";
      position: absolute;
      height: ${rem(2)};
      width: ${rem(20)};
      margin: 0 auto;
      bottom: ${rem(-10)};
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
  `}

  ${media.lessThan("962px")`
    font-size: ${rem(24)};
  `}
`;
