import React from 'react';
import styled from 'styled-components';
import CUTE_PEOPLE_PNG from '../assets/img/page/cut_people.png';

// styles
const PageTemplateStyle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.bg-black-gradient {
        background: ${({ theme }) => theme.color.gradient.mainBG};
    }

    .bottom-cute-people {
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding-bottom: 20%;
        background-image: url(${CUTE_PEOPLE_PNG});
        background-size: cover;
        background-position: center center;
        opacity: 0.5;
    }
`;

const PageTemplate = (props) => {
    const {
        customizedBgClassName,
        pageName,
        // directions,
        // fullpageApi
    } = props;
    return (
        <PageTemplateStyle
            {...props}
            className={`page-frame-${pageName} ${customizedBgClassName}`}
        >
            {props.children}

            {/* the navigator, if you wanna use, you should import this function from utils.js first */}
            {/* {renderNavigators(directions, fullpageApi)} */}
        </PageTemplateStyle>
    );
};

export default PageTemplate;
