import icons from "./content";

const IconComponent = ({ name, className, ...props }) => {
  let Icon = icons[name];
  return <Icon className={className} {...props} />;
};

export default IconComponent;
