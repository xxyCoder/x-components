import React, { useEffect, useState } from "react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { ButtonProps } from "./types";
import { emptyFn } from "../_utils";
import { shapeMapClassName, sizeMapClassName, typeMapClassName } from "./utils";

const ButtonInternal: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
    type = "default",
    shape = "round",
    insertSpace = 0,
    htmlType = {},
    disabled = false,
    classNames = "",
    styles = {},
    children,
    size = "middle",
    ghost = false,
    onClick = emptyFn,
    icon,
    iconPosition = "start",
    loading = false,
  },
  ref
) => {
  const className =
    "flex items-center" +
    " " +
    (htmlType.className ?? "") +
    " " +
    typeMapClassName[type] +
    " " +
    shapeMapClassName[shape] +
    " " +
    sizeMapClassName[size] +
    " " +
    classNames;
  const wordSpace = insertSpace === true ? 2 : insertSpace;
  const style = Object.assign(
    {},
    htmlType.style,
    {
      letterSpacing: `${wordSpace}px`,
    },
    ghost
      ? {
          background: "transparent",
        }
      : {},
    styles
  );

  const [innerLoading, setInnerLoading] = useState(false);
  useEffect(() => {
    if (typeof loading === "boolean") {
      setInnerLoading(loading);
      return;
    }
  }, [loading]);

  return (
    <button
      ref={ref}
      {...htmlType}
      disabled={disabled || innerLoading}
      className={className}
      style={style}
      onClick={onClick}
    >
      {innerLoading && <>loading...</>}
      {iconPosition === "start" && icon}
      {children}
      {iconPosition === "end" && icon}
    </button>
  );
};

const Button = forwardRef(ButtonInternal);
export default Button;
