import * as S from "./styled";

const Plan = ({ name, price, features, isBestSeller, className }) => (
  <S.PlanCard className={className} isBestSeller={isBestSeller}>
    <S.PlanHeader>
      {isBestSeller && <S.PlanBadge>Melhor custo-benefício</S.PlanBadge>}
      <S.PlanIcon name="cloud" />
      <S.PlanTitle>{name}</S.PlanTitle>
      <S.PlanPrice data-text="+ Taxa de adesão">{price}</S.PlanPrice>
    </S.PlanHeader>
    <S.PlanContent>
      <S.PlanDetails>
        {features.map((feature, id) => (
          <S.PlanFeature key={id}>{feature}</S.PlanFeature>
        ))}
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
