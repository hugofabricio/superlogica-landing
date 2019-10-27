import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import Button from "../Button";
import * as S from "./styled";

const ConversionForm = () => (
  <S.ConversionCard>
    <S.ConversionFormHeader>
      <S.ConversionFormTitle>
        Preencha o formulário e receba um kit exclusivo
      </S.ConversionFormTitle>
    </S.ConversionFormHeader>
    <S.ConversionFormContent>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Deve possuir ao menos 3 caracteres")
            .required("Campo obrigatório"),
          email: Yup.string()
            .email("E-mail inválido")
            .required("Campo obrigatório"),
          phone: Yup.string().required("Campo obrigatório")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Input
            label="Nome"
            name="name"
            type="text"
            hasIcon="smile"
            placeholder="Nome"
            hiddenLabel
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            hasIcon="letter"
            placeholder="E-mail"
            hiddenLabel
          />
          <Input
            label="Telefone"
            name="phone"
            type="tel"
            hasIcon="phone"
            placeholder="Telefone"
            hiddenLabel
          />
          <Button type="submit" label="Enviar" appearance="primaryDark" block />
        </Form>
      </Formik>
    </S.ConversionFormContent>
  </S.ConversionCard>
);

export default ConversionForm;
