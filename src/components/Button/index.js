import NextLink from "next/link";
import { isExternalUrl } from "../../util/url";
import * as S from "./styled";

const Button = ({
  label,
  hasLeftIcon,
  hasRightIcon,
  isLink,
  href,
  ...props
}) => {
  const buttonContent = (
    <>
      {hasLeftIcon && <S.ButtonLeftIcon name={hasLeftIcon} />}
      <S.ButtonText>{label}</S.ButtonText>
      {hasRightIcon && <S.ButtonRightIcon name={hasRightIcon} />}
    </>
  );

  let SelectedButton = S.Button;

  if (href || isLink) {
    SelectedButton = S.ButtonLink;

    if (!isExternalUrl(href)) {
      return (
        <NextLink href={href} passHref>
          <SelectedButton {...props}>{buttonContent}</SelectedButton>
        </NextLink>
      );
    }
  }

  return <SelectedButton {...props}>{buttonContent}</SelectedButton>;
};

export default Button;
