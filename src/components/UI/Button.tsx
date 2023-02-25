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
};

const Button = ({
    icon,
    children,
    onClick,
    rounded = 'base',
    width,
    height,
    className,
}: ButtonProps) => {
    const { isDarkTheme, isLightTheme } = useTheme();

    const containerStyle = classNames(
        'flex flex-row items-center justify-center gap-1 w-auto p-1',
        roundedOption[rounded],
        { 'bg-default-dark': isDarkTheme },
        { 'bg-default-light': isLightTheme }
    );

    const handleClick = () => {
        onClick();
    };

    return (
        <div
            className={classNames(containerStyle, className)}
            onClick={handleClick}
        >
            <Icon Image={icon} width={width} height={height} />
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
