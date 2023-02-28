import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';
import { Media } from '../api/types';

export type Collection = {
    name: string;
    collection: Media[];
};

type CollectionState = {
    /**
     * Indicator when bulk adding to collection
     */
    isCollectionMode: boolean;
    setIsCollectionMode: Dispatch<SetStateAction<boolean>>;
    /**
     * Collection for local storage. It is persistent
     */
    collection: Media[];
    setCollection: Dispatch<SetStateAction<Media[]>>;

    tempCollection: Media[];
    setTempCollection: Dispatch<SetStateAction<Media[]>>;
};

const defaultCollState: CollectionState = {
    isCollectionMode: false,
    setIsCollectionMode: () => {},
    collection: [],
    setCollection: () => {},
    tempCollection: [],
    setTempCollection: () => {},
};

const CollectionContext = createContext<CollectionState | null>(
    defaultCollState
);

const CollectionProvider = ({ children }: { children: ReactNode }) => {
    const [isCollectionMode, setIsCollectionMode] = useState<boolean>(false);
    const [collection, setCollection] = useState<Media[]>([]);
    const [tempCollection, setTempCollection] = useState<Media[]>([]);

    return (
        <CollectionContext.Provider
            value={{
                isCollectionMode,
                collection,
                tempCollection,
                setCollection,
                setIsCollectionMode,
                setTempCollection,
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
