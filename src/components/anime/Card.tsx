import { css } from '@emotion/css';
import { ReactNode } from 'react';
import { Media } from '../../api/types';
import Text from '../UI/Text';
import FavouriteIcon from '../../assets/favourite.svg';
import VolumeIcon from '../../assets/volumes.svg';
import UpdateIcon from '../../assets/updatedAt.svg';
import useCurrentTime from '../../utils/useCurrentTime';
import dayjs from 'dayjs';
import classNames from 'classnames';

type TextLabelProps = {
    children: ReactNode;
    icon: any;
    className?: string;
};

const TextLabel = ({ children, icon, className }: TextLabelProps) => {
    return (
        <div className={classNames(textLabelStyle, className)}>
            <img src={icon} />
            <Text>{children}</Text>
        </div>
    );
};

const textLabelStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: auto;
`;

type CardProps = {
    media: Media;
};

const Card = ({ media }: CardProps) => {
    // const setCurrentPage = useSetAtom(currentPage);
    const updatedAt = dayjs.unix(media.updatedAt);
    const { currentTime } = useCurrentTime();

    const handleClick = () => {
        // setCurrentPage({
        //     title: 'Anime Detail',
        //     page: AnimeDetail,
        // });
    };

    const relativeToUpdate = currentTime.subtract(updatedAt.hour(), 'hour');

    return (
        <div className={coreStyle} onClick={handleClick}>
            <img src={media.coverImage.medium} alt="" className={imageStyle} />
            <div className={detailStyle}>
                <Text size="md" weight="bold">
                    {media.title.romaji}
                </Text>
                <div className={lineStyle}></div>
                <TextLabel icon={UpdateIcon}>
                    {relativeToUpdate.hour()} hour ago
                </TextLabel>
                <TextLabel icon={VolumeIcon}>{media.volumes}</TextLabel>
                <TextLabel icon={FavouriteIcon}>{media.favourites}</TextLabel>
            </div>
        </div>
    );
};

const coreStyle = css`
    display: flex;
    flex-direction: row;
    padding: 0.8rem;
    width: auto;
    background-color: lightgray;
    border-radius: 0.4rem;
`;

const lineStyle = css`
    width: 100%;
    background-color: black;
    height: 0.1px;
`;

const detailStyle = css`
    width: 100%;
    padding-left: 0.4rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const imageStyle = css`
    border-radius: 0.2rem;
`;

export default Card;
