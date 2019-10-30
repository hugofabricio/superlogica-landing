import styled from "styled-components";
import media from "styled-media-query";

export const PlansGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${media.lessThan("862px")`
    flex-direction: column;
  `}
`;
