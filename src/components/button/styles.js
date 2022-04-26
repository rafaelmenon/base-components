import styled from "styled-components";

export const Button = styled.button`
  color: #fff !important;
  padding: 0.938rem 1.5rem;
  border-radius: 1.125rem;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: none;
  cursor: pointer;

  ${({ color }) =>
    color === "primary" &&
    `
    background-color: #624fd1;
    border: 1px solid #624fd1;
  `};

  ${({ color }) =>
    color === "secondary" &&
    `
    background-color: #fd683e;
    border: 1px solid #fd683e;
  `};

  ${({ color }) =>
    color === "success" &&
    `
    background-color: #68e365;
    border: 1px solid #68e365;
  `};

  ${({ color }) =>
    color === "danger" &&
    `
    background-color: #f72b50;
    border: 1px solid #f72b50;
  `};

  ${({ color }) =>
    color === "warning" &&
    `
    background-color: #ffa41c;
    border: 1px solid #ffa41c;
  `};

  ${({ color }) =>
    color === "info" &&
    `
    background-color: #b48dd3;
    border: 1px solid #b48dd3;
  `};

  ${({ color }) =>
    color === "light" &&
    `
    background-color: #c8c8c8;
    border: 1px solid #c8c8c8;
  `};

  ${({ color }) =>
    color === "dark" &&
    `
    background-color: #6e6e6e;
    border: 1px solid #6e6e6e;
  `};

  ${({ outline, color }) =>
    outline &&
    color === "primary" &&
    ` 
    background-color: #212130;
    color: #624fd1 !important
  `};

  ${({ outline, color }) =>
    outline &&
    color === "secondary" &&
    ` 
    background-color: #212130;
    color: #fd683e !important
  `};

  ${({ outline, color }) =>
    outline &&
    color === "success" &&
    ` 
    background-color: #212130;
    color: #68e365 !important
  `};

  ${({ outline, color }) =>
    outline &&
    color === "danger" &&
    ` 
    background-color: #212130;
    color: #f72b50 !important
  `};

  ${({ outline, color }) =>
    outline &&
    color === "warning" &&
    ` 
    background-color: #212130;
    color: #ffa41c !important
  `};

  ${({ outline, color }) =>
    outline &&
    color === "info" &&
    ` 
    background-color: #212130;
    color: #b48dd3 !important
  `};

  ${({ outline, color }) =>
    outline &&
    color === "light" &&
    ` 
    background-color: #212130;
    color: #c8c8c8 !important
  `};

  ${({ outline, color }) =>
    outline &&
    color === "dark" &&
    ` 
    background-color: #212130;
    color: #6e6e6e !important
  `};
`;
