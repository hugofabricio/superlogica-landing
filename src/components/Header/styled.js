import styled from "styled-components";
import media from "styled-media-query";
import { rem, linearGradient } from "polished";
import Container from "../Container";

export const HeaderWrapper = styled.header`
  position: absolute;
  background-color: transparent;
  top: ${rem(25)};
  left: 0;
  right: 0;
  z-index: 999;
  height: ${rem(80)};
  width: 100%;
  visibility: visible;
  transition: all 400ms ease;
`;

export const HeaderContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-radius: ${({ theme }) => rem(theme.radius.larger)};
`;

export const HeaderBrand = styled.div`
  margin-right: ${rem(50)};
`;

export const HeaderMenu = styled.nav`
  width: 66.6666%;
  display: flex;
  justify-content: space-between;

  ${media.lessThan("1050px")`
    width: 100%;
  `}

  ${media.lessThan("962px")`
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: ${rem(40)};
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};


    ${props => {
      const { startColor, endColor, theme } = props;

      return linearGradient({
        colorStops: [
          `${startColor ? startColor : theme.colors.secondary} 0%`,
          `${endColor ? endColor : theme.colors.primaryLight} 100%`
        ],
        toDirection: "315deg"
      });
    }}
  `}
`;
