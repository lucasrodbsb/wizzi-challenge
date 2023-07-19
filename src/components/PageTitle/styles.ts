import { COLOR_ELEVATION, COLOR_DARK_BLUE, MOBILE_WIDTH } from './../../config/config';
import { styled } from 'styled-components';

export const Title = styled.p`
  position: relative;
  transition: 1s ease;
  color: white;
  font-size: 40px;
  font-family: "Open Sans", serif;
  color: ${COLOR_DARK_BLUE};
  margin-bottom: 20px;

  @media(max-width: ${MOBILE_WIDTH}){
    font-size: 30px;
  }

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