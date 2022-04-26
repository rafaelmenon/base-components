import styled from "styled-components";

export const Label = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: -1px;
`;

export const Input = styled.textarea`
  background-color: #212130;
  border-color: #2e2e42;
  color: #fff;
  border: 1px solid #3e3d3d;
  padding: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  height: 190px;
  width: ${(props) => (props.width ? props.width : "99.4%")};
`;
