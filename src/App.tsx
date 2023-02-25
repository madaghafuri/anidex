import { useState } from 'react';
import Content from './components/Content';
import useMediaState from './hooks/useMediaState';
import classNames from 'classnames';
import { Provider } from 'jotai';
import PageProvider from './context/PageContext';
import NavBar from './components/NavBar';

function App() {
    const [count, setCount] = useState(0);
    const isMobile = useMediaState();

    return (
        <div className="">
            <Provider>
                <PageProvider>
                    {/* <NavBar /> */}
                    <Content />
                </PageProvider>
            </Provider>
        </div>
    );
}

export default App;
