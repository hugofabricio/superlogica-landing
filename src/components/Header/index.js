import * as S from "./styled";
import Brand from "../Brand";
import Nav from "../Nav";
import { links, linksLogin } from "./content";

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderContainer>
      <Brand />
      <Nav links={links} />
      <Nav links={linksLogin} />
    </S.HeaderContainer>
  </S.HeaderWrapper>
);

export default Header;
