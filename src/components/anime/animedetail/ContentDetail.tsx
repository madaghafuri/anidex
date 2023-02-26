import { Media } from '../../../api/types';
import Tag from '../../UI/Tag';
import Text from '../../UI/Text';

type ContentDetailProps = {
    media?: Media;
};

const ContentDetail = ({ media }: ContentDetailProps) => {
    return (
        <div className={containerStyle}>
            {media?.genres.map((genre, index) => {
                return (
                    <Tag key={index} index={index} rounded="md">
                        <Text weight="bold" size="sm">
                            {genre}
                        </Text>
                    </Tag>
                );
            })}
        </div>
    );
};

const containerStyle = 'flex gap-2 flex-wrap';

export default ContentDetail;
