import { Colors } from "Assets/Colors";

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${Colors.dark};
  min-height: 100%;
  height: 100%;
  max-height: 100%;
  min-width: 350px;
  width: 350px;
  max-width: 350px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
`;

export const Title = styled.span`
  overflow: hidden;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const TaskList = styled.div`
  min-height: calc(100% - 3.5rem);
  height: calc(100% - 3.5rem);
  max-height: calc(100% - 3.5rem);
  overflow-y: auto;

  padding-right: 1rem;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.grayLight}50;
    border-radius: 0.3rem;
  }
`;
