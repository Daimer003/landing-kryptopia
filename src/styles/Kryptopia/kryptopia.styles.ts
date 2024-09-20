import styled from "styled-components";


export const ContainerKryptopia = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .5);
`;
export const RowKryptopia = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  height: 100%;
  margin: 3em 2em;
  padding: 1.25em;
  box-sizing: border-box;
  gap: 3em;
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`;
export const ContentKriptopia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(100%, 1600px);
  height: auto;
  gap: 3em;
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
    font-size: 1.1em;
    width: min(800px, 100%);
    text-align: center;
    strong{
      font-weight: 800;
    }
  }
`;
export const Tutorial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  iframe{
    width: 100%;
    max-width: 650px;
    height: 400px;
    border: none;
  }
`;
export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  img{
    display: block;
    width: min(550px, 100%);
    height: auto;
  }
`;
export const ContentSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 40px;
  h3{
    color: var(--color-text-primary);
    font-size: 2em;
    text-align: center;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    h3{
      text-align: start;
    }
  };
`;
