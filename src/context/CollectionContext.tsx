import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useReducer,
    useState,
} from 'react';
import { Media } from '../api/types';
import { getStorage, setStorage } from '../utils/storage';

export type Collection = {
    [key: string]: Media[];
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

    tempCollection: Media[];
    setTempCollection: Dispatch<SetStateAction<Media[]>>;

    addNewCollection: (collectionName: string) => void;
    deleteCollection: (collectionName: string) => void;
    addToCollection: (addedTo: string[], collObj: object) => void;
};

const defaultCollState: CollectionState = {
    isCollectionMode: false,
    setIsCollectionMode: () => {},
    tempCollection: [],
    setTempCollection: () => {},
    addNewCollection: () => {},
    deleteCollection: () => {},
    addToCollection: () => {},
};

const CollectionContext = createContext<CollectionState | null>(
    defaultCollState
);

const CollectionProvider = ({ children }: { children: ReactNode }) => {
    const [isCollectionMode, setIsCollectionMode] = useState<boolean>(false);
    const [tempCollection, setTempCollection] = useState<Media[]>([]);

    const addNewCollection = (collectionName: string) => {
        const collection = JSON.parse(getStorage('collection') || '{}');
        setStorage(
            'collection',
            JSON.stringify({ ...collection, [collectionName]: [] })
        );
        setTempCollection([]);
    };

    const deleteCollection = (collectionName: string) => {
        const collection = JSON.parse(getStorage('collection') || '{}');
        const newColl = { ...collection };
        delete newColl[collectionName];
        setStorage('collection', JSON.stringify(newColl));
    };

    const addToCollection = (addedTo: string[], collObj: object[]) => {
        const newColls = { ...collObj };
        addedTo.forEach((item) => {
            newColls[item] = [...newColls[item], ...tempCollection];
        });
        setStorage('collection', JSON.stringify(newColls));
        setTempCollection([]);
    };

    return (
        <CollectionContext.Provider
            value={{
                isCollectionMode,
                tempCollection,
                setIsCollectionMode,
                setTempCollection,
                addNewCollection,
                deleteCollection,
                addToCollection,
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
