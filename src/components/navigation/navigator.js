import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';

// navigator constants
export const NavigatorDirectionTypes = {
    UP: 'UP',
    RIGHT: 'RIGHT',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
};

// styles
const NavUpStyle = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -25px;
`;

const NavRightStyle = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -25px;
    margin-left: -50px;
`;

const NavDownStyle = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -50px;
    margin-left: -25px;
`;

const NavLeftStyle = styled.div`
    position: absolute;
    top: 50%;
    left: 0%;
    margin-top: -50px;
    margin-top: -25px;
`;

const Navigator = ({ direction, fullpageApi }) => {
    switch (direction) {
        case NavigatorDirectionTypes.UP:
            return (
                <NavUpStyle
                    className="navigator-up"
                    onClick={() => {
                        fullpageApi.moveSectionUp();
                    }}
                >
                    <Icon purpose="navigator" iconName="rounded-up" />
                </NavUpStyle>
            );

        case NavigatorDirectionTypes.RIGHT:
            return (
                <NavRightStyle
                    className="navigator-right"
                    onClick={() => {
                        fullpageApi.moveSlideRight();
                    }}
                >
                    <Icon
                        purpose="navigator"
                        iconName="rounded-up icofont-rotate-90"
                    />
                </NavRightStyle>
            );

        case NavigatorDirectionTypes.DOWN:
            return (
                <NavDownStyle
                    className="navigator-down"
                    onClick={() => {
                        fullpageApi.moveSectionDown();
                    }}
                >
                    <Icon
                        purpose="navigator"
                        iconName="rounded-up icofont-rotate-180"
                    />
                </NavDownStyle>
            );

        case NavigatorDirectionTypes.LEFT:
            return (
                <NavLeftStyle
                    className="navigator-left"
                    onClick={() => {
                        fullpageApi.moveSlideLeft();
                    }}
                >
                    <Icon
                        purpose="navigator"
                        iconName="rounded-up icofont-rotate-270"
                    />
                </NavLeftStyle>
            );

        default:
            return null;
    }
};

export default Navigator;
