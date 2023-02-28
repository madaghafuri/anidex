import { Transition } from '@headlessui/react';
import { Collection, useCollectionContext } from '../context/CollectionContext';
import Button from './UI/Button';
import Text from './UI/Text';
//@ts-ignore
import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import { setStorage } from '../utils/storage';
import { toast } from 'react-toastify';
import useTheme from '../hooks/useTheme';
import { useModal } from '../context/ModalContext';
import AddToCollectionModal from './modal/AddToCollectionModal';

const Action = () => {
    const {
        isCollectionMode,
        tempCollection,
        setTempCollection,
        setCollection,
        collection,
    } = useCollectionContext();
    const { showModal } = useModal();
    const { isDarkTheme } = useTheme();

    const handleClick = () => {
        // const newCollection: Collection[] = [
        //     ...collection,
        //     { name: 'weekly', collection: tempCollection },
        // ];
        // setStorage('collection', JSON.stringify(newCollection));
        setTempCollection([]);
        // setCollection(newCollection);
        // toast('Successfully Added to new Collection');
        showModal(<AddToCollectionModal />);
        return;
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
