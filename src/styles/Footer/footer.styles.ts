import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
`;
export const RowFooter = styled.div`
  display: flex;
  width: min(1600px, 100%);
  align-items: center;
  height: 150px;
  padding: 1.25em;
  box-sizing: border-box;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.up.large}{
    height: 200px;
  };
`;
export const LogoFooter = styled.div`
 display: flex;
 align-items: center!important;
 justify-content: flex-start!important;
 width: 100%;
 height: auto;
 img{
   display: block;
   width: 120px;
   height: auto;
 }
 .criptovision{
   width: 42px;
   height: 40px;
 }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 20px;
  p, span{
    color: var(--color-textP);
    font-size: 1em;
    font-weight: 300;
    strong{
      color: #5352ff;
      font-weight: 400;
    }
  }
  span{
    text-align: end;
  }
  div{
    display: flex;
    width: 100%;
    justify-content: end;
    gap: 10px;
  }
`;