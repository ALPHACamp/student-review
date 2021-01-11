import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// constants
import { headerMode } from '../../constants/constants';

// assets
import AC_LOGO_WHITE from '../../assets/img/ac_logo/logo_ac_white.png';
import AC_LOGO_COLORFUL from '../../assets/img/ac_logo/logo_ac_colorful.png';

// styles
const HeaderStyle = styled.header`
    position: fixed;
    top: 40px;
    left: 75px;
    width: calc(100% - 75px * 2);
    z-index: 1;

    a {
        display: inline-block;
    }

    .ac-logo {
        position: relative;
        width: 72px;
        height: 72px;
        background-image: url(${AC_LOGO_WHITE});
        background-position: center;
        background-size: cover;
    }

    .top-right-title {
        position: absolute;
        top: 0px;
        right: 0px;
        font-family: Nunito Sans;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: right;
        color: #fff;
        text-shadow: 1px 1px 5px #333;
        transition-duration: 0.3s;
        cursor: default;

        p {
            transition-duration: 0.3s;
        }

        &.colorful-mode {
            p {
                transition-duration: 0.3s;
                color: ${({ theme }) => theme.color.mono.black};
                text-shadow: none;
            }
        }

        &:hover {
            transform: translateY(-5px);
            text-shadow: 3px 3px 8px #333;
        }
    }

    @media screen and (max-width: 768px) {
        left: 30px;
        width: calc(100% - 30px * 2);

        .ac-logo {
            position: relative;
            width: 50px;
            height: 50px;
            background-image: url(${AC_LOGO_WHITE});
        }

        .top-right-title {
            font-size: 3vmin;
            line-height: 4vmin;
        }
    }
`;
const Header = () => {
    const headerCurrentMode = useSelector((store) => store.ui.header);
    return (
        <HeaderStyle>
            <a href="/">
                <div
                    className="ac-logo"
                    style={{
                        backgroundImage: `url(${
                            headerCurrentMode.currentMode === headerMode.WHITE
                                ? AC_LOGO_WHITE
                                : AC_LOGO_COLORFUL
                        }`,
                    }}
                ></div>
            </a>
            <div
                className={`top-right-title ${
                    headerCurrentMode.currentMode === headerMode.COLORFULE
                        ? 'colorful-mode'
                        : ''
                }`}
            >
                <div>
                    <p>ALPHA CAMP</p>
                    <p>STUDENTS COMMUNITY</p>
                    <p>2020</p>
                </div>
            </div>
        </HeaderStyle>
    );
};

export default Header;
