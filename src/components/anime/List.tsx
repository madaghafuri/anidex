import { css } from '@emotion/css';
import { Media } from '../../api/types';
import Card from './Card';

type ListProps = {
    mediaList: Media[];
};

const List = ({ mediaList }: ListProps) => {
    return (
        <div className={coreStyle}>
            {mediaList.map((media, index) => (
                <Card key={index} media={media} />
            ))}
        </div>
    );
};

const coreStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '0.8rem',
});

export default List;
