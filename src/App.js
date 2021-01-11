import styled from 'styled-components';
import Fullpage from './components/Fullpage';
import Header from './components/header/header';

const AppStyle = styled.div``;

function App() {
    return (
        <AppStyle className="App">
            <Header />
            <Fullpage />
        </AppStyle>
    );
}

export default App;
