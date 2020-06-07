import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";

import { Colors } from "Assets/Colors";

import { Container } from "./style";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof Colors;
  variant?: "outline" | "link" | "ghost" | "dashed";
  isBlock?: boolean;
  width?: string;
  size?: "xs" | "md" | "lg";
  isRounded?: boolean;
  leftIcon?: IconProp;
  rightIcon?: IconProp;
}

const Button: React.FC<Props> = props => {
  const { children, leftIcon, rightIcon } = props;

  const iconContainer = useCallback(
    (icon: IconProp, position: "left" | "right") => {
      return (
        <span data-icon-direction={position}>
          {typeof icon === "string" ? <FontAwesomeIcon icon={icon} /> : icon}
        </span>
      );
    },
    [],
  );

  return (
    <Container {...props}>
      {leftIcon && iconContainer(leftIcon, "left")}
      {children}
      {rightIcon && iconContainer(rightIcon, "right")}
    </Container>
  );
};

export default Button;
