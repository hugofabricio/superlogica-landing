import styled from "styled-components";
import { rem, linearGradient } from "polished";
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
      toDirection: "-315deg"
    });
  }}
`;

export const JumbotronContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: ${rem(462)};
`;

export const JumbotronHeader = styled.header`
  max-width: ${rem(670)};
`;

export const JumbotronTitle = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${rem(56)};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  line-height: ${rem(72)};
  margin-bottom: ${rem(15)};
`;

export const JumbotronText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${rem(20)};
  max-width: ${rem(470)};
  margin-bottom: ${rem(25)};
`;
