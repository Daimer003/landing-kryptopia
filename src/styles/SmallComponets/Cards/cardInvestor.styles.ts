import styled from "styled-components";


export const ContainerCardInvestor = styled.div`
  display: flex;
  width: 130px;
  height: auto;
  position: relative;
`;
export const RowCardInvestor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 20px;
`;
export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-image: url("/assets/mask.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  overflow: hidden;
  img{
    width: 30px;
    height: 30px;
    z-index: 20;
  }
`;
export const ContentText = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  p{
    color: var(--color-textP);
    text-align: center;
  }
`;