import { bool, func } from "prop-types";
import * as S from "./styled";

const NavToggle = ({ open, setOpen }) => {
  return (
    <S.NavToggle open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </S.NavToggle>
  );
};

NavToggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default NavToggle;
