import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';
import { Media } from '../api/types';
import AnimeList from '../components/anime/AnimeList';

type Page =
    | 'Anime List'
    | 'Collection List'
    | 'Anime Detail'
    | 'Collection Detail';

interface CurrentPage {
    title: Page;
    page: FC;
}

type PageState = {
    currentPage: CurrentPage;
    setCurrentPage: Dispatch<SetStateAction<CurrentPage>>;
    pageDetailData: Media;
    setPageDetailData: Dispatch<SetStateAction<Media>>;
};

const PageContext = createContext<PageState | null>(null);

const PageProvider = ({ children }: { children: ReactNode }) => {
    const [currentPage, setCurrentPage] = useState<CurrentPage>({
        title: 'Anime List',
        page: AnimeList,
    });
    const [pageDetailData, setPageDetailData] = useState<Media>();

    return (
        <PageContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                pageDetailData,
                setPageDetailData,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePageContext must be used within a PageProvider');
    }

    return context;
};

export default PageProvider;
