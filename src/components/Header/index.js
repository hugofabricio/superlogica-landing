import { useState, useEffect } from "react";
import * as S from "./styled";
import Brand from "../Brand";
import Nav from "../Nav";
import { links, linksLogin } from "./content";

const useHandleScroll = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const scrollCheck = window.scrollY >= 50;

    if (scrollCheck !== scroll) {
      setScroll(scrollCheck);
    }

    const onScroll = () => {
      const scrollCheck = window.scrollY >= 50;

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

const Header = () => {
  const scroll = useHandleScroll();

  return (
    <S.HeaderWrapper scrolled={scroll}>
      <S.HeaderContainer>
        <Brand />
        <Nav links={links} />
        <Nav links={linksLogin} />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
