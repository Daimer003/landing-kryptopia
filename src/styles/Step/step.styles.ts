import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`
export const RowrStep = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  height:100%;
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`
export const StepByStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2em;
  box-sizing: border-box;
  margin: auto;
`
export const Tutorial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  margin: 2em 0;
  span{
    width: 400px;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    margin: 0;
  };
`
export const ContentStep = styled.div`
  display: flex;
  flex-direction: column;
  width: min(600px, 100%);
  height: auto;
  gap: 2em;
  h3{
    color: var(--color-text-primary);
    font-size: 3em;
    font-weight: 700;
    animation: ${fadeIn} 0.4s ease-in-out; 
  }
  p{
    color: var(--color-textP);
    animation: ${fadeIn} 0.4s ease-in-out; 
    font-size: 1.1em;
  }
`
export const ContenButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.up.large}{
     justify-content: start;
  };
`;
export const ContenButtonTutorial = styled(ContenButton)`
  justify-content: center;
`;

export const ContentSystem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  svg{
    color: #fff!important;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  padding: 1.25em;
  box-sizing: border-box;
  img{
     display: block;
     width: min(400px, 100%);
     height: auto;
     filter: drop-shadow(-2px 2px 15px rgba(0, 0, 0, 0.7));
     animation: ${fadeIn} 0.4s ease-in-out; 
   }
`;
