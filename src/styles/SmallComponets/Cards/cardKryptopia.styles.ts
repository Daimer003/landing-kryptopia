import styled from "styled-components";

export const ContainerCardKryptopia = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  background: var(--gradient-bg);
  background: var(--gradient-border);
  padding: 1px;
  box-sizing: border-box;
  border-radius: 8px;
  ${({ theme }) => theme.breakpoints.up.large}{
    width: 350px;
  };
`;
export const RowCardKryptopia = styled.div`
  display: flex;
 
  width: 100%;
  height:100%;
  background-color: #000906;
  border-radius: 8px;
  padding: 1em;
  box-sizing: border-box;
  gap: 20px;
  span{
    font-size: 1.8em;
    color: var(--color-textP);
    font-weight: 800;
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-left: 1px solid #154d52;
  padding: 0 25px;
  p{
    font-size: 1.3em!important;
    color: var(--color-textP);
    font-weight: 300;
    text-align: start!important;
  }
`;