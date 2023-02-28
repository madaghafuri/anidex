import { useEffect, useState } from 'react';
import { getStorage } from '../../utils/storage';
import Button from '../UI/Button';
import Text from '../UI/Text';
import Card from './Card';
//@ts-ignore
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { useModal } from '../../context/ModalContext';
import NewCollection from '../modal/NewCollection';

const CollectionList = () => {
    const [collection, setCollection] = useState<[]>([]);
    const { showModal } = useModal();
    console.log(collection);

    useEffect(() => {
        const colls = JSON.parse(getStorage('collection') || '{}');
        setCollection(colls);
    }, []);

    useEffect(() => {
        const handleStorage = () => {
            const colls = JSON.parse(getStorage('collection') || '{}');
            setCollection(colls);
        };

        window.addEventListener('storage', handleStorage);
        return () => {
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    const handleAdd = () => {
        showModal(<NewCollection />);
        return;
    };

    return (
        <div className="p-3 flex flex-col gap-2">
            {(Object.entries(collection) || [])?.map(([key, value], index) => (
                <Card key={index} title={key} value={value} />
            ))}
            <Button
                icon={PlusIcon}
                rounded="md"
                className="fixed bottom-3 self-end bg-primary"
                onClick={handleAdd}
            >
                <Text size="lg" weight="bold">
                    Add
                </Text>
            </Button>
        </div>
    );
};

export default CollectionList;
