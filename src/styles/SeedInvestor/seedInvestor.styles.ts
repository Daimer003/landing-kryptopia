import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerSeedInvestor = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;
export const RowSeedInvestor = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  align-items: center;
  height: auto;
  gap: 20px;
  padding: 1.25em;
  margin: 3em 0;
  box-sizing: border-box;
  h3{
    color: var(--color-text-secondary);
    font-size: 2em;
    text-align: center;
  }
  p{
    color: var(--color-textP);
    width: min(100%, 800px);
    text-align: center;
    font-size: 1.1em;
    strong{
      font-weight: 800;
    }
  }
`;
export const ContentSeedInvestor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 60px;
  margin-top: 60px;
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`;
export const ContentInvestor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 1.6em;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  position: relative;
  :before{
    display: flex;
    content: "";
    width: 400px;
    height: 500px;
    border-radius: 1198px;
    background: radial-gradient(circle, rgba(7, 46, 27, 0.60) 0%, rgba(0, 213, 216, 0) 60%);
    position: absolute;
    z-index: -2;
  }
`;
export const ColumnImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/assets/stars.svg");
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 20px;

  img{
    display: block;
    width: min(100%, 500px);
    height: auto;
  }
`;
export const Values = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;
export const Select = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.up.small}{
      grid-template-columns: repeat(3, 1fr);
  };
`;
export const Option = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: var(--gradient-bg);
  background: var(--gradient-border);
  padding: 1px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  span{
    width: 100%;
    height: 100%;
    color: var(--color-textP);
    text-align: center;
    background-color: #002A2B;
    padding: 1.25em;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 1.2em;
    font-weight: 900;
  }
`;
export const Value = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 2em;
  margin: 20px 0; 
  span{
    width: 100%;
    background: var(--gradient-bg);
    background: var(--gradient-border);
    border-radius: 8px;
    padding: 1px;
    box-sizing: border-box;
    p{
      width: 100%;
      color: var(--color-text-secondary);
      text-align: start;
      background-color: #002A2B;
      padding: 1em;
      box-sizing: border-box;
      border-radius: 8px;
      font-size: 1.2em;
    }
    strong{
      font-weight: 800;
    }
  }
`;
export const Info = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
`;
export const Control = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  gap: 1px;
  background: var(--gradient-bg);
  background: var(--gradient-border);
  padding: 1px;
  box-sizing: border-box;
  border-radius: 8px;
  button{
    width: 130px;
    height: 100%;
    min-height: 45px;
    border: none;
    font-size: 1.1em;
    color: var(--color-textP);
    background-color: #002A2B;
    cursor: pointer;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 2em;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--color-bg-buttom)!important;
        color: var(--color-text-black);
      }
    }
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    width: auto;
  };
`;
export const Rate = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  background: var(--gradient-bg);
  background: var(--gradient-border);
  padding: 1px;
  box-sizing: border-box;
  border-radius: 8px;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #002A2B;
    padding: 1.25em;
    box-sizing: border-box;
    border-radius: 8px;
    gap: 10px;
    p, span, h3, h4{
    color: var(--color-textP);
    text-align: center;
    }
    h4{
        font-size: 1.2em;
        font-weight: 700;
    }
    h3{
        font-size: 2.2em;
        font-weight: 900;
        color: var(--color-text-secondary);
    }
    p{
        font-size: 1.1em;
    }
    span{
        font-size: 1.3em;
        color: var(--color-text-secondary);
    }
  }
`;

export const ModalInvestor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--gradient-bg);
  background: var(--gradient-border);
  padding: 1px;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("/assets/background-investor.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2em;
  box-sizing: border-box;
  border-radius: 8px;
  gap: 2em;
  transition: all 1s;
   animation: ${fadeIn} 0.4s ease-in-out;
  h4{
    font-size: 2em;
    color: var(--color-text-primary);
    font-weight: 700;
    text-align: center;
  }
  p{
    font-size: 1.1em;
    color: var(--color-textP);
  }
  #commerce{

  }
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
  p{
    color: var(--color-textP);
    font-size: 1.1em;
    text-align: center;
  }
`;