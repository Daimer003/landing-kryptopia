import styled from "styled-components";

export const ContainerEcosystem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  position: relative;
  background-color: rgba(0,0,0, .6);
`;
export const RowEcosystem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: min(100%, 1600px);
  height: auto;
  padding: 1.25em;
  box-sizing: border-box;
  background-image: url("/assets/ecosystem-img.webp");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  object-fit: cover;
  gap: 2em;
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`;
export const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .8);
  iframe{
    width: 100%!important;
    height: 100%!important;
    border: none!important;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 1.6em;
  background-color: rgba(0,0,0, .6);
  h3{
    width: min(100%, 800px);
    color: var(--color-text-primary);
    font-size: 2em;
    text-align: center;
  }
  p{
    width: min(100%, 800px);
    color: var(--color-textP);
    text-align: center;
    font-size: 1.1em;
    font-weight: 300;
    strong{
      font-weight: 900;
    }
  }
  ${({ theme }) => theme.breakpoints.up.small}{
    height: 400px;
    background-size: contain;
    h3, p{
        text-align: start;
    }
  };
`;