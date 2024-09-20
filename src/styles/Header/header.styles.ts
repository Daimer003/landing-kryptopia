import styled, { keyframes } from "styled-components";

const logoslider2 = keyframes`
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
`;
export const RowHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: min(1600px, 100%);
  height: 100%;
  margin: 3em 0;
  padding: 1.25em;
  box-sizing: border-box;
  gap: 20px;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`;
export const ContentText = styled.div<{ colorh2: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(1200px, 100%);
  height: auto;
  gap: 3em;
  h2{
    color: var(${({ colorh2 }) => colorh2});
    font-size: 2.2em;
    margin: 0;
    text-align: center;
  }
  p{
    font-size: 1.1em;
    margin: 0;
    color: var(--color-textP);
    text-align: center;
    strong{
      font-weight: 800;
    }
  }
  span{
    color: var(--color-text-primary);
    font-size: 1.5em;
    font-weight: 700;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    h2, p{
      text-align: start;
    }
  };
`;
export const Tags = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
  animation: ${logoslider2} 20s linear infinite;
  &:hover {
    cursor: pointer;
    animation-play-state: paused;
    }
  span{
    color: var(--color-text-gray);
    font-size: 1em;
  }
`;
export const ContentButton = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  img{
    display: block;
    width: min(550px, 100%);
    height: auto;
  }
  video{
    width: min(550px, 100%);
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;