import { COLOR_DARK_BLUE } from "./../../config/config";
import { styled } from "styled-components";
import { MOBILE_WIDTH } from "./../../config/config";

export const Title = styled.p`
  font-size: 60px;

  @media(max-width: ${MOBILE_WIDTH}){
    font-size: 57px;
  }
`;

export const Subtitle = styled.p`
  font-size: 40px;

  @media (max-width: ${MOBILE_WIDTH}) {
    font-size: 40px;
  }
`;

export const TextContainer = styled.div`
  color: ${COLOR_DARK_BLUE};
  font-family: "Open Sans", serif;
  padding-bottom: 20px;
  max-width: 500px;

  @media (max-width: ${MOBILE_WIDTH}) {
    text-align: center
  }
`;
