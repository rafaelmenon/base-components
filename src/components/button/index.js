import React from "react";
import { Button } from "./styles";

const ButtonComponent = ({
  label,
  type,
  onClick,
  disabled,
  color,
  outline,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      type={type}
      disabled={disabled}
      color={color}
      outline={outline}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
