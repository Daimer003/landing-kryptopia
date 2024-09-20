import styled from "styled-components";

export const ContainerPillares = styled.div<{ img: string }>`
  display: flex;
  width: min(990px, 100%);
  min-height: 15em;
  justify-content: center;
  align-items: center;
  padding: 1.25em;
  box-sizing: border-box;
  background-image: url(${({ img }) => img});
`;
export const RowPillares = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  height: auto;
  h3{
    color: var(--color-textP);
    font-size: 2em;
    font-weight: 800;
  }
  p{
    font-size: 1.1em;
    font-weight: 300;
    color: var(--color-textP);
  }
  
`;