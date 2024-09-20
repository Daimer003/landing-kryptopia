import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    stroke-dashoffset: 150;
    stroke-dasharray: 150 1503;
  }
  50% {
    stroke-dashoffset: -150;
    stroke-dasharray: 150 1503;
  }
  100% {
    stroke-dashoffset: 150;
    stroke-dasharray: 1503;
  }
`;

const Svg = styled.svg`
  display: flex;
  justify-content: center;
  width: 60px;
  fill: none;
  stroke-width: 1;
  .base {
    stroke: #ffffff33;
  }
  .landing {
    stroke: var(--color-text-primary);
    stroke-dasharray: 150 1503;
    stroke-dashoffset: 150;
    animation: ${animation} 6s ease-in-out alternate infinite;
    
  }
  path{
    fill:#ffffff33;
  }
`;

export const LogoSvg = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="46" height="66" viewBox="0 0 26 46">
      <path className="base landing" d="M32.1723 7.61802L24.9346 0.351562L8.84717 16.5002L24.9346 32.6516L32.1723 25.3851L23.3253 16.5002L32.1723 7.61802Z" fill="white" />
      <path className="base landing" d="M7.23943 18.1163L0.000976562 25.3835L7.23942 32.6508L14.4779 25.3835L7.23943 18.1163Z" fill="white" />
    </Svg>
  );
};
