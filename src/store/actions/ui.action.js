import * as ActionType from '../actionType';

export const switchPhotoReader = (isOpen, src, alt) => {
    return {
        type: ActionType.SWITCH_PHOTO_READER,
        payload: {
            isOpen: isOpen,
            src: src,
            alt: alt,
        },
    };
};

export const setHeaderMode = (headerMode) => {
    return {
        type: ActionType.SET_HEADER_MODE,
        payload: {
            headerMode: headerMode,
        },
    };
};

export const showScrollArrow = (isShow) => {
    return {
        type: ActionType.SHOW_SCROLL_ARROW,
        payload: {
            isShow: isShow,
        },
    };
};
