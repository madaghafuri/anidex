import classNames from 'classnames';
import { Fragment } from 'react';
import { useCollectionContext } from '../context/CollectionContext';
import useMediaState from '../hooks/useMediaState';
import useTheme from '../hooks/useTheme';
import Text from './UI/Text';

const NavBar = () => {
    const isMobile = useMediaState();
    const { isLightTheme } = useTheme();
    const { collection, isCollectionMode } = useCollectionContext();
    return (
        <div className="flex flex-row bg-default-dark p-2 justify-around">
            {isCollectionMode ? (
                <Text>{collection.length}</Text>
            ) : (
                <Fragment>
                    <Text size="md" weight="bold" align="start">
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
