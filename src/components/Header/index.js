import { useState, useEffect } from "react";
import { bool } from "prop-types";
import * as S from "./styled";
import Brand from "../Brand";
import Nav from "../Nav";
import { links, linksLogin } from "./content";
import NavToggle from "../NavToggle";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderBrand>
          <Brand />
        </S.HeaderBrand>
        <S.HeaderMenu open={open}>
          <Nav links={links} />
          <Nav links={linksLogin} />
        </S.HeaderMenu>
        <NavToggle open={open} setOpen={setOpen} />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
