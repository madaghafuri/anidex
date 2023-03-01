import classNames from 'classnames';
import { useState } from 'react';
import Button from './UI/Button';
//@ts-ignore
import { ReactComponent as NextIcon } from '../assets/next.svg';
//@ts-ignore
import { ReactComponent as PrevIcon } from '../assets/previous.svg';
import Text from './UI/Text';

type PaginationProps = {
    onPrev: (page: number) => void;
    onNext: (page: number) => void;
    className?: string;
    lastPage: number;
    currentPage: number;
};

function Pagination({
    onNext,
    onPrev,
    className,
    lastPage,
    currentPage,
}: PaginationProps) {
    const [page, setPage] = useState<number>(currentPage || 1);

    function handlePrev() {
        setPage(page - 1);
        onPrev(page - 1);
    }

    function handleNext() {
        setPage(page + 1);
        onNext(page + 1);
    }

    return (
        <div className={classNames(containerStyle, className)}>
            <Button onClick={handlePrev} enable={page !== 1} icon={PrevIcon} />
            <Text size="xl">{currentPage}</Text>
            <Text size="xl">...</Text>
            <Text size="xl">{lastPage}</Text>
            <Button
                onClick={handleNext}
                icon={NextIcon}
                enable={page !== lastPage}
            />
        </div>
    );
}

const containerStyle = 'flex flex-row justify-center items-center gap-4 p-2';

export default Pagination;
