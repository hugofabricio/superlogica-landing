import * as S from "./styled";

const Button = ({ label, hasLeftIcon, hasRightIcon, isLink, ...props }) => {
  const buttonContent = (
    <>
      {hasLeftIcon && <S.ButtonLeftIcon name={hasLeftIcon} />}
      <S.ButtonText>{label}</S.ButtonText>
      {hasRightIcon && <S.ButtonRightIcon name={hasRightIcon} />}
    </>
  );

  let SelectedButton = S.Button;

  if (props.href || isLink) {
    SelectedButton = S.ButtonLink;
  }

  return <SelectedButton {...props}>{buttonContent}</SelectedButton>;
};

export default Button;
