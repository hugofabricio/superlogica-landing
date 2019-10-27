import * as S from "./styled";

const Card = ({ className, children }) => (
  <S.CardWrapper className={className}>{children}</S.CardWrapper>
);

export default Card;
