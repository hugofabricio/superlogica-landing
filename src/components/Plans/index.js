import * as S from "./styled";

import Plan from "../Plan";

const Plans = () => (
  <S.PlansWrapper>
    <S.PlansHeader>
      <S.PlansTitle>Planos</S.PlansTitle>
    </S.PlansHeader>
    <S.PlansContainer>
      <Plan />
      <Plan />
      <Plan isBestSeller />
    </S.PlansContainer>
  </S.PlansWrapper>
);

export default Plans;
