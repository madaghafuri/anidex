import { Transition } from '@headlessui/react';
import { useCollectionContext } from '../context/CollectionContext';
import Button from './UI/Button';
import Text from './UI/Text';
//@ts-ignore
import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import { setStorage } from '../utils/storage';
import { toast } from 'react-toastify';
import useTheme from '../hooks/useTheme';

const Action = () => {
    const { isCollectionMode, collection, setCollection, setIsCollectionMode } =
        useCollectionContext();
    const { isDarkTheme } = useTheme();

    const handleClick = () => {
        setStorage('collection', JSON.stringify(collection));
        setCollection([]);
        toast('Successfully Added to Collection');
    };

    return (
        <Transition show={isCollectionMode}>
            <Button
                icon={BookmarkIcon}
                color="primary"
                rounded="md"
                className="w-full h-16 sticky bottom-0 bg-primary"
                onClick={handleClick}
            >
                <Text>Add To Collection</Text>
            </Button>
        </Transition>
    );
};

export default Action;
