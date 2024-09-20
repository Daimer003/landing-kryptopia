import styled from "styled-components";

export const ContainerNotification = styled.div`
  display: flex;
  width: min(600px, 100%);
  height: auto;
  background-color: var(--color-text-black);
  position: relative;
  border-radius: 8px;
`;
export const RowNotification = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1px;
  box-sizing: border-box;
  background: var(--gradient-bg);
  background: var(--gradient-border);
  border-radius: 8px;
  h4, span{
    color: var(--color-bg-buttom-primary);
    text-align: center;
    font-size: 1.1em;
  }
  h4{
    font-size: 1.5em;
    font-weight: 700;
  }
  p{
    color: var(--color-textP);
    text-align: center;
    font-size: 1.1em;
  }
  small{
    color: var(--color-textP);
    text-align: center;
    font-size: 1em;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(600px, 100%);
  height: auto;
  background-color: var(--color-text-black);
  position: relative;
  gap: 20px;
  padding: 2em;
  box-sizing: border-box;
  border-radius: 8px;
`;
