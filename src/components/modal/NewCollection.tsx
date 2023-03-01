import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import { useCollectionContext } from '../../context/CollectionContext';
import { useModal } from '../../context/ModalContext';
import useTheme from '../../hooks/useTheme';
import { getStorage, setStorage } from '../../utils/storage';
import Button from '../UI/Button';
import Text from '../UI/Text';

function NewCollection() {
    const [collectionName, setCollectionName] = useState<string>('');
    const { isDarkTheme } = useTheme();
    const { closeModal } = useModal();
    const { addNewCollection } = useCollectionContext();

    const themeStyle = isDarkTheme ? 'bg-default-dark' : 'bg-default-light';

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCollectionName(event.target.value);
    };

    const handleAdd = () => {
        addNewCollection(collectionName);
        window.dispatchEvent(new Event('storage'));
        closeModal();
        return;
    };

    const handleCancel = () => {
        closeModal();
        return;
    };

    return (
        <div className={classNames(containerStyle, themeStyle)}>
            <Text size="xl">Add New Collection</Text>
            <Text size="md">Name</Text>
            <input
                type="text"
                onChange={handleChange}
                className="p-1.5 rounded-md"
                required
            />
            <div className="flex self-end gap-5">
                <Button onClick={handleCancel}>
                    <Text>Cancel</Text>
                </Button>
                <Button onClick={handleAdd} enable={collectionName.length > 0}>
                    <Text>Add</Text>
                </Button>
            </div>
        </div>
    );
}

const containerStyle = 'flex flex-col gap-4 p-6';

export default NewCollection;
