import { COLOR_ELEVATION, COLOR_DARK_BLUE } from './config';
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: 'black';
        position: relative;
        min-height: 100vh;
    }

    .swiper-pagination-bullet {
        background: ${COLOR_DARK_BLUE};
        height: 30px;
        width: 30px;
        border-radius: 10px;
    }

    .swiper-pagination{
        margin-bottom: 80px;
        
    }

    .colorDBlue {
        color: ${COLOR_DARK_BLUE};
    }

    .fontS {
        font-size: 20px;
    }
`



