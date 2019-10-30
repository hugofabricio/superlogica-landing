import styled from "styled-components";
import media from "styled-media-query";
import { rem, between, linearGradient } from "polished";
import Container from "../Container";

export const JumbotronWrapper = styled.section`
  padding: ${rem(140)} 0 ${rem(120)};

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
`;

export const JumbotronContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: ${rem(460)};

  ${media.lessThan("962px")`
    flex-direction: column;
    min-height: auto;
  `}
`;

export const JumbotronHeader = styled.header`
  max-width: ${rem(630)};

  ${media.lessThan("962px")`
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: ${rem(40)};
  `}
`;

export const JumbotronTitle = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${between("36px", "48px")};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  margin-bottom: ${rem(15)};
`;

export const JumbotronText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${rem(20)};
  max-width: ${rem(470)};
  margin-bottom: ${rem(25)};
`;
