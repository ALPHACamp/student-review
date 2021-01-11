import React from 'react';
import styled from 'styled-components';
import { txtBgGradientAnimation } from '../../constants/constantStyle';

// styles
const GradientCountNumberStyle = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0em;
    text-align: center;

    span {
        background: ${({ theme }) => theme.color.gradient.count};
        background-size: 200% 100%;

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        text-transform: uppercase;

        animation: ${txtBgGradientAnimation} 2s linear infinite;
    }
`;

const GradientCountNumber = ({ fontSize, text }) => {
    return (
        <GradientCountNumberStyle
            style={{
                fontSize: fontSize ? `${fontSize}` : '17vmax',
                lineHeight: fontSize ? `${fontSize}` : '17vmax',
            }}
        >
            <span>{text}</span>
        </GradientCountNumberStyle>
    );
};

export default GradientCountNumber;
