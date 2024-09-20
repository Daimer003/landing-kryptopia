import styled from "styled-components";

export const ContainerCarrusel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.up.large}{
    width: 700px;
  };
`;
export const RowCarrusel = styled.div`
  display: block;
  width: 100%;
  height: auto;
`;