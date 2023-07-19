import { COLOR_DARK_BLUE } from "./../../config/config";
import styled from "styled-components";
import Logo from "../../images/logo.png";

interface ISidebarContainer {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<ISidebarContainer>`
  width: 300px;
  height: 100vh;
  background-color: #FFF;
  position: fixed;
  top: 0;
  left: ${(p) => (p.isOpen ? `0` : `-300px`)};
  z-index: 999;
  transition: 0.5s;
  flex-direction: column;
  display: flex;
`;

export const LogoContainer = styled.div`
  width: 200px;
  height: 100%;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SidebarHeader = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const SidebarList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  & li {
    list-style: none;
    width: 100%;
    padding: 20px;
    position: relative;

    & p {
      text-decoration: none;
      color: ${COLOR_DARK_BLUE};
      width: 100%;
      height: 100%;
      font-size: 20px;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 20px;
        background: ${COLOR_DARK_BLUE};
        height: 3px;
        width: 0;
        transition: 0.2s ease;
      }

      &:hover {
        &::after {
          width: 50px;
        }
      }
    }
  }
`;
