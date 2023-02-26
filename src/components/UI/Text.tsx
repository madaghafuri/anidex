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
    onClick = () => {},
}: TextProps) => {
    const coreStyle = classNames(
        'rounded-md',
        `${weightOption[weight]} ${sizeOption[size]} font-mono`,
        'select-none',
        `flex flex-row items-${align}`,
        'px-1 whitespace-normal'
    );

    const handleClick = () => {
        onClick();
    };

    return (
        <div className={classNames(coreStyle, className)} onClick={handleClick}>
            {children}
        </div>
    );
};

const sizeOption = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
};

const weightOption = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
};

export default Text;
