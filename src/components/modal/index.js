import React from "react";
import { Main, Body, Title, Content } from "./styles";

const ModalComponent = ({ open, close, title, children }) => {
  return (
    <Main open={open} onClose={close}>
      <Body>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Body>
    </Main>
  );
};

export default ModalComponent;
