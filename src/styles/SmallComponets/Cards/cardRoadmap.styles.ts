import styled from "styled-components";

export const ContainerCardRoadmap = styled.div<{ active: number }>`
  display: flex;
  width: 400px;
  height: auto;
  /* border: 1px solid var(--color-text-primary); */
  background: var(${({ active }) => active == 1 ? "--gradient-bg" : "none"});
  background: var(${({ active }) => active == 1 ? "--gradient-border" : "none"});
  /* border: 1px solid ${({ active }) => active == 1 ? "#fff" : "none"}; */
  padding: 1px;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  img{
    display: flex;
    position: absolute;
    width: 20px;
    height: auto;
    top: -73px;
    left: 50%;
  }

`;
export const RowCardRoadmap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1.25em;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 10);
  gap: 20px;
  border-radius: 4px;
  h4{
    color: var(--color-text-primary);
    font-size: 1.5em;
    font-weight: 700;
  }
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1.25em;
  box-sizing: border-box;
  ul{
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 10px;
  
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  li{
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      color: var(--color-textP);
      font-size: 1em;
      justify-content: start;
      img{
        display: block;
        width: 10px;
        height: 12px;
        position: relative!important;
        left: 0;
        top: 0;
        margin-right: 10px;
  }
  }
`;