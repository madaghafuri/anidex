import { useRef, useState } from 'react';
import Content from './components/Content';
import useMediaState from './hooks/useMediaState';
import { Provider } from 'jotai';
import PageProvider from './context/PageContext';
import NavBar from './components/NavBar';
import CollectionProvider from './context/CollectionContext';
import Action from './components/Action';
import ScrollBar from './components/UI/Scrollbar';
import { ToastContainer, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useTheme from './hooks/useTheme';

function App() {
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const isMobile = useMediaState();
    const { isDarkTheme } = useTheme();
    const scrollRef = useRef(null);

    const handleScroll = () => {
        const scroll = scrollRef.current;
        if (
            scroll.getScrollTop() + scroll.getClientHeight() ===
            scroll.getScrollHeight()
        ) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };

    return (
        <PageProvider>
            <CollectionProvider>
                <Provider>
                    <div className="flex flex-col h-screen w-screen">
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            theme={isDarkTheme ? 'dark' : 'light'}
                            closeOnClick={true}
                            transition={Bounce}
                        />
                        <NavBar />
                        <div className="h-full w-full">
                            <ScrollBar
                                scrollRef={scrollRef}
                                onScroll={handleScroll}
                                autoHide
                            >
                                <Content />
                            </ScrollBar>
                        </div>
                        <Action />
                    </div>
                </Provider>
            </CollectionProvider>
        </PageProvider>
    );
}

export default App;
