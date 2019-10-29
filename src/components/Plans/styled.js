import styled from "styled-components";
import { rem, linearGradient } from "polished";
import Container from "../Container";

export const PlansWrapper = styled.section`
  padding-bottom: ${rem(140)};

  ${props => {
    const { theme } = props;

    return linearGradient({
      colorStops: [
        `${theme.colors.light} 0%`,
        `${theme.colors.greyLight} 100%`
      ],
      toDirection: "180deg"
    });
  }}
`;

export const PlansHeader = styled.header`
  display: none;
`;

export const PlansTitle = styled.h2``;

export const PlansContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;
  transform: translateY(${rem(-22)});
`;
