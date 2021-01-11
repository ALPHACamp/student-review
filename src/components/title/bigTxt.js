import React from 'react';
import styled from 'styled-components';
import { bigTxtBgGradientAnimation } from '../../constants/constantStyle';

// styles
const BigTxtStyle = styled.div`
    position: relative;
    width: calc(100%);
    min-width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .big-wording {
        font-family: Nunito Sans;
        font-style: normal;
        font-size: 20vmax;
        line-height: 20vmax;
        font-weight: 900;
        letter-spacing: 0em;
        text-align: center;
        cursor: default;
        background: ${({ theme }) => theme.color.gradient.words};
        background-size: 100% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: ${bigTxtBgGradientAnimation} 3s linear infinite;

        @media screen and (max-width: 1024px) {
            font-size: 18vmin;
            line-height: 18vmin;
        }
    }
`;

const BigTxt = ({ children }) => {
    return <BigTxtStyle>{children}</BigTxtStyle>;
};

export default BigTxt;
