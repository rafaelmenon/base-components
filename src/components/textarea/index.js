import React from "react";
import { Label, Input } from "./styles";

const TextareaComponent = ({
  label,
  value,
  placeholder,
  required,
  onChange,
  width,
}) => {
  return (
    <>
      <Label>{label}:</Label>
      <Input
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        width={width}
      />
    </>
  );
};

export default TextareaComponent;
