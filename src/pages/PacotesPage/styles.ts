import { MOBILE_WIDTH, COLOR_ELEVATION, COLOR_DARK_BLUE } from '../../config/config';
import { styled } from 'styled-components';

interface IArea {
    flexDirection?: string,
    bgcolor?: string,
    mgBottom?: string
}


export const Container = styled.div`

    width: 100%;
    height: fit-content;
    display: flex;
`


export const Area = styled.div<IArea>`
        display: flex;
        flex-direction: ${props => props.flexDirection};
        background-color:${props => props.bgcolor};
        width: 1080px;
        margin: 0 auto;
        margin-bottom: ${props => props.mgBottom};
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
        flex-wrap: wrap;

        @media(max-width: ${MOBILE_WIDTH}){
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
`

export const LogosContainer = styled.div`

        width: 100%;
        height: fit-content;
        flex-wrap: wrap;
        margin-top: 30px;
        display: flex;
        gap: 20px;

        @media(max-width: ${MOBILE_WIDTH}){

            align-items: center;
            justify-content: center;
        }


`
export const HeaderPlaceholder = styled.div`

  width: 100%;
  height: 100px;

`

export const BackToHome = styled.button`

    background-color: ${COLOR_DARK_BLUE};
    color: white;
    border: none;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    font-family: 'Open Sans', sans-serif;
    border-radius: 6px;
    margin-top: 50px;

`

export const ItemContainer = styled.div`

    font-family: 'Open Sans', Arial;
    margin-bottom: 20px;
    width: 200px;
    cursor: pointer;
    

    & img {
        border-radius: 10px;
    }

    & p {
        font-size: 20px;
        color: ${COLOR_DARK_BLUE};
    }

`