import { useMemo, useRef, useState } from 'react';
import Content from './components/Content';
import { Provider } from 'jotai';
import NavBar from './components/NavBar';
import Action from './components/Action';
import ScrollBar from './components/UI/Scrollbar';
import { useModal } from './context/ModalContext';
import { ToastContainer, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useTheme from './hooks/useTheme';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';
import { PageResponse } from './api/types';
import { getPageQuery } from './api/apollo';
import Pagination from './components/Pagination';
import { usePageContext } from './context/PageContext';
import Icon from './components/UI/Icon';
//@ts-expect-error
import { ReactComponent as LoadingIcon } from './assets/loading.svg';

function App() {
    const [page, setPage] = useState<number>(1);
    const [isBottom, setIsBottom] = useState<boolean>(false);

    const { data, loading } = useQuery<PageResponse>(getPageQuery(page));
    const { currentPage } = usePageContext();
    const { isDarkTheme } = useTheme();
    const scrollRef = useRef(null);
    const { component } = useModal();

    const additionalStyle = !!component
        ? 'backdrop-brightness-75 brightness-75'
        : '';

    const lastPage = useMemo(
        () => data?.Page.pageInfo.lastPage,
        [data?.Page.pageInfo.lastPage]
    );

    const currentPagination = useMemo(
        () => data?.Page.pageInfo.currentPage,
        [data?.Page.pageInfo.currentPage]
    );

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

    const handleChangePage = (pageNumber: number) => {
        console.log(pageNumber);
        setPage(pageNumber);
    };

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
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <Icon
                                Image={LoadingIcon}
                                className="animate-spin"
                            />
                        </div>
                    ) : (
                        <ScrollBar
                            scrollRef={scrollRef}
                            onScroll={handleScroll}
                            autoHide
                        >
                            <Content media={data?.Page.media} />
                        </ScrollBar>
                    )}
                </div>
                {currentPage.title === 'Anime List' && (
                    <Pagination
                        onNext={handleChangePage}
                        onPrev={handleChangePage}
                        lastPage={lastPage}
                        currentPage={currentPagination}
                    />
                )}
                <Action />
            </div>
        </Provider>
    );
}

export default App;
