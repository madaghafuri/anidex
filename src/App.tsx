import { useState } from 'react';
import Content from './components/Content';
import useMediaState from './hooks/useMediaState';
import classNames from 'classnames';
import { Provider } from 'jotai';
import PageProvider from './context/PageContext';
import NavBar from './components/NavBar';
import CollectionProvider from './context/CollectionContext';

function App() {
    const [count, setCount] = useState(0);
    const isMobile = useMediaState();

    return (
        <PageProvider>
            <CollectionProvider>
                <Provider>
                    <div className="flex flex-col">
                        <NavBar />
                        <Content />
                    </div>
                </Provider>
            </CollectionProvider>
        </PageProvider>
    );
}

export default App;
