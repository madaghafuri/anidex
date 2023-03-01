import { useEffect } from 'react';
import List from './List';
import { Media } from '../../../api/types';
import { useCollectionContext } from '../../../context/CollectionContext';

export type AnimeListProps = {
    media: Media[];
};

const AnimeList = ({ media }: AnimeListProps) => {
    const { tempCollection, setIsCollectionMode } = useCollectionContext();

    useEffect(() => {
        if (tempCollection.length < 1) {
            setIsCollectionMode(false);
        }
    }, [tempCollection]);

    return (
        <div>
            <List mediaList={media} />
        </div>
    );
};

export default AnimeList;
