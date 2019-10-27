import styled from "styled-components";
import { rem, rgba } from "polished";

export const CardWrapper = styled.div`
  padding: ${rem("40px")};

  /* Sizes */
  ${props => {
    const { theme } = props;

    return `
      background-color ${theme.colors.light};
      border-radius: ${rem(theme.radius.larger)};
      box-shadow: 0 ${rem("20px")} ${rem("20px")} ${rem("-15px")} 
      ${rgba(theme.colors.dark, 0.2)}
    `;
  }}
`;
