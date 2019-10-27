import * as S from "./styled";

const Label = ({ label, hidden, ...props }) => {
  return (
    <S.Label htmlFor={props.id || props.name} hidden={hidden}>
      {label}
    </S.Label>
  );
};

export default Label;
