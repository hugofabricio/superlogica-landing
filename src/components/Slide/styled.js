import styled from "styled-components";
import { rem } from "polished";
import Card from "../Card";

export const SlideCard = styled(Card)`
  height: ${rem(340)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  /* Block */
  ${props =>
    props.bg &&
    `
      background-image: url(${props.bg});
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

export const SlideContent = styled.div``;

export const SlideTitle = styled.h3`
  font-size: ${rem(32)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${rem(25)};
`;
