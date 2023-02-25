import classNames from 'classnames';
import { ReactNode } from 'react';
import { Size, Weight } from './types';

type TextProps = {
    className?: string;
    weight?: Weight;
    size?: Size;
    children: ReactNode;
    onClick?: () => void;
    align?: 'start' | 'center' | 'end';
    truncate?: boolean;
};

const Text = ({
    className,
    weight,
    size = 'base',
    children,
    align = 'center',
}: TextProps) => {
    const coreStyle = classNames(
        'rounded-md',
        `font-${weight} ${sizeOption[size]} font-mono`,
        'select-none',
        `flex flex-row items-${align}`,
        'px-1 whitespace-normal'
    );

    return <div className={classNames(coreStyle, className)}>{children}</div>;
};

const sizeOption = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
};

export default Text;
