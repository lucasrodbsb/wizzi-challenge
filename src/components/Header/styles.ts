import { LOGO_COLOR_BLUE } from './../../config/config';
import { MOBILE_WIDTH } from "../../config/config";
import { COLOR_DARK_BLUE } from "../../config/config";
import styled from "styled-components";
import Logo from "../../images/logo.png";

interface IArea {
  flexDirection?: string;
  bgcolor?: string;
  mgBottom?: string;
}

export const NavContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100px;
  font-family: "Open Sans", serif;
  position: fixed;
  z-index: 99999;
-webkit-box-shadow: 0px 10px 29px -3px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 10px 29px -3px rgba(0,0,0,0.2);
box-shadow: 0px 10px 29px -3px rgba(0,0,0,0.2);
`;

export const Area = styled.div<IArea>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.bgcolor};
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.mgBottom};
  justify-content: space-between;
  height: 100%;
  align-items: center;
  @media (max-width: 1081px) {
    width: calc(100% - 30px);
  }
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: 60px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${COLOR_DARK_BLUE};
  justify-content: center;
  & svg {
    display: none;
    font-size: 35px;
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    & svg {
      display: flex;
    }

    & ul {
      display: none;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  align-items: center;
  transition: 1s ease;

  & p {
    text-decoration: none;
    color: ${LOGO_COLOR_BLUE};
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      background: ${LOGO_COLOR_BLUE};
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
`;

export const MenuButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
`;
