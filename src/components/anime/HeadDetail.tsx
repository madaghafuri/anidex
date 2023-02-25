import { Media } from '../../api/types';
import Text from '../UI/Text';
import TextLabel from '../UI/TextLabel';
//@ts-ignore
import { ReactComponent as ScoreIcon } from '../../assets/star.svg';
//@ts-ignore
import { ReactComponent as BookMarkIcon } from '../../assets/bookmark.svg';
import { nFormatter } from '../../utils/nFormatter';

type HeadDetailProps = {
    media: Media;
};

const HeadDetail = ({ media }: HeadDetailProps) => {
    return (
        <div className="flex gap-3">
            <img src={media?.coverImage.medium} className="rounded" />
            <div className="flex flex-col gap-3">
                <Text size="xl" weight="bold">
                    {media?.title.userPreferred}
                </Text>
                <Text size="md" weight="lighter">
                    {media?.title.english}
                </Text>
                <div className="flex">
                    <TextLabel
                        icon={ScoreIcon}
                        className="mt-9"
                        size="md"
                        weight="lighter"
                        color="#3577ff"
                    >
                        {media?.averageScore}
                    </TextLabel>
                    <TextLabel
                        icon={BookMarkIcon}
                        className="mt-9 opacity-50"
                        size="md"
                        weight="lighter"
                    >
                        {nFormatter(media?.favourites)}
                    </TextLabel>
                </div>
            </div>
        </div>
    );
};

export default HeadDetail;
