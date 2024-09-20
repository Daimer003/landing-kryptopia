import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
  extraLargeX2: '1440px',
  extraLargeX4: '1920px',
};

export const theme = {
  breakpoints: {
    ...breakpoints,
    up: {
      small: `@media (min-width: ${breakpoints.small})`,
      medium: `@media (min-width: ${breakpoints.medium})`,
      large: `@media (min-width: ${breakpoints.large})`,
      extraLarge: `@media (min-width: ${breakpoints.extraLarge})`,
      extraLargeX2: `@media (min-width: ${breakpoints.extraLargeX2})`,
      extraLargeX4: `@media (min-width: ${breakpoints.extraLargeX4})`,
    },
    down: {
      small: `@media (max-width: ${breakpoints.small})`,
      medium: `@media (max-width: ${breakpoints.medium})`,
      large: `@media (max-width: ${breakpoints.large})`,
      extraLarge: `@media (max-width: ${breakpoints.extraLarge})`,
    },
  },
};


export const ContainerLayaut = styled.main`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 height: auto;
 animation: ${fadeIn} 0.4s ease-in-out; 
`;

export const ComponentLoad = styled.div<{ load: boolean }>`
  display:  ${({ load }) => load ? "flex" : "none"} ;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position:  ${({ load }) => load ? "fixed" : "relative"};
  z-index: 9999;
  background-color: #000;
  left: 0;
  top: 0;
  p{
    font-size: var(--font-size);
    font-weight: 300;
    color: var(--color-text-white);
  }
`;

export const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -2;
  img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;