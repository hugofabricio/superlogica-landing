import styled from "styled-components";
import { rem, linearGradient } from "polished";
import Container from "../Container";

export const SectionWrapper = styled.section`
  padding-top: ${props => (props.paddingTop ? rem(props.paddingTop) : 0)};
  padding-bottom: ${props =>
    props.paddingBottom ? rem(props.paddingBottom) : 0};

  ${props => {
    const { startColor, endColor, theme } = props;

    return linearGradient({
      colorStops: [
        `${startColor ? startColor : theme.colors.light} 0%`,
        `${endColor ? endColor : theme.colors.greyLight} 100%`
      ],
      toDirection: "180deg"
    });
  }}
`;

export const SectionHeader = styled.header`
  display: none;
`;

export const SectionTitle = styled.h2``;

export const SectionContainer = styled(Container)`
  transform: translateY(${rem(-40)});
`;
