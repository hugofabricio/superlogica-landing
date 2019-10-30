import { node } from "prop-types";
import * as S from "./styled";

const Group = ({ className, children }) => (
  <S.Group className={className}>{children}</S.Group>
);

Group.propTypes = {
  children: node.isRequired
};

export default Group;
