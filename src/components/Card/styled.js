import styled from "styled-components";
import { rem, rgba } from "polished";

export const CardWrapper = styled.div`
  padding: ${rem(40)};
  overflow: hidden;

  ${props => {
    const { theme } = props;

    return `
      background-color ${theme.colors.light};
      border-radius: ${rem(theme.radius.larger)};
      box-shadow: 0 ${rem(20)} ${rem(20)} ${rem(-15)} 
      ${rgba(theme.colors.dark, 0.2)}
    `;
  }}
`;
