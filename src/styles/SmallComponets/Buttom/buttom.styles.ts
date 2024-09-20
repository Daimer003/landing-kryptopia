import styled, { keyframes } from "styled-components";

// Definimos un keyframe para la animación
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ContainerButtom = styled.div<{ background: string }>`
  display: flex;
  width: 100%;
  height: auto;
  background: var(${({ background }) => background});
  border-radius: var(--border-radius-buttom);
  padding: .7em;
  ${({ theme }) => theme.breakpoints.up.large}{
    max-width: 280px;
  };
`;
export const RowButtom = styled.button<{ color: string, disabled: boolean, load?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  color: var(${({ disabled, color }) => !disabled ? color : "gray"});
  font-size: 1.1em;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  gap: 10px;
  padding: 0.1em;
  box-sizing: border-box;
  span{
     display: ${({ load }) => load ? "flex" : "none"};
     position: absolute;
     right: 0;
     width: 30px;
     height: 30px;
     border: 4px solid rgba(0, 0, 0, 0.3);
     border-left-color: #fff;
     border-radius: 50%;
     animation: ${spin} 1s ease-in-out infinite;
     z-index: 1;
     font-size: 1.1em;
  }
`;