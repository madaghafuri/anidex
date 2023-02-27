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
            <Transition
                as={Fragment}
                show={!!component}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog
                    as="div"
                    onClose={closeModal}
                    className={classNames(
                        'fixed left-20 right-20 top-48 bottom-48 inset-0 z-40 overflow-hidden rounded-lg',
                        themeStyle
                    )}
                >
                    <Dialog.Panel className="flex flex-col w-full overflow-hidden p-2">
                        <Button
                            icon={CloseIcon}
                            onClick={closeModal}
                            className="self-end"
                        />
                        {component}
                    </Dialog.Panel>
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
