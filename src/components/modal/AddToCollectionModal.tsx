import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCollectionContext } from '../../context/CollectionContext';
import { useModal } from '../../context/ModalContext';
import { usePageContext } from '../../context/PageContext';
import { getStorage } from '../../utils/storage';
import CollectionList from '../collection/CollectionList';
import Button from '../UI/Button';
import Text from '../UI/Text';

function AddToCollectionModal() {
    const [collectionObj, setCollectionObj] = useState([]);
    const [addedTo, setAddedTo] = useState<string[]>([]);
    const { closeModal } = useModal();
    const { setCurrentPage } = usePageContext();
    const { addToCollection, setTempCollection } = useCollectionContext();
    console.log(addedTo);

    useEffect(() => {
        const collections = JSON.parse(getStorage('collection') || '{}');
        setCollectionObj(collections);
    }, []);

    const handleOK = () => {
        addToCollection(addedTo, collectionObj);
        toast('Successfully Added to Collection');
        closeModal();
        return;
    };

    const handleEdit = () => {
        setCurrentPage({ title: 'Collection List', page: CollectionList });
        setTempCollection([]);
        closeModal();
        return;
    };

    const handleCancel = () => {
        setTempCollection([]);
        closeModal();
        return;
    };

    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(collectionObj);
        if (event.target.checked) {
            setAddedTo((state) => {
                const newState = [...state, event.target.value];
                return newState;
            });
        } else {
            setAddedTo((state) => {
                return state.filter((item) => item !== event.target.value);
            });
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3 p-4">
                <Text size="lg">Add to Collection</Text>
                {(Object.entries(collectionObj) || []).map(([key], index) => (
                    <div key={index} className="flex flex-row gap-3 p-3">
                        <input
                            type="checkbox"
                            className=""
                            value={key}
                            onChange={handleChecked}
                        />
                        <Text>{key}</Text>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-row absolute bottom-3 justify-between p-3">
                <Button onClick={handleEdit}>
                    <Text>Edit</Text>
                </Button>
                <div className="flex flex-row gap-3">
                    <Button onClick={handleCancel}>
                        <Text>Cancel</Text>
                    </Button>
                    <Button onClick={handleOK}>
                        <Text>OK</Text>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddToCollectionModal;
