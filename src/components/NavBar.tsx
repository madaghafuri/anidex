import { css } from '@emotion/css';
import classNames from 'classnames';
import useMediaState from '../hooks/useMediaState';
import Text from './UI/Text';

const NavBar = () => {
    const isMobile = useMediaState();
    const coreStyle = css`
        background-color: white;
        visibility: visible;
        display: flexbox;
        ${isMobile
            ? 'width: 50vw; flex-direction: row'
            : 'width: 15vw; flex-direction: column'}
        gap: 10px;
        justify-content: start;
        align-items: center;
        padding: 5px;
        alignself: start;
        position: fixed;
        z-index: 1;
    `;

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
