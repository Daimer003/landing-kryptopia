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


export const ImgIcon = styled.div`
  display: flex;
  width: 130px;
  height: auto;
  img{
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(9px);
  z-index: 999;
  box-sizing: border-box;
`;

export const Row = styled.div<{ color: string, small: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: var(--color-background-black); */
  width: min(600px, 100%);
  border-radius: 8px;
  /* border: 1px solid  #434343; */
  height: auto;
  border-radius: 12px;
  position: relative;
  margin: 20px;
  animation: ${fadeIn} 0.4s ease-in-out; 
`;

export const BodyModal = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  margin: auto;
`;

export const HeaderModal = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  font-size: 25px;
  top: 0;
  right: 0;
  padding: 6px;
  box-sizing: border-box;
  position: absolute;
  z-index: 9999;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: var(--color-text-black);
    color: var(--color-textP);
    cursor: pointer;
  }
`;