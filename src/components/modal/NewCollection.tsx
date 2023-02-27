import classNames from 'classnames';
import useTheme from '../../hooks/useTheme';
import Text from '../UI/Text';

function NewCollection() {
    const { isDarkTheme } = useTheme();

    const themeStyle = isDarkTheme ? 'bg-default-dark' : 'bg-default-light';

    return (
        <div className={classNames(containerStyle, themeStyle)}>
            <Text size="xl">Add Collection</Text>
            <Text size="md">Name</Text>
            <input type="text" />
        </div>
    );
}

const containerStyle = 'flex flex-col gap-2 p-2';

export default NewCollection;
