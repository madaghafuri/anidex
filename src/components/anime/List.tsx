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
const coreStyle = 'flex flex-col gap-4 p-3';

export default List;
