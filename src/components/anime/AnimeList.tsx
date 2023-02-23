import { useQuery } from '@apollo/client';
import { css, keyframes } from '@emotion/css';
import { GET_PAGE } from '../../api/apollo';
import { PageResponse } from '../../api/types';
import List from './List';
import LoadingIcon from '../../assets/loading.svg';

const AnimeList = () => {
    const { data, loading } = useQuery<PageResponse>(GET_PAGE);

    if (loading)
        return (
            <img
                src={LoadingIcon}
                className={css`
                    animation: ${loadingFrame} 1s ease infinite;
                `}
            />
        );

    return (
        <div>
            <List mediaList={data.Page.media} />
        </div>
    );
};

const loadingFrame = keyframes`
    from 0% {
        transform: rotate(0deg);
        stroke-dashoffset: 50;
    }

    50% {
        stroke-dashoffset: 0;
    }

    100% {
        transform: rotate(360deg)
        stroke-dashoffset: -50;
    }
`;

export default AnimeList;
