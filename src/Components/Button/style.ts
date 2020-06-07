import { Props } from ".";

import { Colors } from "../../Assets/Colors";

import styled from "styled-components";

const getFontSize = (size?: Props["size"]) => {
  switch (size) {
    case "xs":
      return ".7rem";
    case "md":
      return "1rem";
    case "lg":
      return "1.3rem";
    default:
      return "1rem";
  }
};

const getColors = (variant?: Props["variant"], color?: Props["color"]) => {
  switch (variant) {
    case "dashed":
      return `
        background-color: transparent;
        color: ${color ? Colors[color] : Colors.grayLight};
        border: .4rem dashed ${Colors.grayLight};
      `;
    case "outline":
      return `
        background-color: transparent;
        color: ${color ? Colors[color] : Colors.grayLight};
        border-color: ${color ? Colors[color] : Colors.grayLight};
      `;
    case "link":
      return `
        background-color: transparent;
        color: ${color ? Colors[color] : Colors.gray};
      `;
    case "ghost":
      return `
        background-color: transparent;
        color: ${color ? Colors[color] : Colors.gray};
      `;
    default:
      return `
        color: ${Colors.grayLight};
        background-color: ${color ? Colors[color] : Colors.gray};
      `;
  }
};

const getHoverStylesForVariant = (
  variant?: Props["variant"],
  color?: Props["color"],
) => {
  switch (variant) {
    case "dashed":
      return `
        background-color: ${Colors.grayLight};
        color: ${color ? Colors[color] : Colors.dark};
        border: .4rem dashed ${Colors.dark};
      `;
    case "outline":
      return `
       border-color: ${color ? `${Colors[color]}90` : `${Colors.gray}90`};
     `;
    case "link":
      return `
       text-decoration: underline;
     `;
    case "ghost":
      return `
       background-color: ${color ? `${Colors[color]}30` : `${Colors.gray}30`};
     `;
    default:
      return "box-shadow: 0px 5px 10px rgba(0,0,0,.2);";
  }
};

const getDisabledStylesForVariant = (variant: Props["variant"]) => {
  switch (variant) {
    case "link":
      return `
        color: ${Colors.grayLight};
      `;
    case "outline":
      return `
        color: ${Colors.grayLight};
        border-color: ${Colors.grayLight};
      `;
    default:
      return `
        color: ${Colors.gray};
        background-color: ${Colors.grayLight};
        border-color: ${Colors.grayLight};
      `;
  }
};

export const Container = styled.button<Props>`
  min-width: ${({ width, isBlock }) =>
    width ? width : isBlock ? "100%" : "auto"};
  width: ${({ width, isBlock }) => (width ? width : isBlock ? "100%" : "auto")};
  max-width: ${({ width, isBlock }) =>
    width ? width : isBlock ? "100%" : "auto"};
  font-size: ${({ size }) => getFontSize(size)};
  border: 2px solid transparent;
  border-radius: ${({ isRounded }) => (isRounded ? "1rem" : ".3rem")};
  padding: ${({ variant }) => (variant === "link" ? 0 : " 0.3rem 1.5rem;")};
  font-weight: 600;
  transition: all 0.15s ease-in-out;
  padding: 1rem;
  background-color: transparent;
  color: white;

  &:focus {
    outline: 1px dotted #212121 !important;
    outline: 5px auto -webkit-focus-ring-color !important;
  }

  ${({ variant, color }) => getColors(variant, color)};

  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      ${({ variant, color }) => getHoverStylesForVariant(variant, color)};
    }
  }

  &:disabled {
    cursor: block;
    pointer-events: none;
    ${({ variant }) => getDisabledStylesForVariant(variant)};
  }

  [data-icon-direction="left"] {
    margin-right: 10px;
  }
  [data-icon-direction="right"] {
    margin-left: 10px;
  }
`;
