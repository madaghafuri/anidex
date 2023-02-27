import { useEffect, useState } from 'react';
import { Collection } from '../../context/CollectionContext';
import { usePageContext } from '../../context/PageContext';
import { getStorage } from '../../utils/storage';
import Button from '../UI/Button';
import Text from '../UI/Text';
import Card from './Card';
//@ts-ignore
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { useModal } from '../../context/ModalContext';
import NewCollection from '../modal/NewCollection';

const CollectionList = () => {
    const [collection, setCollection] = useState<Collection[]>([]);
    console.log(collection);
    const { showModal } = useModal();

    useEffect(() => {
        const colls = getStorage('collection');
        setCollection(JSON.parse(colls));
    }, []);

    const handleAdd = () => {
        showModal(<NewCollection />);
        return;
    };

    return (
        <div className="p-3 flex flex-col">
            {(collection || []).map((item, index) => (
                <Card key={index} item={item} />
            ))}
            <Button
                icon={PlusIcon}
                rounded="md"
                className="fixed bottom-3 self-end bg-primary"
                onClick={handleAdd}
            >
                <Text size="lg">Add</Text>
            </Button>
        </div>
    );
};

export default CollectionList;
