import Header from "../components/Header";
import * as S from "./styled";

const Layout = props => (
  <>
    <Header />
    <S.LayoutMain>{props.children}</S.LayoutMain>
  </>
);

export default Layout;
