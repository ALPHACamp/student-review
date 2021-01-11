import React from 'react';
import styled from 'styled-components';

// assets
import AC_HORIZONTAL_IMG from '../assets/img/ac_logo/logo_ac_horizontal.png';

// constants
import {
    bigTxtBgGradientAnimation,
    txtBgGradientAnimation,
} from '../constants/constantStyle';

// styles
const SummaryArticleTemplateStyle = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.color.mono.white};

    /* p2 */
    .pure-text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        text-align: center;
        padding: 150px 0px 100px 0px;

        p,
        div {
            font-family: Noto Sans TC;
            background: ${({ theme }) => theme.color.gradient.words};
            background-clip: text;
            background-size: 100% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 0.01em;

            animation: ${bigTxtBgGradientAnimation} 2s linear infinite;
        }

        .title {
            font-size: 40px;
            font-weight: bold;
            line-height: 45px;
            margin-bottom: 40px;
        }

        .description {
            font-size: 24px;
            line-height: 30px;
            font-weight: medium;
            margin-bottom: 20px;
            &.bold {
                margin-top: 40px;
                font-weight: bold;
            }
        }
    }

    /* p3 */
    .count-container {
        width: auto;
        height: auto;

        .context {
            min-width: 400px;
            min-height: 300px;
            background: #eee;
        }

        .description {
            font-family: Noto Sans TC;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
            letter-spacing: 0em;
            text-align: center;
        }
    }

    /* p4 */
    .diversity-bg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        .big-wording {
            margin-bottom: 20px;
            background: ${({ theme }) => theme.color.gradient.count};
            background-size: 200% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            font-family: Poppins;
            font-size: 13vmax;
            font-style: normal;
            font-weight: 900;
            line-height: 13vmax;
            letter-spacing: 0em;
            text-align: center;

            animation: ${txtBgGradientAnimation} 2s linear infinite;
        }

        .description {
            width: 50%;
            font-family: Noto Sans TC;
            font-size: 3vmin;
            font-style: normal;
            font-weight: 500;
            line-height: 4vmin;
            letter-spacing: 0em;
            text-align: center;
        }
    }

    /* p8 */
    .growth-container {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 150px 0px 100px 0px;

        .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 80px;

            .list-item {
                width: calc(50% - 15px);
                margin-bottom: 50px;

                .title {
                    font-family: Noto Sans TC;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 30px;
                    letter-spacing: 0em;
                    text-align: left;

                    &.red {
                        color: ${({ theme }) => theme.color.colorful.title.red};
                    }
                    &.blue {
                        color: ${({ theme }) =>
                            theme.color.colorful.title.blue};
                    }
                }
                .description {
                    font-family: Noto Sans TC;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: 0em;
                    text-align: left;
                }
            }
        }

        @media screen and (max-width: 768px) {
            .list {
                flex-direction: column;
                flex-wrap: nowrap;
                .list-item {
                    width: 100%;
                }
            }
        }
    }

    /* p11 */
    .activity-container {
        padding: 150px 0px 0px 0px;
    }

    /* p12 */
    .outcome-container {
        position: relative;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-family: Noto Sans TC;
            font-size: 10vmin;
            font-style: normal;
            font-weight: 900;
            line-height: 80px;
            letter-spacing: 0em;
            text-align: left;
            text-transform: uppercase;
            color: #ffffff;
        }
        .ac-horizontal-logo {
            position: absolute;
            bottom: 80px;
            left: 50%;
            margin-left: -100px;
            width: 200px;
            height: 45px;
            background-image: url(${AC_HORIZONTAL_IMG});
            background-size: cover;
            background-position: center center;
        }

        @media screen and (max-width: 567px) {
            .ac-horizontal-logo {
                position: absolute;
                bottom: 20px;
                left: 50%;
                margin-left: -70px;
                width: 140px;
                height: 30px;
                background-image: url(${AC_HORIZONTAL_IMG});
                background-size: cover;
                background-position: center center;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .pure-text-container {
            width: 80%;
        }

        .count-container {
            width: 90%;
        }

        .diversity-bg {
            .big-wording {
                font-size: 13vmin;
                line-height: 13vmin;
            }

            .description {
                width: 90%;
                font-size: 2vmax;
                line-height: 3vmax;
            }
        }
    }
`;

const SummaryArticleTemplate = (props) => {
    return (
        <SummaryArticleTemplateStyle>
            {props.children}
        </SummaryArticleTemplateStyle>
    );
};

export default SummaryArticleTemplate;
