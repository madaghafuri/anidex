import { useRef, useState } from 'react';
import Content from './components/Content';
import useMediaState from './hooks/useMediaState';
import { Provider } from 'jotai';
import NavBar from './components/NavBar';
import Action from './components/Action';
import ScrollBar from './components/UI/Scrollbar';
import { useModal } from './context/ModalContext';
import { ToastContainer, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useTheme from './hooks/useTheme';
import classNames from 'classnames';

function App() {
    const [isBottom, setIsBottom] = useState<boolean>(false);
    const isMobile = useMediaState();
    const { isDarkTheme } = useTheme();
    const scrollRef = useRef(null);
    const { component } = useModal();

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

    const additionalStyle = !!component
        ? 'backdrop-brightness-75 brightness-75'
        : '';

    return (
        <Provider>
            <div
                className={classNames(
                    'flex flex-col h-screen w-screen',
                    additionalStyle
                )}
            >
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
    );
}

export default App;
