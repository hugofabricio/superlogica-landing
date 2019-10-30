import { bool, string } from "prop-types";
import NextLink from "next/link";
import { isExternalUrl } from "../../util/url";
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

    if (!isExternalUrl(props.href)) {
      return (
        <NextLink href={props.href} passHref>
          <SelectedButton {...props}>{buttonContent}</SelectedButton>
        </NextLink>
      );
    }
  }

  return <SelectedButton {...props}>{buttonContent}</SelectedButton>;
};

Button.propTypes = {
  label: string.isRequired,
  hasLeftIcon: string,
  hasRightIcon: string,
  isLink: bool
};

export default Button;
