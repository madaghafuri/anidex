import classNames from 'classnames';
import { ReactNode } from 'react';
import useTheme from '../../hooks/useTheme';
import { Rounded } from './types';

type TagProps = {
    color?: 'default' | 'primary';
    rounded?: Rounded;
    children?: ReactNode;
    index?: number;
};

const Tag = ({
    index,
    color = index === 0 ? 'primary' : 'default',
    rounded = 'sm',
    children,
}: TagProps) => {
    const { isDarkTheme } = useTheme();

    const colorOption = {
        default: isDarkTheme ? 'bg-default-dark' : 'bg-default-light',
        primary: 'bg-primary',
    };

    const coreStyle = classNames(
        'w-auto p-1',
        colorOption[color],
        `rounded-${rounded}`
    );

    return <div className={coreStyle}>{children}</div>;
};

export default Tag;
