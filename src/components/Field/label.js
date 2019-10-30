import { string, bool } from "prop-types";
import * as S from "./styled";

const Label = ({ label, hidden, ...props }) => {
  return (
    <S.Label htmlFor={props.id || props.name} hidden={hidden}>
      {label}
    </S.Label>
  );
};

Label.propTypes = {
  label: string.isRequired,
  hidden: bool
};

export default Label;
