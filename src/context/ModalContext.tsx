import {
    createContext,
    Fragment,
    ReactNode,
    useContext,
    useState,
} from 'react';
import { Transition, Dialog } from '@headlessui/react';

type ModalState = {
    showModal: (component: ReactNode) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalState | null>(null);

function ModalProvider({ children }: { children: ReactNode }) {
    const [component, setComponent] = useState<ReactNode | null>(null);

    const showModal = (component: ReactNode) => {
        setComponent(component);
    };

    const closeModal = () => {
        setComponent(null);
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            <Transition as={Fragment} appear show={!!component}>
                <Dialog as="div" onClose={closeModal}>
                    {component}
                </Dialog>
            </Transition>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (!context)
        throw new Error('useModal must be used within a ModalProvider');

    return context;
}

export default ModalProvider;
