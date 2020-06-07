import styled from "styled-components";

export const Container = styled.div`
  background-color: gray;
  height: 100%;
  width: 350px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const TaskList = styled.div`
  height: 100%;

  > div {
    margin-bottom: 1rem;
  }
`;
