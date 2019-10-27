import styled from "styled-components";
import { rem } from "polished";
import Card from "../Card";

export const ConversionFormWrapper = styled(Card)`
  max-width: ${rem("360px")};
`;

export const ConversionFormHeader = styled.header`
  text-align: center;
  margin-bottom: ${rem("30px")};
`;

export const ConversionFormTitle = styled.h2`
  font-weight: 500;
  font-size: ${rem("20px")};
`;

export const ConversionFormContent = styled.div``;
