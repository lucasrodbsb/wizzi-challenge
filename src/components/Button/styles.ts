import { COLOR_DARK_BLUE } from './../../config/config';
import { styled } from 'styled-components';

export const ButtonContainer = styled.button`

    background-color: ${COLOR_DARK_BLUE};
    color: white;
    padding: 10 20;
    height: 50px;
    width: 150px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    transition: 1s;

&:hover {
    opacity:.8;
}
`