import styled from "styled-components";
import { MdOutlineTagFaces } from "react-icons/md";
import { IoThumbsUp } from "react-icons/io5";
import { FiCheckSquare } from "react-icons/fi";
import { AiOutlineInfoCircle, AiOutlineClose } from "react-icons/ai";
import { TiInfoOutline } from "react-icons/ti";
import { VscError } from "react-icons/vsc";

export const Body = styled.div`
  position: fixed;
  top: 10px;
  display: flex;
  padding: 15px 20px;
  border-radius: 20px;
  left: 30%;
  right: 30%;
  color: #fff;

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

const ICON = `
  color: inherit;
  font-size: 25px !important;
  margin-right: 10px
`;

export const IconPrimary = styled(MdOutlineTagFaces)`
  ${ICON}
`;

export const IconSecondary = styled(IoThumbsUp)`
  ${ICON}
`;

export const IconSuccess = styled(FiCheckSquare)`
  ${ICON}
`;

export const IconInfo = styled(AiOutlineInfoCircle)`
  ${ICON}
`;

export const IconWarning = styled(TiInfoOutline)`
  ${ICON}
`;

export const IconDanger = styled(VscError)`
  ${ICON}
`;

export const IconClose = styled(AiOutlineClose)`
  position: absolute;
  right: 20px;
  margin-top: 4px;
  cursor: pointer;
`;
