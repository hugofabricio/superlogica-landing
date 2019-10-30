import styled from "styled-components";
import media from "styled-media-query";
import { rem } from "polished";

export const NavToggle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${rem(32)};
  height: ${rem(32)};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: ${rem(32)};
    height: ${rem(2)};
    display: block;
    background: ${({ theme }) => theme.colors.light};
    border-radius: ${rem(10)};
    transition: all 0.2s linear;
    position: relative;
    transform-origin: ${rem(1)};

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  ${media.greaterThan("963px")`
    display: none;
  `}
`;
