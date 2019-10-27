import * as S from "./styled";
import Button from "../Button";

const Nav = ({ links }) => (
  <S.NavList>
    {links.map((link, i) => {
      const { url, label, isButton, leftIcon, rightIcon } = link;

      return (
        <S.NavItem key={i}>
          {isButton ? (
            <Button
              type="lightOutline"
              size="tiny"
              url={url}
              label={label}
              hasLeftIcon={leftIcon}
              hasRightIcon={rightIcon}
            />
          ) : (
            <S.NavLink url={url} label={label} />
          )}
        </S.NavItem>
      );
    })}
  </S.NavList>
);

export default Nav;
