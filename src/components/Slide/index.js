import Button from "../Button";
import * as S from "./styled";

const Slide = ({ className, title, bg }) => (
  <S.SlideCard bg={bg}>
    <S.SlideContent>
      <S.SlideTitle>{title}</S.SlideTitle>
      <Button
        label="Voltar para o topo"
        href="#intro"
        appearance="light"
        size="larger"
      />
    </S.SlideContent>
  </S.SlideCard>
);

export default Slide;
