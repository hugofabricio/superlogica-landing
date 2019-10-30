import { node } from "prop-types";
import * as S from "./styled";

const Card = ({ className, children }) => (
  <S.CardWrapper className={className}>{children}</S.CardWrapper>
);

Card.propTypes = {
  children: node.isRequired
};

export default Card;
