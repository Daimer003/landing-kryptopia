import styled from "styled-components";

export const ContainerNavbar = styled.nav<{ menufixed: string }>`
 display: flex;
 width: 100%;
 height: 5em;
 justify-content: center;
 position: ${({ menufixed }) => menufixed == "true" ? "fixed" : "relative"};
 background: ${({ menufixed }) => menufixed == "true" ? "#000000" : "Transparent"};
 top: 0;
 left: 0;
 z-index: 99;
`;
export const RowrNavbar = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: min(1600px, 100%);
 height: auto;
 margin: 0 2em;
 gap: 20px;
`;
export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  img{
    display: block;
    width: 100%;
    height: auto;
  }
`;
export const Nav = styled.div<{ disp: boolean }>`
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 4em;
  a{
    display: ${({ disp }) => disp ? "flex" : "none"};
    color: var(--color-textP);
    font-size: 1.1em;
    cursor: pointer;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    display: flex;
  };
`;
export const ContentMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  span{
    color: var(--color-icon-menu);
    font-size: 38px;
  }
  ${({ theme }) => theme.breakpoints.up.large}{
    display: none;
  };
`;
export const SideBard = styled.div<{ active: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ active }) => (active == "true" ? '100%' : '-1200px')};
  height: 100vh;
  background-color: rgba(0,0,0, .6);
  position: fixed;
  right: ${({ active }) => (active == "true" ? '0' : '-400px')};
  bottom: 0;
  transition: all .5s;
  z-index: 99;
  a{
    color: var(--color-textP);
    font-size: 1em;
  }
  span{
    color: #fff;
  }
`;
export const ContentSidebard = styled.div<{ active: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ active }) => (active == "true" ? '300px' : '0')};
  height: 100%;
  background-color: var(--color-background-sidebard);
  /* background-color: gray; */
  padding: 3em;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  top: 0;
  img{
    display: block;
    width: min(200px, 100%);
    height: auto;
  }
`;
export const Content = styled.div<{ disp: boolean }>`
  display: ${({ disp }) => disp ? "flex" : "none"};
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: auto;
  gap: 3em;
  margin-top: 4em;
  a{
    font-size: 1.5em;
    font-weight: 300;
  }
`;
export const SideBardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 30px;
  span{
    color: #fff;
    font-size: 26px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px;
    cursor: pointer;
  }
`;
