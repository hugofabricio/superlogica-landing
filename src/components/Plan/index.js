import * as S from "./styled";

import Button from "../Button";

const Plan = ({ className, isBestSeller }) => (
  <S.PlanCard className={className} isBestSeller={isBestSeller}>
    <S.PlanHeader>
      <S.PlanBadge>Melhor custo-benefício</S.PlanBadge>
      <S.PlanIcon name="cloud" />
      <S.PlanTitle>Plano A</S.PlanTitle>
      <S.PlanPrice data-text="+ Taxa de adesão">134</S.PlanPrice>
    </S.PlanHeader>
    <S.PlanContent>
      <S.PlanDetails>
        <S.PlanFeature>Lorem ipsum dolor sit amet</S.PlanFeature>
        <S.PlanFeature>Lorem ipsum dolor sit amet</S.PlanFeature>
        <S.PlanFeature>Lorem ipsum dolor sit amet</S.PlanFeature>
      </S.PlanDetails>
    </S.PlanContent>
    <S.PlanFooter>
      <Button label="Comprar" appearance="primaryDark" hasLeftIcon="cart" />
    </S.PlanFooter>
  </S.PlanCard>
);

export default Plan;
