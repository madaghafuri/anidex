import { useQuery } from '@apollo/client';
import { GET_PAGE } from '../../api/apollo';
import { PageResponse } from '../../api/types';
import List from './List';
import LoadingIcon from '../../assets/loading.svg';
import { usePageContext } from '../../context/PageContext';
import ScrollBar from '../UI/Scrollbar';
import { useRef, useState } from 'react';

const AnimeList = () => {
    const { data, loading } = useQuery<PageResponse>(GET_PAGE);
    const { currentPage } = usePageContext();
    const isCurrentPage = currentPage.title === 'Anime List';

    if (loading) return <img src={LoadingIcon} />;

    return (
        <div hidden={!isCurrentPage} className="w-screen h-screen">
            <List mediaList={data.Page.media} />
        </div>
    );
};

export default AnimeList;
