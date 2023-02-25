import { Media } from '../../api/types';
import Text from '../UI/Text';
//@ts-ignore
import { ReactComponent as favouriteIcon } from '../../assets/favourite.svg';
//@ts-ignore
import { ReactComponent as volumeIcon } from '../../assets/volumes.svg';
//@ts-ignore
import { ReactComponent as updateIcon } from '../../assets/updatedAt.svg';
import useCurrentTime from '../../utils/useCurrentTime';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { usePageContext } from '../../context/PageContext';
import AnimeDetail from './AnimeDetail';
import useTheme from '../../hooks/useTheme';
import TextLabel from '../UI/TextLabel';
import { useState } from 'react';

type CardProps = {
    media: Media;
};

const Card = ({ media }: CardProps) => {
    const [isSelectMode, setIsSelectMode] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<number>();

    const updatedAt = dayjs.unix(media.updatedAt);
    const { currentTime } = useCurrentTime();
    const { setCurrentPage, setPageDetailData } = usePageContext();
    const { isDarkTheme } = useTheme();

    const handleClick = () => {
        setCurrentPage({ title: 'Anime Detail', page: AnimeDetail });
        setPageDetailData(media);
    };

    const handleTouchStart = () => {
        if (!timerId) {
            setTimeout(() => {
                setIsSelectMode(true);
            }, 600);
        }
    };

    const handleTouchEnd = () => {
        if (timerId) {
            clearTimeout(timerId);
        }
    };

    const relativeToUpdate = currentTime.subtract(updatedAt.hour(), 'hour');

    const additionalCoreStyle = isDarkTheme
        ? 'bg-default-dark'
        : 'bg-default-light';

    const selectModeStyle = isSelectMode ? 'outline outline-2' : '';

    return (
        <div
            className={classNames(
                coreStyle,
                additionalCoreStyle,
                selectModeStyle
            )}
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <img src={media.coverImage.medium} alt="" className={imageStyle} />
            <div className={detailStyle}>
                <Text size="xl" weight="bold">
                    {media.title.userPreferred}
                </Text>
                <div className={lineStyle}></div>
                <TextLabel icon={updateIcon} size="sm">
                    {relativeToUpdate.hour()} hour ago
                </TextLabel>
                <TextLabel icon={volumeIcon} size="sm">
                    {media.volumes || '-'}
                </TextLabel>
                <TextLabel icon={favouriteIcon} size="sm">
                    {media.favourites}
                </TextLabel>
            </div>
        </div>
    );
};

const coreStyle = 'flex flex-row p-2.5 w-auto rounded-md';

const lineStyle = 'w-full bg-black h-0.5';

const detailStyle = 'w-full pl-1.5 overflow-hidden flex flex-col gap-2';

const imageStyle = 'rounded';

export default Card;
