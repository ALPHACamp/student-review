import React from 'react';
import styled from 'styled-components';
import GradientCountNumber from '../components/text/GradientCountNumber';

// styles
const ThreeColCountStyle = styled.div`
    width: calc(100% - 150px);
    display: flex;
    padding: 150px 0px 100px 0px;

    .col {
        width: calc(100% - 30px * 2);
        height: auto;
        margin-right: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:last-child {
            margin-right: 0px;
        }

        .subtitle {
            font-family: Noto Sans TC;
            font-size: 3.2vmin;
            font-style: normal;
            font-weight: 500;
            line-height: 4.8vmin;
            letter-spacing: 0em;
            text-align: center;
            color: #fff;
        }
    }

    @media screen and (max-width: 768px) {
        width: calc(100% - 50px * 2);
        .subtitle {
            font-family: Noto Sans TC;
            font-size: 6vmin;
            font-style: normal;
            font-weight: 500;
            line-height: 6vmin;
            letter-spacing: 0em;
            text-align: center;
            color: #fff;
        }
    }

    @media screen and (max-width: 576px) {
        width: 100%;
        flex-direction: column;

        .col {
            margin: 20px auto 40px auto;

            .subtitle {
                width: 100%;
                font-family: Noto Sans TC;
                font-size: 5vmin;
                font-style: normal;
                font-weight: 500;
                line-height: 6vmin;
                letter-spacing: 0em;
                text-align: center;
                color: #fff;
            }

            &:last-child {
                margin-right: auto;
            }
        }
    }
`;
const ThreeColCount = () => {
    return (
        <ThreeColCountStyle>
            <div className="col">
                <GradientCountNumber text="15" />
                <div className="subtitle">
                    15 場工程師求職支持小組，累積共 100+ 人次參與
                </div>
            </div>
            <div className="col">
                <GradientCountNumber text="70" />
                <div className="subtitle">70 個單元的工程師求職準備大全</div>
            </div>
            <div className="col">
                <GradientCountNumber text="40+" />
                <div className="subtitle">
                    40+ 份履歷 & 作品集 個人 feedback
                </div>
            </div>
        </ThreeColCountStyle>
    );
};

export default ThreeColCount;
