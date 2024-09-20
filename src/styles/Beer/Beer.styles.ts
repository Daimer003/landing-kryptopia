import styled, { keyframes } from "styled-components";


const levitateAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Levitar hacia arriba 10px */
  }
`;

export const ContainerBeer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  nav{
    display: flex;
    justify-content: space-between;
    width: min(1600px, 100%);
    height: 35px;
    flex-direction: row;
    margin: 20px 0;
    padding: 0 20px;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.up.large} {
    height: 100vh;
 };
`;
export const RowBeer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(1600px, 100%);
  height: 100%;
  gap: 20px;
  padding: 1.25em;
  box-sizing: border-box;
  margin-top: 40px;
  ${({ theme }) => theme.breakpoints.up.large} {
    flex-direction: row;
      margin-top: 0px;
 };
`;
export const ContentBeer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(1200px, 100%);
  height: auto;
  gap: 3em;
  h2{
    font-size: 3em;
    margin: 0;
    text-align: center;
    color: var(--color-bg-buttom-primary);
  }
  p{
    font-size: 1.1em;
    margin: 0;
    color: var(--color-textP);
    text-align: center;
    width: 100%;
    max-width: 500px;
    strong{
      font-weight: 800;
    }
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    h2, p, span{
      text-align: start;
    }
  };
`;
export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(600px, 100%);
  height: auto;
  position: relative;
  border-radius: 16px;
  background-color: rgba(0,0,0, .3);
  padding: 1.25em;
  box-sizing: border-box;
  border: 1px solid #003b1e92;
  gap: 20px;
`;
export const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 16px;
  background-color: #000;
  padding: 1.25em;
  box-sizing: border-box;
  img{
    display: block;
    width: min(80px, 100%);
    height: auto;
    ${({ theme }) => theme.breakpoints.up.large} {
      width: min(130px, 100%);
   };
  }
`;
export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 20px;
  span{
    color: var(--color-textP);
    font-size: 2.3em;
    font-weight: 900;
  }
`;
export const Commerce = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction: row;
    height: auto;
    opacity: ${({ active }) => !active ? "100%" : "0"};
    transition: all 1s;
     input{
      display:${({ active }) => !active ? "flex" : "none"};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      border: 2px solid var(--color-text-primary);
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      background-color: #fff;
      &:checked {
        background-color: var(--color-text-primary);
      }
  }
`;
export const Kryptopia = styled.div`
  display: flex;
  width: min(450px, 100%);
  justify-content: center;
  height: 100%;
  position: absolute;
  z-index: -1;
 #img1 {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 0px;
    left:0%;
    animation: ${levitateAnimation} 3s ease-in-out infinite; /* Animación constante */
}
#img2 {
   width: 120px;
    height: 120px;
    position: absolute;
    top: 60%;
    left: 5%;
    animation: ${levitateAnimation} 2s ease-in-out infinite; /* Animación constante */
}
#img3 {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 40%;
    left: 65%;
    animation: ${levitateAnimation} 5s ease-in-out infinite; /* Animación constante */
    /* Otros estilos específicos para la imagen 3 */
}
  ${({ theme }) => theme.breakpoints.up.large} {
    width: min(850px, 100%);
   #img1 {
    width: 160px;
    height: 160px;
    top: 0%;
    left: 20%;
   }
   #img2 {
    width: 160px;
    height: 160px;
    top: 60%;
    left: 15%;
   }
   #img3 {
    width: 160px;
    height: 160px;
    top: 40%;
    left: 60%;
   }
 };
`;
