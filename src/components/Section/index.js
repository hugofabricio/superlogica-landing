import * as S from "./styled";

const Section = ({
  title,
  paddingTop,
  paddingBottom,
  startColor,
  endColor,
  isFluid,
  children
}) => (
  <S.SectionWrapper
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    startColor={startColor}
    endColor={endColor}
  >
    <S.SectionHeader>
      <S.SectionTitle>{title}</S.SectionTitle>
    </S.SectionHeader>
    <S.SectionContainer isFluid={isFluid}>{children}</S.SectionContainer>
  </S.SectionWrapper>
);

export default Section;
