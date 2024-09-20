import styled from "styled-components";


export const ContainerProducts = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`;
export const RowProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  height: auto;
  margin: 3em 0;
  padding: 1.25em;
  box-sizing: border-box;
  gap: 3em;
  h3{
    color: var(--color-textP);
    text-align: center;
    font-size: 2em;
    color: var(--color-text-primary);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 20px;
`;