import classNames from 'classnames';
import { ReactNode } from 'react';
import useTheme from '../../hooks/useTheme';
import Icon from './Icon';
import { Rounded } from './types';

type ButtonProps = {
    icon?: any;
    children?: ReactNode;
    onClick?: () => void;
    color?: 'default' | 'primary';
    rounded?: Rounded;
    width?: string;
    height?: string;
    className?: string;
    enable?: boolean;
};

const Button = ({
    icon,
    children,
    onClick,
    rounded = 'base',
    width,
    height,
    className,
    enable = true,
}: ButtonProps) => {
    const { isDarkTheme, isLightTheme } = useTheme();

    const containerStyle = classNames(
        'flex flex-row items-center justify-center gap-1 w-auto p-1',
        roundedOption[rounded],
        { 'bg-default-dark': isDarkTheme },
        { 'bg-default-light': isLightTheme },
        { 'opacity-50': !enable }
    );

    const handleClick = () => {
        if (!enable) return;
        onClick?.();
    };

    return (
        <div
            className={classNames(containerStyle, className)}
            onClick={handleClick}
        >
            {icon ? <Icon Image={icon} width={width} height={height} /> : null}
            {children}
        </div>
    );
};

const roundedOption = {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    base: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
};

export default Button;
