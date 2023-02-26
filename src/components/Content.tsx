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
    const { isDarkTheme, isLightTheme } = useTheme();

    return (
        <div className={coreStyle}>
            {pages.map(({ page: Page, title }, index) => (
                <PageTransition key={index} page={title}>
                    <Page key={index} />
                </PageTransition>
            ))}
        </div>
    );
};

const coreStyle = '';

export default Content;
