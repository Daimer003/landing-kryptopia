import styled from "styled-components";

export const ContainerTimeLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: rgba(0,0,0, .6);
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(1600px, 100%);
  height: auto;
  margin: 3em;
  padding: 1.25em;
  box-sizing: border-box;
  h3{
    color: var(--color-text-primary);
    font-size: 2em;
    text-align: center;
  }
`;
export const RowTimeLine = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  height: auto;
  overflow: auto;
  position: relative;
  span{
    display: flex;
    width: 1600px;
    height: 1px;
    position: absolute;
    z-index: 0;
    color: #fff;
    top: 48%;
    opacity: 20%;
    background-color: #fff;
    ${({ theme }) => theme.breakpoints.up.large}{
      top: 50%;
  };
  }
`;

export const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 1600px;
  height: auto;
  /* svg{
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
  } */
`;
export const ContentTimeLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;
  position: relative;
`;

export const P = styled.div`
  display: flex;
  width: min(200px, 100%);
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  position: relative;
`;
export const Column = styled.div`
  margin-top: -90px;
  h4{
    color: var(--color-textP);
    text-align: center;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: center;
  :nth-child(odd){
    transform: rotate(0deg);
   }
   :nth-child(even){
    transform: rotate(180deg);
      h4{
        transform: rotate(180deg);
      }
   }
`;
export const ColumnImg = styled.div`
 display: flex;
 width: 100px;
 height: 100px;
 justify-content: center;
 align-items: center;
 position: relative;
 background-image: url("/assets/mask.webp");
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
 border-radius: 50%;

 img{
   width: 30px;
   height: 30px;
   border-radius: 50%;
 }
   svg{
    display: flex;
    width: 161px;
    height: 85px;
    position: absolute;
    z-index: 999;
    top: 69px;
    transform: rotate(180deg)!important;
   }
`;

