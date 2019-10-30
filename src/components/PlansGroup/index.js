import { node } from "prop-types";
import * as S from "./styled";

const PlansGroup = ({ children }) => (
  <S.PlansGroupWrapper>{children}</S.PlansGroupWrapper>
);

PlansGroup.propTypes = {
  children: node
};

export default PlansGroup;
