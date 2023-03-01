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
import { Media } from '../../api/types';
import { useModal } from '../../context/ModalContext';
import DeleteCollection from '../modal/DeleteCollection';

type CardProps = {
    title: string;
    value?: Media[] | null;
};

function Card({ title, value }: CardProps) {
    const { isDarkTheme } = useTheme();
    const { showModal } = useModal();

    const themeStyle = isDarkTheme ? 'bg-default-dark' : 'bg-default-light';

    const handleDelete = () => {
        showModal(<DeleteCollection title={title} />);
        return;
    };

    return (
        <div className={classNames(containerStyle, themeStyle)}>
            <div className="flex flex-row justify-start items-center gap-3">
                <Button icon={CollectionIcon} />
                <Text weight="extrabold">{title}</Text>
            </div>
            <div className="flex flex-row gap-3 overflow-hidden p-3">
                {(value || []).map((item, index) => (
                    <img
                        key={index}
                        src={item.coverImage.medium}
                        className="rounded-md drop-shadow-lg"
                        loading="lazy"
                    />
                ))}
            </div>
            <div className="flex flex-row justify-end items-center gap-2">
                <Button icon={EditIcon} />
                <Button icon={TrashIcon} onClick={handleDelete} />
            </div>
        </div>
    );
}

const containerStyle = 'p-3 rounded-lg flex flex-col gap-2';

export default Card;
