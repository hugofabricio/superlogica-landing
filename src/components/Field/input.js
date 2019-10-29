import { useField } from "formik";
import Group from "./Group";
import Label from "./Label";
import Feedback from "./Feedback";
import * as S from "./styled";

const Input = ({ label, hasIcon, hiddenLabel, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Group>
      <Label label={label} hidden={hiddenLabel} {...props} />
      <S.TextInputGroup>
        {hasIcon && <S.TextInputIcon name={hasIcon} />}
        <S.TextInput hasIcon={hasIcon ? true : false} {...field} {...props} />
      </S.TextInputGroup>
      <Feedback meta={meta} />
    </Group>
  );
};

export default Input;
