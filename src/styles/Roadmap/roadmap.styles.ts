import styled from "styled-components";

export const ContainerRoadmap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  `;
export const RowRoadmap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: auto;
  gap: 3em;
  margin: 3em 0;
  position: relative;
  h3{
    text-align: center;
    font-size: 2em;
    color: var(--color-text-primary);
  }
    span{
      display: flex;
      content: "";
      width: 50%;
      height: 4px;
      position: absolute;
      top: 62px;
      left: 0;
      background-color: var(--color-text-primary);
      ${({ theme }) => theme.breakpoints.up.large}{
        top: 83px;
     };
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  height: auto;
  gap: 20px;
  overflow: auto;
  padding: 4.5em 1.25em;
  box-sizing: border-box;
  border-top: 1px solid var(--color-text-primary);
  position: relative;
  -ms-overflow-style: none; /* Ocultar la barra de desplazamiento predeterminada */
  scrollbar-width: thin; 
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 3000px;
  height: auto;
  gap: 20px;
  position: relative;
  transition: transform 0.3s ease-in-out;
`;
export const Control = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: min(100%, 1600px);
  height: auto;
  position: absolute;
  top: 45px;
  padding: 0 20px;
  box-sizing: border-box;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--color-text-primary);
    border: none;
    font-size: 1.9em;
    color: #000;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
     top: 65px;
     padding: 0 50px;
   };
`;
