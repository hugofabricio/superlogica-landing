import { string, object, bool } from "prop-types";
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
    <S.JumbotronContainer withConversion={withConversion}>
      <S.JumbotronHeader>
        <S.JumbotronTitle>{title}</S.JumbotronTitle>
        {subtitle && <S.JumbotronText>{subtitle}</S.JumbotronText>}
        {button && (
          <Button
            label={button.label}
            appearance="light"
            size="larger"
            href={button.url}
            target="_blank"
          />
        )}
      </S.JumbotronHeader>
      {withConversion && <ConversionForm></ConversionForm>}
    </S.JumbotronContainer>
  </S.JumbotronWrapper>
);

Jumbotron.propTypes = {
  title: string.isRequired,
  subtitle: string,
  button: object,
  withConversion: bool,
  startColor: string.isRequired,
  endColor: string.isRequired
};

export default Jumbotron;
