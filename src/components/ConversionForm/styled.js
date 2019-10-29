import styled from "styled-components";
import media from "styled-media-query";
import { rem } from "polished";
import { Form } from "formik";
import Card from "../Card";
import Button from "../Button";
import { Group, Input } from "../Field";

export const ConversionCard = styled(Card)`
  width: 30%;
  ${media.lessThan("962px")`
    width: 100%;
  `}
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

export const ConversionForm = styled(Form)`
  ${media.between("768px", "962px")`
    display: flex;
    justify-content: space-between;
  `}
`;

export const ConversionGroup = styled(Group)`
  ${media.between("768px", "962px")`
    width: 25%;
    margin-left: ${rem(10)};
    margin-right: ${rem(10)};
  `}
`;

export const ConversionInput = styled(Input)``;

export const ConversionButton = styled(Button)`
  ${media.between("768px", "962px")`
    width: 25%;
    margin-left: ${rem(10)};
  `}
`;
