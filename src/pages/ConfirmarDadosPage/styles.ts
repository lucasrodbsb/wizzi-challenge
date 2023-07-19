import {
  MOBILE_WIDTH,
  COLOR_ELEVATION,
  COLOR_DARK_BLUE,
} from "./../../config/config";
import { styled } from "styled-components";

interface IArea {
  flexDirection?: string;
  bgcolor?: string;
  mgBottom?: string;
}

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

export const Area = styled.div<IArea>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.bgcolor};
  width: 1080px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.mgBottom};
  justify-content: center;
  /* padding-top: 100px; */

  @media (max-width: 1081px) {
    width: calc(100% - 30px);
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  @media (max-width: ${MOBILE_WIDTH}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & img {
    width: 100%;
    align-self: center;
    margin-bottom: 50px;
    border-radius: 10px;
    margin-top: 20px;
    /* max-height: 300px; */
  }

  & .mainText {
    font-family: "Open Sans", sans-serif;
    text-align: justify;

    white-space: pre-line; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */

  }

  & form{
    width: 100%;
  }
`;

export const LogosContainer = styled.div`
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
  margin-top: 30px;
  display: flex;
  gap: 20px;

  @media (max-width: ${MOBILE_WIDTH}) {
    align-items: center;
    justify-content: center;
  }
`;
export const HeaderPlaceholder = styled.div`
  width: 100%;
  height: 100px;
`;

export const Btn = styled.button`
  background-color: ${COLOR_DARK_BLUE};
  color: white;
  border: none;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
  border-radius: 6px;
  margin-top: 50px;
`;


export const InfoContainer = styled.div`

  background-color: rgba(0,0,0,.2);
  border-radius: 10px;
  padding: 20px;
  font-family: 'Open Sans', Arial;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;


  & p {
    color: ${COLOR_DARK_BLUE};
    font-size: 18px;
  }

  & span {
    color: #000;
    font-size: 18px;
    margin-left: 10px;
  }
`