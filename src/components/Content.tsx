import AnimeList from './anime/AnimeList';
import CollectionList from './collection/CollectionList';
import AnimeDetail from './anime/AnimeDetail';
import CollectionDetail from './collection/CollectionDetail';
import useTheme from '../hooks/useTheme';
import PageTransition from './PageTransition';
import { CurrentPage } from '../atom/atom';
import { useRef, useState } from 'react';
import ScrollBar from './UI/Scrollbar';

const pages: CurrentPage[] = [
    { title: 'Anime List', page: AnimeList },
    { title: 'Collection List', page: CollectionList },
    { title: 'Anime Detail', page: AnimeDetail },
    { title: 'Collection Detail', page: CollectionDetail },
];

const Content = () => {
    const [isBottom, setIsBottom] = useState<boolean>(false);

    const scrollRef = useRef(null);
    console.log(isBottom);
    const { isDarkTheme, isLightTheme } = useTheme();

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
        <div className={coreStyle}>
            <ScrollBar scrollRef={scrollRef} onScroll={handleScroll} autoHide>
                {pages.map(({ page: Page, title }, index) => (
                    <PageTransition key={index} page={title}>
                        <Page key={index} />
                    </PageTransition>
                ))}
            </ScrollBar>
        </div>
    );
};

const coreStyle = 'w-screen h-screen rounded-md mt-2';

export default Content;
