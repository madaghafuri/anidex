import { useQuery } from '@apollo/client';
import { GET_PAGE } from '../../../api/apollo';
import { useEffect } from 'react';
import List from './List';
//@ts-ignore
import { ReactComponent as LoadingIcon } from '../../../assets/loading.svg';
import { PageResponse } from '../../../api/types';
import { usePageContext } from '../../../context/PageContext';
import { useCollectionContext } from '../../../context/CollectionContext';

const AnimeList = () => {
    const { data, loading } = useQuery<PageResponse>(GET_PAGE);
    const { currentPage } = usePageContext();
    const { tempCollection, setIsCollectionMode } = useCollectionContext();
    const isCurrentPage = currentPage.title === 'Anime List';

    useEffect(() => {
        if (tempCollection.length < 1) {
            setIsCollectionMode(false);
        }
    }, [tempCollection]);

    if (loading) return <LoadingIcon />;

    return (
        <div>
            <List mediaList={data.Page.media} />
        </div>
    );
};

export default AnimeList;
