import { COLOR_ELEVATION } from "../../config/config";
import { MOBILE_WIDTH, COLOR_DARK_BLUE } from "../../config/config";
import styled from "styled-components";
import linearBG from "../../images/linearBG.png";
import logoFDC from "../../images/logo3dazul.png";
import bg from '../../images/bg3.jpg'

interface IArea {
  flexDirection?: string;
  bgcolor?: string;
  mgBottom?: string;
}

interface IContainer {
  backgroundImg?: string;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
  justify-content: center;
  display: flex;
  background-image: url(${linearBG}), url(${(p) => p.backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  @media (max-width: ${MOBILE_WIDTH}) {
    background-position: -230px;
    background-image: url(${linearBG}), url(${bg});
  }
`;

export const Area = styled.div<IArea>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgcolor};
  width: 1080px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.mgBottom};
  justify-content: center;
  align-items: center;

  @media (max-width: 1081px) {
    width: calc(100% - 30px);
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    zoom: 90%;
    margin-top: -80px;
  }
`;

export const LogoContainer = styled.div`
  width: 400px;
  height: 200px;
  margin-bottom: 20px;
  border: 0;
  border-bottom: solid 3px ${COLOR_DARK_BLUE};
  background-image: url(${logoFDC});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${MOBILE_WIDTH}) {
    width: 300px;
    height: 150px;

  }
`;

export const HeaderPlaceholder = styled.div`

  width: 100%;
  height: 100px

`
