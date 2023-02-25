import Button from '../UI/Button';
//@ts-ignore
import { ReactComponent as BookmarkIcon } from '../../assets/bookmark.svg';
//@ts-ignore
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { Media } from '../../api/types';
import Text from '../UI/Text';

type ActionDetailProps = {
    media: Media;
};

const ActionDetail = ({ media }: ActionDetailProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 w-full">
                <Button
                    icon={MenuIcon}
                    rounded="base"
                    className="hover:bg-opacity-50"
                />
                <Button
                    icon={BookmarkIcon}
                    rounded="base"
                    className="grow bg-primary hover:bg-opacity-30"
                >
                    <Text>Add To Collection</Text>
                </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: media?.description }} />
        </div>
    );
};

export default ActionDetail;
