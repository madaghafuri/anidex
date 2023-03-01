import {
    createContext,
    Fragment,
    ReactNode,
    useContext,
    useState,
} from 'react';
import { Transition, Dialog } from '@headlessui/react';
import Button from '../components/UI/Button';
//@ts-ignore
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import classNames from 'classnames';
import useTheme from '../hooks/useTheme';

type ModalState = {
    showModal: (component: ReactNode) => void;
    closeModal: () => void;

    component: ReactNode;
};

const ModalContext = createContext<ModalState | null>(null);

function ModalProvider({ children }: { children: ReactNode }) {
    const [component, setComponent] = useState<ReactNode | null>(null);
    const { isLightTheme } = useTheme();

    const themeStyle = isLightTheme ? 'bg-default-light' : 'bg-default-dark';

    const showModal = (component: ReactNode) => {
        setComponent(component);
    };

    const closeModal = () => {
        setComponent(null);
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal, component }}>
            <Transition as={Fragment} show={!!component} unmount={true}>
                <Dialog
                    as="div"
                    onClose={closeModal}
                    className={classNames(
                        'fixed inset-x-10 inset-y-40 z-40 overflow-auto rounded-lg',
                        themeStyle
                    )}
                >
                    <Transition.Child as={Fragment}>
                        <Dialog.Panel className="flex flex-col">
                            <Button
                                icon={CloseIcon}
                                onClick={closeModal}
                                className="self-end"
                            />
                            {component}
                        </Dialog.Panel>
                    </Transition.Child>
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
