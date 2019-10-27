import * as S from "./styled";
import Input from "../Input";
import Button from "../Button";

const ConversionForm = () => (
  <S.ConversionFormWrapper>
    <S.ConversionFormHeader>
      <S.ConversionFormTitle>
        Preencha o formulário e receba um kit exclusivo
      </S.ConversionFormTitle>
    </S.ConversionFormHeader>
    <S.ConversionFormContent>
      <Input label="Nome" />
      <Input label="E-mail" />
      <Input label="Telefone" />
      <Button label="Enviar" url="/" type="primaryDark" block />
    </S.ConversionFormContent>
  </S.ConversionFormWrapper>
);

export default ConversionForm;
