//@ts-ignore
import { ReactComponent as BookmarkIcon } from '../../../assets/bookmark.svg';
//@ts-ignore
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { Media } from '../../../api/types';
import Button from '../../UI/Button';
import { useModal } from '../../../context/ModalContext';
import AddToCollectionModal from '../../modal/AddToCollectionModal';

type ActionDetailProps = {
    media: Media;
};

const ActionDetail = ({ media }: ActionDetailProps) => {
    const { showModal } = useModal();

    const handleClick = () => {
        showModal(<AddToCollectionModal />);
        return;
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 w-full">
                <Button
                    icon={MenuIcon}
                    rounded="base"
                    className="hover:bg-opacity-50"
                    width="35px"
                    height="35px"
                />
                <Button
                    icon={BookmarkIcon}
                    rounded="base"
                    className="grow bg-primary hover:bg-opacity-30"
                    onClick={handleClick}
                ></Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: media?.description }} />
        </div>
    );
};

export default ActionDetail;
