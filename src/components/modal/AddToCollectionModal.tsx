import { useEffect, useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { usePageContext } from '../../context/PageContext';
import { getStorage } from '../../utils/storage';
import CollectionList from '../collection/CollectionList';
import Button from '../UI/Button';
import Text from '../UI/Text';

function AddToCollectionModal() {
    const [collection, setCollection] = useState([]);
    const { closeModal } = useModal();
    const { setCurrentPage } = usePageContext();

    useEffect(() => {
        const collections = getStorage('collection');
        setCollection(JSON.parse(collections));
    }, []);

    const handleOK = () => {
        closeModal();
        return;
    };

    const handleEdit = () => {
        setCurrentPage({ title: 'Collection List', page: CollectionList });
        closeModal();
        return;
    };

    const handleCancel = () => {
        closeModal();
        return;
    };

    return (
        <div className="flex flex-col gap-2">
            <Text size="lg">Add to Collection</Text>
            {(Object.entries(collection) || []).map(([key], index) => (
                <div key={index} className="flex flex-row gap-3 p-3">
                    <input type="checkbox" className="" value={key} />
                    <Text>{key}</Text>
                </div>
            ))}
            <div className="w-full flex flex-row absolute bottom-3 justify-between">
                <Button onClick={handleEdit}>
                    <Text>Edit</Text>
                </Button>
                <div className="flex flex-row mr-4 gap-3">
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
