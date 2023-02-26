import { Transition } from '@headlessui/react';
import { ReactNode } from 'react';
import { Page } from '../atom/atom';
import { usePageContext } from '../context/PageContext';

type PageTransitionProps = {
    page: Page;
    children: ReactNode;
};

const PageTransition = ({ page, children }: PageTransitionProps) => {
    const { currentPage } = usePageContext();
    const visible = currentPage.title === page;

    return (
        <Transition
            unmount={true}
            appear
            show={visible}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {children}
        </Transition>
    );
};

export default PageTransition;
