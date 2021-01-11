import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// constants
import { photoSrcFromType } from '../constants/constants';

// components
import { switchPhotoReader } from '../store/actions/ui.action';
import MyImage from '../components/img/myImg';

const PhotoGridTemplateStyle = styled.div`
    position: relative;
    left: 10%;
    width: calc(80%);
    height: auto;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;

    &.from-Activity {
        left: 0;
        width: calc(100%);
    }

    .company-img-wrapper {
        position: relative;
        width: 100%;
        padding-bottom: 49%;
        border: 1px solid #eee;
        .photo-item {
            position: absolute;
            top: 50%;
            left: 25px;
            width: calc(100% - 50px);
            transform: translateY(-50%);
            overflow: hidden;
            opacity: 0.8;
            transition-duration: 0.3s;

            &:hover {
                opacity: 1;
            }
        }
    }

    .activity-img-wrapper {
        position: relative;
        width: 100%;
        padding-bottom: 49%;
        border: 1px solid ${({ theme }) => theme.color.mono.black};
        .photo-item {
            position: absolute;
            top: 50%;
            width: calc(100%);
            transform: translateY(-50%);
            overflow: hidden;
            cursor: pointer;
            opacity: 0.8;
            transition-duration: 0.3s;

            &:hover {
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        left: 0px;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        .activity-img-wrapper,
        .company-img-wrapper {
            .photo-item {
                opacity: 1;
            }
        }
    }
    @media screen and (max-width: 768px) {
        left: 0px;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const renderPhotoList = (dispatch, srcFrom, photoData) => {
    switch (srcFrom) {
        case photoSrcFromType.COMPANY:
            return photoData.map((photo, index) => (
                <div
                    className="company-img-wrapper"
                    key={`company-id-${index}`}
                >
                    <MyImage image={photo} />
                </div>
            ));
        case photoSrcFromType.ACTIVITY:
            return photoData.map((photo, index) => (
                <div
                    className="activity-img-wrapper"
                    key={`activity-id-${index}`}
                    onClick={() =>
                        dispatch(switchPhotoReader(true, photo.src, photo.alt))
                    }
                >
                    <MyImage image={photo} />
                </div>
            ));

        default:
            return;
    }
};

const PhotoGridTemplate = ({ srcFrom, photoData }) => {
    const dispatch = useDispatch();

    return (
        <PhotoGridTemplateStyle
            className={`${
                srcFrom === photoSrcFromType.ACTIVITY ? 'from-Activity' : ''
            }`}
        >
            {renderPhotoList(dispatch, srcFrom, photoData)}
        </PhotoGridTemplateStyle>
    );
};

export default PhotoGridTemplate;
