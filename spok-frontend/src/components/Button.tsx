import React from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
}

export default function Button(props: ButtonProps) {
  const { children, className, variant = "default", ...buttonProps } = props;
  const variantStyle = styles[`button-${variant}`];
  return (
    <button
      {...buttonProps}
      className={`${styles.button} ${className} ${variantStyle}`}
    >
      {children}
    </button>
  );
}
