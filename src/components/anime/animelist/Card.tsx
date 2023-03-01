//@ts-ignore
import { ReactComponent as favouriteIcon } from '../../../assets/favourite.svg';
//@ts-ignore
import { ReactComponent as volumeIcon } from '../../../assets/volumes.svg';
//@ts-ignore
import { ReactComponent as updateIcon } from '../../../assets/updatedAt.svg';

import { useState } from 'react';
import { Media } from '../../../api/types';
import dayjs from 'dayjs';
import useCurrentTime from '../../../utils/useCurrentTime';
import { usePageContext } from '../../../context/PageContext';
import useTheme from '../../../hooks/useTheme';
import { useCollectionContext } from '../../../context/CollectionContext';
import AnimeDetail from '../animedetail/AnimeDetail';
import classNames from 'classnames';
import Text from '../../UI/Text';
import TextLabel from '../../UI/TextLabel';

type CardProps = {
    media: Media;
};

const Card = ({ media }: CardProps) => {
    const [timerId, setTimerId] = useState<number | NodeJS.Timer>();

    const updatedAt = dayjs.unix(media.updatedAt);
    const { currentTime } = useCurrentTime();
    const { setCurrentPage, setPageDetailData } = usePageContext();
    const { isDarkTheme } = useTheme();
    const {
        isCollectionMode,
        setIsCollectionMode,
        setTempCollection,
        tempCollection,
    } = useCollectionContext();
    const selected =
        tempCollection.length > 0
            ? tempCollection.find((item) => item.id === media?.id)?.id ===
              media?.id
            : false;

    const handleClick = () => {
        if (isCollectionMode && !selected) {
            setTempCollection((prev) => [...prev, media]);
        } else if (isCollectionMode && selected) {
            setTempCollection((prev) => {
                const newCollection = [...prev];
                const targetIndex = newCollection.findIndex(
                    (item) => item.id === media?.id
                );
                newCollection.splice(targetIndex, 1);
                return newCollection;
            });
        } else if (!isCollectionMode && !selected) {
            setCurrentPage({ title: 'Anime Detail', page: AnimeDetail });
            setPageDetailData(media);
        }
    };

    const handleTouchStart = () => {
        if (!timerId && !isCollectionMode) {
            clearTimeout(timerId);
            setTimerId(
                setTimeout(() => {
                    setIsCollectionMode(true);
                    setTempCollection((tempCollection) => [
                        ...tempCollection,
                        media,
                    ]);
                }, 600)
            );
        }
    };

    const handleTouchEnd = () => {
        if (timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    };

    const relativeToUpdate = currentTime.subtract(updatedAt.hour(), 'hour');

    const additionalCoreStyle = isDarkTheme
        ? 'bg-default-dark'
        : 'bg-default-light';

    const selectModeStyle = selected ? 'outline outline-2' : '';

    return (
        <div
            tabIndex={0}
            className={classNames(
                coreStyle,
                additionalCoreStyle,
                selectModeStyle
            )}
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <img
                src={media.coverImage.medium}
                alt=""
                className={imageStyle}
                width={100}
                height={142}
                loading="lazy"
            />
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

const coreStyle = 'flex flex-row p-2.5 w-auto rounded-md drop-shadow-md';

const lineStyle = 'w-full bg-black h-0.5';

const detailStyle = 'w-full pl-1.5 overflow-hidden flex flex-col gap-2';

const imageStyle = 'rounded';

export default Card;
