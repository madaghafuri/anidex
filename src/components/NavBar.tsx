import { Fragment } from 'react';
import { useCollectionContext } from '../context/CollectionContext';
import { usePageContext } from '../context/PageContext';
import useMediaState from '../hooks/useMediaState';
import useTheme from '../hooks/useTheme';
import AnimeList from './anime/animelist/AnimeList';
import CollectionList from './collection/CollectionList';
import Button from './UI/Button';
import Text from './UI/Text';

//@ts-ignore
import { ReactComponent as ViteLogo } from '../assets/vite.svg';
//@ts-ignore
import { ReactComponent as CollectionLogo } from '../assets/bookmark.svg';

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
            className={`flex flex-row ${theme} p-5 justify-around sticky top-0`}
        >
            {isCollectionMode ? (
                <Text>{tempCollection.length}</Text>
            ) : (
                <div className="w-full flex flex-row items-center justify-between">
                    <Button icon={ViteLogo} onClick={handleAnimeList}>
                        <Text size="xl" weight="extrabold">
                            AniDex
                        </Text>
                    </Button>
                    <Button
                        icon={CollectionLogo}
                        onClick={handleCollectionList}
                    />
                </div>
            )}
        </div>
    );
};

export default NavBar;
