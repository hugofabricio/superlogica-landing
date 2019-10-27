import NextLink from "next/link";
import { isExternalUrl } from "../../util/url";
import * as S from "./styled";

const ButtonContent = ({ label, type, hasLeftIcon, hasRightIcon }) => (
  <>
    {hasLeftIcon && <S.ButtonLeftIcon type={type} name={hasLeftIcon} />}
    <S.ButtonText>{label}</S.ButtonText>
    {hasRightIcon && <S.ButtonRightIcon type={type} name={hasRightIcon} />}
  </>
);

const Button = ({
  label,
  type,
  size,
  url,
  hasLeftIcon,
  hasRightIcon,
  block
}) => {
  if (isExternalUrl(url)) {
    return (
      <S.Button
        href={url}
        title={label}
        type={type}
        size={size}
        block={block}
        target="_blank"
      >
        <ButtonContent
          label={label}
          type={type}
          hasLeftIcon={hasLeftIcon}
          hasRightIcon={hasRightIcon}
        />
      </S.Button>
    );
  } else {
    return (
      <NextLink href={url} passHref>
        <S.Button title={label} type={type} size={size} block={block}>
          {hasLeftIcon && <S.ButtonLeftIcon type={type} name={hasLeftIcon} />}
          <S.ButtonText>{label}</S.ButtonText>
          {hasRightIcon && (
            <S.ButtonRightIcon type={type} name={hasRightIcon} />
          )}
        </S.Button>
      </NextLink>
    );
  }
};

export default Button;
