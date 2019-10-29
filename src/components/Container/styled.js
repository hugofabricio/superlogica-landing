import styled from "styled-components";
import { rem } from "polished";

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: ${rem(1280)};
  padding-right: ${rem(30)};
  padding-left: ${rem(30)};
  margin-right: auto;
  margin-left: auto;
  margin: 0 auto;

  ${props =>
    props.isFluid &&
    `
      max-width: ${rem(1380)};
    `}
`;
