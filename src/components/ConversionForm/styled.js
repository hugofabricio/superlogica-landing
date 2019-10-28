import styled from "styled-components";
import { rem } from "polished";
import Card from "../Card";

export const ConversionCard = styled(Card)`
  max-width: ${rem(340)};
  position: absolute;
  z-index: 2;
  right: ${rem(30)};
  overflow: hidden;
`;

export const ConversionFormHeader = styled.header`
  text-align: center;
  margin-bottom: ${rem(30)};
`;

export const ConversionFormTitle = styled.h2`
  font-weight: 500;
  font-size: ${rem(20)};
`;

export const ConversionFormContent = styled.div``;
