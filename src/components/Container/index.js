import * as S from "./styled";

const Container = ({ className, isFluid, children }) => (
  <S.ContainerWrapper className={className} isFluid={isFluid}>
    {children}
  </S.ContainerWrapper>
);

export default Container;
