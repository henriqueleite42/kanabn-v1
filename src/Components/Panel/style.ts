import { Colors } from "Assets/Colors";

import styled from "styled-components";

const SCROLLBAR_HEIGHT = 3;
const TITLE_HEIGHT = 8;

export const Container = styled.div`
  background-color: ${Colors.background};
  max-height: 100vh;
  height: 100vh;
  color: ${Colors.grayLight};
  overflow: hidden;
`;

export const ColumnList = styled.div`
  padding-bottom: 1rem;
  display: flex;
  height: calc(100% - ${TITLE_HEIGHT}vh);
  overflow-x: scroll;

  > div {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }

  &::-webkit-scrollbar {
    height: ${SCROLLBAR_HEIGHT}vh;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.grayLight}50;
    border-radius: 0.3rem;
  }
`;

export const Title = styled.div`
  padding: 1rem;
  font-size: 1.5em;
  font-weight: bold;
  height: ${TITLE_HEIGHT}vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
