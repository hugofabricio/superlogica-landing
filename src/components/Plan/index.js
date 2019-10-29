import * as S from "./styled";

const Plan = ({ className, isBestSeller }) => (
  <S.PlanCard className={className} isBestSeller={isBestSeller}>
    <S.PlanHeader>
      {isBestSeller && <S.PlanBadge>Melhor custo-benefício</S.PlanBadge>}
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
      <S.PlanButton
        label="Comprar"
        appearance={!isBestSeller ? "primaryDark" : "light"}
        hasLeftIcon="cart"
      />
    </S.PlanFooter>
  </S.PlanCard>
);

export default Plan;
