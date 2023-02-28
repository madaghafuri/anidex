import { Transition } from '@headlessui/react';
import { useCollectionContext } from '../context/CollectionContext';
import Button from './UI/Button';
import Text from './UI/Text';
//@ts-ignore
import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import useTheme from '../hooks/useTheme';
import { useModal } from '../context/ModalContext';
import AddToCollectionModal from './modal/AddToCollectionModal';

const Action = () => {
    const { isCollectionMode } = useCollectionContext();
    const { showModal } = useModal();
    const { isDarkTheme } = useTheme();

    const handleClick = () => {
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
