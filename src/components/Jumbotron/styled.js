import styled from "styled-components";
import { rem, linearGradient } from "polished";
import Container from "../Container";

export const JumbotronWrapper = styled.section`
  padding: ${rem("180px")} 0 ${rem("140px")};

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
`;

export const JumbotronHeader = styled.header`
  max-width: ${rem("670px")};
`;

export const JumbotronTitle = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${rem("56px")};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  line-height: ${rem("72px")};
  margin-bottom: ${rem("15px")};
`;

export const JumbotronText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${rem("20px")};
  max-width: ${rem("470px")};
  margin-bottom: ${rem("25px")};
`;
