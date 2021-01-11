import React from 'react';
import styled from 'styled-components';

// components
import GradientCountNumber from '../components/text/GradientCountNumber';
import { bigTxtBgGradientAnimation } from '../constants/constantStyle';

// styles
// p9. p11
const BigTxtArticleTemplateStyle = styled.div`
    width: calc(100% - 150px);
    min-width: 50%;
    height: auto;
    padding: 150px 0px 100px 0px;

    .top-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 40px;

        .subtitle {
            font-family: Noto Sans TC;
            font-size: 3.2vmin;
            font-style: normal;
            font-weight: 500;
            line-height: 4.8vmin;
            letter-spacing: 0em;
            text-align: left;
            color: #fff;
        }
    }

    p {
        text-transform: uppercase;
        font-family: Noto Sans TC;
        font-size: 4vmin;
        font-style: normal;
        font-weight: 500;
        line-height: 5vmin;
        letter-spacing: 0em;
        text-align: left;

        background: ${({ theme }) => theme.color.gradient.words};
        background-size: 100% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: ${bigTxtBgGradientAnimation} 2s linear infinite;
    }

    .two-col {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        p {
            width: calc(50% - 15px);
        }
    }

    .col {
        flex-direction: column;
    }

    @media screen and (max-width: 576px) {
        width: calc(100% - 30px * 2);

        .top-container {
            .subtitle {
                font-size: 4.8vmin;
                font-style: normal;
                font-weight: 500;
                line-height: 6vmin;
            }
        }

        .two-col {
            flex-direction: column;
            margin-bottom: 0px;

            p {
                width: 100%;
                margin-bottom: 20px;
                font-size: 5vmin;
                line-height: 6vmin;
            }
        }
    }
`;

const BigTxtArticleTemplate = ({
    title,
    titleFontSize,
    subtitle,
    children,
}) => {
    return (
        <BigTxtArticleTemplateStyle>
            <div className="top-container">
                <GradientCountNumber fontSize={titleFontSize} text={title} />
                <div className="subtitle">{subtitle}</div>
            </div>
            {children}
        </BigTxtArticleTemplateStyle>
    );
};

export default BigTxtArticleTemplate;
