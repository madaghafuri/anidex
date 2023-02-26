import { CurrentPage } from '../atom/atom';
import useTheme from '../hooks/useTheme';
import AnimeDetail from './anime/animedetail/AnimeDetail';
import AnimeList from './anime/animelist/AnimeList';
import CollectionDetail from './collection/CollectionDetail';
import CollectionList from './collection/CollectionList';
import PageTransition from './PageTransition';

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
