import * as S from "./styled";
import { buttons } from "polished";

const Plan = ({ name, price, features, button, isBestSeller, className }) => {
  const { label, url } = button;
  return (
    <S.PlanCard className={className} isBestSeller={isBestSeller}>
      <S.PlanHeader>
        {isBestSeller && <S.PlanBadge>Melhor custo-benefício</S.PlanBadge>}
        <S.PlanIcon name="cloud" />
        <S.PlanTitle>{name}</S.PlanTitle>
        {price && (
          <S.PlanPrice data-text="+ Taxa de adesão">{price}</S.PlanPrice>
        )}
      </S.PlanHeader>
      {features && (
        <S.PlanContent>
          <S.PlanDetails>
            {features.map((feature, id) => (
              <S.PlanFeature key={id}>{feature}</S.PlanFeature>
            ))}
          </S.PlanDetails>
        </S.PlanContent>
      )}
      <S.PlanFooter>
        <S.PlanButton
          label={label}
          href={url}
          appearance={!isBestSeller ? "primaryDark" : "light"}
          {...button}
        />
      </S.PlanFooter>
    </S.PlanCard>
  );
};

export default Plan;
