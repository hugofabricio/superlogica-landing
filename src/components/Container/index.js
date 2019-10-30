import { bool, node } from "prop-types";
import * as S from "./styled";

const Container = ({ className, isFluid, children }) => (
  <S.ContainerWrapper className={className} isFluid={isFluid}>
    {children}
  </S.ContainerWrapper>
);

Container.propTypes = {
  isFluid: bool,
  children: node.isRequired
};

export default Container;
