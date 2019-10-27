import * as S from "./styled";

const Feedback = ({ meta }) => (
  <>
    {meta.touched && meta.error ? <S.Feedback>{meta.error}</S.Feedback> : null}
  </>
);

export default Feedback;
