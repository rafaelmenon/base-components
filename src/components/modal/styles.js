import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const Main = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  background-color: #212130;
  border-radius: 5px;
  min-width: 40%;
`;

export const Title = styled.h1`
  padding: 20px;
  border-bottom: 1px solid #6e6e6e33;
`;

export const Content = styled.div`
  padding: 20px;
`;
