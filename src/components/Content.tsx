import { css } from '@emotion/css';
import { useQuery } from '@apollo/client';
import { GET_PAGE } from '../api/apollo';
import Text from './UI/Text';
import { PageResponse } from '../api/types';
import List from './anime/List';
import AnimeList from './anime/AnimeList';
import CollectionList from './collection/CollectionList';
import AnimeDetail from './anime/AnimeDetail';
import CollectionDetail from './collection/CollectionDetail';

const pages = [
    { title: 'Anime List', page: AnimeList },
    { title: 'Collection List', page: CollectionList },
    { title: 'Anime Detail', page: AnimeDetail },
    { title: 'Collection Detail', page: CollectionDetail },
];

const Content = () => {
    return (
        <div className={coreStyle}>
            {pages.map(({ page: Page }, index) => (
                <Page key={index} />
            ))}
        </div>
    );
};

const coreStyle = css`
    width: 100vw;
    border-radius: 0.4rem;
    position: relative;
`;

export default Content;
