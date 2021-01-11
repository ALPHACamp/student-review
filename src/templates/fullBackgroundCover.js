import React from 'react';
import styled from 'styled-components';

// assets
import BG_PATTERN_PNG from '../assets/img/page/bg_pattern.png';

// styles
const FullBackgroundCoverStyle = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    background-position: center center;
    background-size: cover;

    &.white {
        background: ${({ theme }) => theme.color.mono.white};
    }

    &.black {
        background: ${({ theme }) => theme.color.mono.black};
    }

    .mask {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(38, 37, 35, 0.6);
    }

    .pattern {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: url(${BG_PATTERN_PNG});
        background-repeat: repeat;
        background-size: 1000px 700px;
    }
`;

const FullBackgroundCover = ({ type, withMask, withPattern, src }) => {
    const backgroundConfig =
        src !== '' ? { backgroundImage: `url(${src})` } : null;
    return (
        <FullBackgroundCoverStyle
            className={`${type}`}
            style={backgroundConfig}
        >
            {withPattern ? <div className="pattern"></div> : null}
            {withMask ? <div className="mask"></div> : null}
        </FullBackgroundCoverStyle>
    );
};

export default FullBackgroundCover;
