import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';
import { Media } from '../api/types';

type CollectionState = {
    /**
     * Indicator when bulk adding to collection
     */
    isCollectionMode: boolean;
    setIsCollectionMode: Dispatch<SetStateAction<boolean>>;

    collection: Media[];
    setCollection: Dispatch<SetStateAction<Media[]>>;
};

const CollectionContext = createContext<CollectionState | null>(null);

const CollectionProvider = ({ children }: { children: ReactNode }) => {
    const [isCollectionMode, setIsCollectionMode] = useState<boolean>(false);
    const [collection, setCollection] = useState<Media[]>([]);

    return (
        <CollectionContext.Provider
            value={{
                isCollectionMode,
                collection,
                setCollection,
                setIsCollectionMode,
            }}
        >
            {children}
        </CollectionContext.Provider>
    );
};

export const useCollectionContext = () => {
    const context = useContext(CollectionContext);
    if (!context) {
        throw new Error(
            'useCollectionContext must be used within CollectionProvider'
        );
    }

    return context;
};

export default CollectionProvider;
