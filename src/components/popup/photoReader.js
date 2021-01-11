import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

// components

// this is for close btn
// import Icon from '../icon/Icon';

// actions
import { switchPhotoReader } from '../../store/actions/ui.action';
import MyImage from '../img/myImg';

// styles
const PhotoReaderStyle = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 1);
    opacity: 1;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition-duration: 0.3s;
    transform: translateY(50px);

    &.open {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
    }

    .close-btn {
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        background: #333;
        cursor: pointer;
        transition-duration: 0.3s;

        &:active {
            opacity: 0.5;
        }

        i.icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .img-title {
        font-family: Noto Sans TC;
        font-size: 2vmax;
        font-style: normal;
        font-weight: 500;
        line-height: 2vmax;
        letter-spacing: 0px;
        text-align: center;
        margin: 10px auto;
        color: ${({ theme }) => theme.color.mono.white};
    }

    .img-container {
        position: relative;
        width: 100%;
        height: auto;
        min-height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            height: auto;
            min-height: auto;
            background: ${({ theme }) => theme.color.mono.black};
            cursor: pointer;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            width: 100%;
        }

        .img-title {
            font-size: 3vmin;
            line-height: 4vmin;
        }
    }
`;

const PhotoReader = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const photoReaderState = useSelector((store) => store.ui.photoReader);

    useEffect(() => {
        setState(false);
    }, []);

    return (
        <CSSTransition
            in={state.isOpen}
            timeout={1000}
            classNames="photo-reader-"
        >
            <PhotoReaderStyle
                onClick={() => {
                    dispatch(switchPhotoReader(false, ''));
                }}
                className={`${
                    photoReaderState && photoReaderState.isOpen ? 'open' : ''
                }`}
            >
                {/* <div
                    className="close-btn"
                    onClick={() => {
                        dispatch(switchPhotoReader(false, ''));
                    }}
                >
                    <Icon iconName="ui-close" />
                </div> */}

                <div className="img-container">
                    <MyImage image={photoReaderState} />

                    {photoReaderState && photoReaderState.alt ? (
                        <div className="img-title">{photoReaderState.alt}</div>
                    ) : null}
                </div>
            </PhotoReaderStyle>
        </CSSTransition>
    );
};

export default PhotoReader;
