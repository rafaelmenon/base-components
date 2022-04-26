import React, { useMemo } from "react";
import {
  Body,
  IconPrimary,
  IconSecondary,
  IconSuccess,
  IconInfo,
  IconWarning,
  IconDanger,
  IconClose,
} from "./styles";

const AlertComponent = ({ message, color, outline, close, open }) => {
  useMemo(() => {
    if (open) {
      setTimeout(() => {
        close();
      }, 3000);
    }
  }, [open]);

  const returnIcon = () => {
    if (color === "primary") return <IconPrimary />;
    if (color === "secondary") return <IconSecondary />;
    if (color === "success") return <IconSuccess />;
    if (color === "info") return <IconInfo />;
    if (color === "warning") return <IconWarning />;
    if (color === "danger") return <IconDanger />;
    if (color === "dark") return <IconDanger />;
    if (color === "light") return <IconDanger />;
  };

  return (
    <>
      {open && (
        <Body color={color} outline={outline}>
          {returnIcon()}
          {message}
          <IconClose onClick={close} />
        </Body>
      )}
    </>
  );
};

export default AlertComponent;
