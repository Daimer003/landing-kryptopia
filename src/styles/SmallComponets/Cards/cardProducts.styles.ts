import styled from "styled-components";

export const ContainerCardProducts = styled.div`
  display: flex;
  width: min(300px, 100%);
  height: auto;
  background-color: #000;
  margin: auto;
`;
export const RowCardProducts = styled.div<{ img: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  padding: 1em;
  box-sizing: border-box;
  gap: 40px;
 
`;
export const ContentImg = styled.div`
  display: flex;
  width: min(200px, 100%);
  height: auto;
  margin-top: 2em;
  img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 20px;
  margin-bottom: 2em;
  h2{
    color: var(--color-textP);
    text-align: center;
    font-size: 1.8em;
  }
  p{
      color: var(--color-textP);
      text-align: center;
      font-size: 1.1em;
      min-height: 125px;
  }
`;

