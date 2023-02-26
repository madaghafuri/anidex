import classNames from 'classnames';
import { Fragment } from 'react';
import { useCollectionContext } from '../context/CollectionContext';
import { usePageContext } from '../context/PageContext';
import useMediaState from '../hooks/useMediaState';
import useTheme from '../hooks/useTheme';
import AnimeList from './anime/AnimeList';
import Text from './UI/Text';

const NavBar = () => {
    const isMobile = useMediaState();
    const { isLightTheme } = useTheme();
    const { setCurrentPage } = usePageContext();
    const { collection, isCollectionMode } = useCollectionContext();

    const handleAnimeList = () => {
        setCurrentPage({ title: 'Anime List', page: AnimeList });
    };

    return (
        <div className="flex flex-row bg-default-dark p-2 justify-around sticky top-0">
            {isCollectionMode ? (
                <Text>{collection.length}</Text>
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
                    <Text size="md" weight="bold" align="start">
                        Collection List
                    </Text>
                </Fragment>
            )}
        </div>
    );
};

export default NavBar;
