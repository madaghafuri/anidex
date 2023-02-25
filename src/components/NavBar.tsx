import classNames from 'classnames';
import useMediaState from '../hooks/useMediaState';
import useTheme from '../hooks/useTheme';
import Text from './UI/Text';

const NavBar = () => {
    const isMobile = useMediaState();
    const { isLightTheme } = useTheme();
    const coreStyle = '';
    return (
        <div className={classNames(coreStyle)}>
            <Text size="md" weight="bold" align="start">
                Anime List
            </Text>
            <Text size="md" weight="bold" align="start">
                Collection List
            </Text>
        </div>
    );
};

export default NavBar;
