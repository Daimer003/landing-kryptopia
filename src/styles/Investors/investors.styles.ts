import styled from "styled-components";

export const ContainerInvestors = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.up.large}{
     position: relative;
  };
`;
export const RowInvestors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(1600px, 100%);
  height: auto;
  padding: 1.25em;
  margin: 3em 2em;
  box-sizing: border-box;
  gap: 4em;
  position: relative;
  ${({ theme }) => theme.breakpoints.up.large}{
    flex-direction: row;
  };
`;
export const KryptoPartner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: min(550px, 100%);
  height: auto;
  gap: 3em;
  z-index: 5;
  :after{
    display: flex;
    content: "";
    width: 950px;
    height: 950px;
    background: radial-gradient(circle, rgba(7, 46, 27, 0.30) 0%, rgba(0, 213, 216, 0) 70%);
    position: absolute;
    z-index: -1;
    top: 20%;
    left: -50%;
  }

  ${({ theme }) => theme.breakpoints.up.large}{
    align-items: flex-end;
    :after{
      left: -10%;
      }
  };
  ${({ theme }) => theme.breakpoints.down.large}{
     position: relative;
  };
`;
export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  position: relative;
  background-image: url("/assets/fondo-avatar.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img{
    display: block;
    width: min(200px, 100%);
    height: min(200px, auto);
    border-radius: 50%;
  }
`;

export const SeedInvestor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: min(550px, 100%);
  height: auto;
  gap: 3em;
  z-index: 5;
  /* :before{
    display: flex;
    content: "";
    width: 950px;
    height: 950px;
    background: radial-gradient(circle, rgba(0, 213, 216, 0.08) 0%, rgba(0, 213, 216, 0) 70%);
    position: absolute;
    top: 20%;
    right: -50%;
    z-index: -1;
  } */
  img{
    display: block;
    width: min(200px, 100%);
    height: auto;
    border-radius: 50%;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
      align-items: flex-start;
      :before{
        right: -20%;
      }
  };
  ${({ theme }) => theme.breakpoints.down.large}{
     position: relative;
  };
`;
export const TextKryptoPartner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  /* margin-top: 3em; */
  gap: 3em;
  h3{
    color: var(--color-text-primary);
    font-size: 2em;
    text-align: center;
  }
  p{
    color: var(--color-textP);
    text-align: center;
    font-size: 1.1em;
  }
  h4{
    color: var(--color-textP);
    text-align: center;
    font-weight: 800;
    font-size: 1.1em;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
     min-height: 350px;
    h3, p, h4{
        text-align: end;
    }
  };
`;
export const TextSeedInvestor = styled(TextKryptoPartner)`
  h3{
    color: #00D5D8;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    h3, p, h4{
        text-align: start;
    }
  };
`;
export const Investor = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.up.large}{
     height: 190px;
  };
`;
export const Partner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
`;

