import { Colors } from "Assets/Colors";

import styled from "styled-components";

export interface Props {
  size?: "xs" | "md" | "lg";
}

const getWidth = (size: Props["size"]) => {
  switch (size) {
    case "xs":
      return "400px";
    case "md":
      return "600px";
    case "lg":
      return "1600px";
    default:
      return "400px";
  }
};

const getHeight = (size: Props["size"]) => {
  switch (size) {
    case "xs":
      return "400px";
    case "md":
      return "600px";
    case "lg":
      return "800px";
    default:
      return "400px";
  }
};

export const Container = styled.div<Props>`
  background: ${Colors.background};
  border-radius: 0.3rem;
  box-shadow: 0px 3px 6px #00000029;
  cursor: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem;

  max-width: ${({ size }) => getWidth(size)};
  width: 100%;

  min-height: ${({ size }) => getHeight(size)};

  margin: auto;
  overflow-y: auto;

  button {
    margin-left: auto;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1em;
  color: ${Colors.grayLight};
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
