import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`;
export const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(1600px, 100%);
  height: auto;
  gap: 3em;
  padding: 1.25em;
  margin: 3em 0 ;
  box-sizing: border-box;
  h3{
    color: var(--color-text-primary);
    font-size: 2em;
    text-align: center;
  }
  p{
    color: var(--color-textP);
    font-size: 1.1em;
    width: min(800px, 100%);
    text-align: center;
    strong{
      font-weight: 900;
    }
  }
`;
export const ContentColumn = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: auto;
 ${({ theme }) => theme.breakpoints.up.large} {
    flex-direction: row;
 };
`;
export const ContentPillares = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 3em 0;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.up.large} {
    flex-direction: row;
 };
`;
export const ContantImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  img{
    display: block;
    width: 100%;
    height: auto;
  }
`;
export const ContentSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
export const ContentInnovation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 3em;

`;
export const ContentColInnovation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.up.large} {
    flex-direction: row;
 };
`;
export const Post = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 200px;
  height: 100%;
  background-image: url("/assets/post.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  padding: 1.25em;
  box-sizing: border-box;
  border-radius: 8px;
  p{
    width: min(500px, 100%);
    text-align: start;
    font-size: 1.4em;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 30px;
`;
export const ConetntForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 30px;
  div{
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 20px;
    ${({ theme }) => theme.breakpoints.up.large} {
     flex-direction: row;
 };
  }
`;

export const SectionOne = styled.div`
  display: flex;
`;

export const CheckBeer = styled.div`
  display: flex;
  flex-direction: column!important;
  align-items: center;
  width: 100%;
  height: auto;
    div{ 
     display: flex;
     flex-direction: row;
     align-items: center;
     width: 100%;
     height: auto;
     input{
      display: block;
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
  }
   p{
      width: auto;
      color: var(--color-textP);
      text-align: start!important;
    }  
`;

export const Check = styled.div` 
  display: flex;
  flex-direction: row!important;
  align-items: center;
  width: 100%;
  height: auto;
  div{
     width: 22px;
     height: 22px;
     input{
      display: block;
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
  }
   p{
      width: auto;
      color: var(--color-textP);
      text-align: start!important;
      a{
        color: #fff;
        :hover{
          color: gray;
        }
      }
    }  
`;
export const CheckWe = styled.div` 
  display: flex;
  flex-direction: row!important;
  width: 100%;
  height: auto;
  input{
      display: block;
      width: 20px!important;
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
   p{
      width: auto;
      color: var(--color-textP);
      text-align: start!important;
      a{
        width: 100%;
      }
    }
`;

export const ContentBtn = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: start;
`;
export const Input = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background: var(--gradient-bg);
  background: var(--gradient-border);
  border-radius: 8px;
  padding: 1px;
  box-sizing: border-box;
  input{
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px;
    font-size: 1em;
    border-radius: 8px;
    background-color: #00180d;
    color: var(--color-textP);
    user-select: none;
    outline: none;
    &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Espacio entre el input y las flechas */
  }
  /* Estilo para ocultar las flechas en Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
  /* Otros estilos personalizados para el input */
  /* border: 1px solid #ccc; */
  padding: 8px;
  }
`;