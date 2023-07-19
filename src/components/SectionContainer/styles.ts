import { COLOR_DARK_BLUE, COLOR_ELEVATION, MOBILE_WIDTH } from './../../config/config';
import styled from "styled-components";

interface IArea {
  flexDirection?: string;
  bgcolor?: string;
  mgBottom?: string;
}


export const Area = styled.div<IArea>`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.mgBottom};
  height: 100%;
  background-color: ${COLOR_ELEVATION};
  margin-top: 50px;
  margin-bottom: 50px;


  @media (max-width: 1081px) {
    width: calc(100% - 30px);
  }
`;

export const Container = styled.div`
  background-color: ${COLOR_ELEVATION};
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Title = styled.p`
  position: relative;
  transition: 1s ease;
  color: white;
  font-size: 40px;
  font-family: "Open Sans", serif;
  color: ${COLOR_DARK_BLUE};
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    background: ${COLOR_DARK_BLUE};
    height: 5px;
    width: 0;
    transition: 0.2s ease;

  }

  &:hover {
    &::after {
      width: 60px;
    }
  }
`;

interface IContent {
  wrap?: string,
  mobileWrap?: string,
  customStyle?: React.CSSProperties
}

export const Content = styled.div<IContent>`
  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: ${(p)=> p.wrap};

  @media(max-width: ${MOBILE_WIDTH}){
    flex-wrap: ${(p)=> p.mobileWrap};

    & .mainTxt {
        width: 100%;
    }
    & div {
        width: 100%;
    }
  }

`;

