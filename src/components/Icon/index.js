import { string } from "prop-types";
import icons from "./content";

const IconComponent = ({ name, className, ...props }) => {
  let Icon = icons[name];
  return <Icon className={className} {...props} />;
};

IconComponent.propTypes = {
  name: string.isRequired
};

export default IconComponent;
