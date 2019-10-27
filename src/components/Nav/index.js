import NextLink from "next/link";
import { isExternalUrl } from "../../util/url";
import Button from "../Button";
import * as S from "./styled";

const Nav = ({ links }) => (
  <S.NavList>
    {links.map((link, i) => {
      const { url, label, isButton, leftIcon, rightIcon } = link;

      if (isButton) {
        return (
          <S.NavItem key={i}>
            <Button
              size="tiny"
              appearance="lightOutline"
              href={url}
              label={label}
              hasLeftIcon={leftIcon}
              hasRightIcon={rightIcon}
              target="_blank"
            />
          </S.NavItem>
        );
      }

      if (isExternalUrl(url)) {
        return (
          <S.NavItem key={i}>
            <S.NavLink href={url} title={label} target="_blank">
              {label}
            </S.NavLink>
          </S.NavItem>
        );
      }

      return (
        <S.NavItem key={i}>
          <NextLink href={url} passHref>
            <S.NavLink title={label}>{label}</S.NavLink>
          </NextLink>
        </S.NavItem>
      );
    })}
  </S.NavList>
);

export default Nav;
