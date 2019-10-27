import * as S from "./styled";

const Container = ({ className, children }) => (
  <S.ContainerWrapper className={className}>{children}</S.ContainerWrapper>
);

export default Container;
