import { keyframes } from 'styled-components';
export const theme = {
    color: {
        mono: {
            white: '#fff',
            black: '#262523',
        },
        colorful: {
            stroke: {
                orange: '#FF613D',
            },
            title: {
                red: '#FF613D',
                blue: '#00F1FF',
            },
        },
        gradient: {
            mainBG: `linear-gradient(180deg, #2d3436 0%, #000000 100%)`,
            words: `linear-gradient(180deg, #fb7ba2 0%, #ff6600 100%)`,
            count: `linear-gradient(90.22deg, #FB7BA2 -34.15%, #FF6600 134.15%)`,
        },
    },
};

export const bigTxtBgGradientAnimation = keyframes`
    0% {
        background-position: 50% 0%;
    }
    50% {
        background-position: 50% 100%;
    }
    100% {
        background-position: 50% 0%;
    }
`;

export const txtBgGradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const scrollDownArrowAnimation = keyframes`
    0% {
        bottom: 20px;
    }
    50% {
        bottom: 0px;
    }
    100% {
        bottom: 20px;
    }
`;
