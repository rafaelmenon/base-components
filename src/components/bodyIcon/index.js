import React from "react";
import { Body } from "./styles";

const BodyIconComponent = ({ icon, onClick, background, color }) => {
  return (
    <Body onClick={onClick} background={background} color={color}>
      {icon}
    </Body>
  );
};

export default BodyIconComponent;
