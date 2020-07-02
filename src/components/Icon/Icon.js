import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getIcon = (name, light, regular, brand) => {
  const iconType = light ? 'fal' : brand ? 'fab' : regular ? 'far' : null;
  return iconType ? [iconType, name] : name;
};

/** Icon element */
const Icon = (props) => {
  const {
    name,
    size,
    light,
    regular,
    brand,
    style,
    transform,
    title,
    ...rest
  } = props;

  const icon = getIcon(name, light, regular, brand);

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      aria-label={name}
      transform={transform}
      style={style}
      {...rest}
    />
  );
};

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.string.isRequired,
  /** Icon size: "xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" */
  size: PropTypes.string,
  /** Icon inline style */
  style: PropTypes.object,
  /** Light icon */
  light: PropTypes.bool,
  /** Brand icon */
  brand: PropTypes.bool,
  /** Regular icon */
  regular: PropTypes.bool,
  /** Icon  title */
  title: PropTypes.string,
  /** Icon transform */
  transform: PropTypes.func,
  /** Click callback */
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: 'lg',
  light: false,
  brand: false,
  regular: false,
  transform: null,
  title: '',
};

export default Icon;
