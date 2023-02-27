import { Collection } from '../../context/CollectionContext';
import Button from '../UI/Button';
import Text from '../UI/Text';
//@ts-ignore
import { ReactComponent as CollectionIcon } from '../../assets/collection.svg';
//@ts-ignore
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
//@ts-ignore
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import classNames from 'classnames';
import useTheme from '../../hooks/useTheme';

type CardProps = {
    item: Collection;
};

function Card({ item }: CardProps) {
    const { isDarkTheme } = useTheme();

    const themeStyle = isDarkTheme ? 'bg-default-dark' : 'bg-default-light';

    return (
        <div className={classNames(containerStyle, themeStyle)}>
            <div className="flex flex-row justify-start items-center gap-3">
                <Button icon={CollectionIcon} />
                <Text weight="extrabold">{item.name}</Text>
            </div>
            <div className="flex flex-row gap-3 overflow-hidden p-3">
                {(item.collection || []).map((item, index) => (
                    <img
                        key={index}
                        src={item.coverImage.medium}
                        className="rounded-md drop-shadow-lg"
                    />
                ))}
            </div>
            <div className="flex flex-row justify-end items-center gap-2">
                <Button icon={EditIcon} />
                <Button icon={TrashIcon} />
            </div>
        </div>
    );
}

const containerStyle = 'p-3 rounded-md flex flex-col gap-2';

export default Card;
