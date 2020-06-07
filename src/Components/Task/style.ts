import { TypeOfColors, Colors, checkIfIsDarkOrLight } from "Assets/Colors";

import styled from "styled-components";

export const Container = styled.div<{ color?: TypeOfColors }>`
  background-color: ${({ color }) => Colors[color || "white"]};
  color: ${({ color }) =>
    checkIfIsDarkOrLight(color || "white") ? "white" : "black"};
  padding: 1rem;
  border-radius: 0.3rem;
`;
