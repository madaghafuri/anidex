import { css } from '@emotion/css';
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
};

const Text = ({
    className,
    weight,
    size,
    children,
    onClick,
    align,
}: TextProps) => {
    const coreStyle = css({
        width: '100%',
        borderRadius: '10px',
        fontWeight: weightOption[weight],
        fontSize: sizeOption[size],
        fontFamily: 'monospace',
        userSelect: 'none',
        display: 'flex',
        alignItems: align,
        padding: '0 1rem 0 1rem',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    });
    const handleClick = () => {
        onClick();
    };

    return (
        <div className={classNames(coreStyle, className)} onClick={handleClick}>
            {children}
        </div>
    );
};

const weightOption = {
    bold: 'bold',
    bolder: 'bolder',
    normal: 'normal',
    lighter: 'lighter',
};

const sizeOption = {
    xs: '0.6rem',
    sm: '0.8rem',
    base: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
};

export default Text;
