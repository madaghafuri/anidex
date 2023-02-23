import { useState } from 'react';
import NavBar from './components/NavBar';
import { css } from '@emotion/css';
import Content from './components/Content';
import useMediaState from './hooks/useMediaState';
import Text from './components/UI/Text';
import classNames from 'classnames';
import { Provider } from 'jotai';

function App() {
    const [count, setCount] = useState(0);
    const isMobile = useMediaState();

    const anotherStyle = isMobile
        ? css`
              flex-direction: column;
          `
        : '';

    return (
        <div className={classNames(coreStyle, anotherStyle)}>
            <Provider>
                {/* <NavBar /> */}
                <Content />
            </Provider>
        </div>
    );
}

const coreStyle = css`
    width: 100vw;
    height: 100vh;
`;

export default App;
