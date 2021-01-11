import { headerMode } from '../../constants/constants';
import * as ActionType from '../actionType';

const initState = {
    photoReader: {
        isOpen: false,
        src: '',
    },
    header: {
        currentMode: headerMode.WHITE,
    },
    scrollArrow: {
        isShow: false,
    },
};

const uiReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.SWITCH_PHOTO_READER:
            return {
                ...state,
                photoReader: {
                    ...state.photoReader,
                    isOpen: action.payload.isOpen,
                    src: action.payload.src,
                    alt: action.payload.alt,
                },
            };
        case ActionType.SET_HEADER_MODE:
            return {
                ...state,
                header: {
                    ...state.header,
                    currentMode: action.payload.headerMode,
                },
            };
        case ActionType.SHOW_SCROLL_ARROW:
            return {
                ...state,
                scrollArrow: {
                    ...state.scrollArrow,
                    isShow: action.payload.isShow,
                },
            };

        default:
            return state;
    }
};

export default uiReducer;
