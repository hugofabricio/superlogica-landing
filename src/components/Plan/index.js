import { string, number, object, bool, array } from "prop-types";
import * as S from "./styled";

const Plan = ({
  id,
  name,
  price,
  features,
  button,
  isBestSeller,
  className
}) => {
  const { url, label } = button;
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
          to={`/campanhas/${id}`}
          appearance={!isBestSeller ? "primaryDark" : "light"}
          {...button}
        />
      </S.PlanFooter>
    </S.PlanCard>
  );
};

Plan.propTypes = {
  id: string,
  name: string.isRequired,
  price: number,
  features: array,
  button: object.isRequired,
  isBestSeller: bool
};

export default Plan;
