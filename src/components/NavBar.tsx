import { Fragment } from 'react';
import { useCollectionContext } from '../context/CollectionContext';
import { usePageContext } from '../context/PageContext';
import useMediaState from '../hooks/useMediaState';
import useTheme from '../hooks/useTheme';
import AnimeList from './anime/animelist/AnimeList';
import CollectionList from './collection/CollectionList';
import Text from './UI/Text';

const NavBar = () => {
    const isMobile = useMediaState();
    const { isLightTheme } = useTheme();
    const { setCurrentPage } = usePageContext();
    const { tempCollection, isCollectionMode } = useCollectionContext();

    const handleAnimeList = () => {
        setCurrentPage({ title: 'Anime List', page: AnimeList });
    };

    const handleCollectionList = () => {
        setCurrentPage({ title: 'Collection List', page: CollectionList });
    };

    const theme = isLightTheme ? 'bg-default-light' : 'bg-default-dark';

    return (
        <div
            className={`flex flex-row ${theme} p-2 justify-around sticky top-0`}
        >
            {isCollectionMode ? (
                <Text>{tempCollection.length}</Text>
            ) : (
                <Fragment>
                    <Text
                        size="md"
                        weight="bold"
                        align="start"
                        onClick={handleAnimeList}
                    >
                        Anime List
                    </Text>
                    <Text
                        size="md"
                        weight="bold"
                        align="start"
                        onClick={handleCollectionList}
                    >
                        Collection List
                    </Text>
                </Fragment>
            )}
        </div>
    );
};

export default NavBar;
