import React from "react";
import { Label, Input, Error } from "./styles";

const InputComponent = ({
  label,
  value,
  placeholder,
  required,
  onChange,
  width,
  error,
  disabled,
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
        error={error}
        disabled={disabled}
      />
      {error && <Error>Campo obrigatório</Error>}
    </>
  );
};

export default InputComponent;
