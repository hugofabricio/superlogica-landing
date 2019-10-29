import * as S from "./styled";
import Button from "../Button";
import ConversionForm from "../ConversionForm";

const Jumbotron = ({
  title,
  subtitle,
  button,
  withConversion,
  startColor,
  endColor
}) => (
  <S.JumbotronWrapper id="intro" startColor={startColor} endColor={endColor}>
    <S.JumbotronContainer>
      <S.JumbotronHeader>
        <S.JumbotronTitle>{title}</S.JumbotronTitle>
        {subtitle && <S.JumbotronText>{subtitle}</S.JumbotronText>}
        {button && (
          <Button
            label={button.label}
            appearance="light"
            size="larger"
            url={button.url}
          />
        )}
      </S.JumbotronHeader>
      {withConversion && <ConversionForm></ConversionForm>}
    </S.JumbotronContainer>
  </S.JumbotronWrapper>
);

export default Jumbotron;
