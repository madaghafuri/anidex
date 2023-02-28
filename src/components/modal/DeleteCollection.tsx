import { useModal } from '../../context/ModalContext';
import { getStorage, removeItem, setStorage } from '../../utils/storage';
import Button from '../UI/Button';
import Text from '../UI/Text';

type DeleteCollectionProps = {
    title: string;
};

function DeleteCollection({ title }: DeleteCollectionProps) {
    const { closeModal } = useModal();

    const handleOK = async () => {
        const collection = JSON.parse(getStorage('collection'));
        const newColl = { ...collection };
        delete newColl[title];
        setStorage('collection', JSON.stringify(newColl));
        window.dispatchEvent(new Event('storage'));
        closeModal();
    };

    return (
        <div className="flex flex-col gap-10">
            <Text size="xl" weight="bold">
                Delete Collection
            </Text>
            <Text>{`Do you wish to delete the collection ${title}?`}</Text>
            <div className="flex flex-row gap-4 self-end absolute bottom-3">
                <Button>
                    <Text>Cancel</Text>
                </Button>
                <Button onClick={handleOK}>
                    <Text>OK</Text>
                </Button>
            </div>
        </div>
    );
}

export default DeleteCollection;
