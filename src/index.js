import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './store/reducers/index.reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// styles
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/constantStyle';
import { ResetStyles } from './styles/reset.styles';
import { GlobalStyles } from './styles/global.style';
import { IconFontCustumizedStyles } from './styles/iconfont.style';

// icon import with iconfont
import './assets/icofont/icofont.min.css';

const reduxStore = createStore(
    Reducers
    // composeWithDevTools() //with redux debugging tools pluggin
);

ReactDOM.render(
    <React.StrictMode>
        <ResetStyles />
        <GlobalStyles />
        <IconFontCustumizedStyles />

        <ThemeProvider theme={theme}>
            <Provider store={reduxStore}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
