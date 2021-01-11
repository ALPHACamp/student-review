import React from 'react';
import styled from 'styled-components';

// styles
const ArticleTitleStyle = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    top: 0px;
    right: 0px;
    margin-bottom: 20px;

    span {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 135px;
        height: 50px;
        display: inline-block;
        border: 2px solid ${({ theme }) => theme.color.colorful.stroke.orange};
        border-radius: 3px;
        font-family: Noto Sans TC;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 45px;
        letter-spacing: 0em;
        text-align: center;
        transform: skewX(-10deg);
    }
`;

const ArticleTitle = ({ title }) => {
    return (
        <ArticleTitleStyle className="title">
            <span>{title}</span>
        </ArticleTitleStyle>
    );
};

export default ArticleTitle;
