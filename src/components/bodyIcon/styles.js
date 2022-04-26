import styled from "styled-components";

export const Body = styled.div`
  color: ${(props) => (props.color ? props.color : "#624fd1 ")} !important ;
  background-color: ${(props) =>
    props.background ? props.background : "#171622"};
  border-radius: 50%;
  line-height: 1;
  font-size: 1.125rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
