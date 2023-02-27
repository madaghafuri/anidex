import classNames from 'classnames';
import { ReactNode } from 'react';
import useTheme from '../../hooks/useTheme';
import Icon from './Icon';
import Text from './Text';
import { Size, Weight } from './types';

type TextLabelProps = {
    children: ReactNode;
    icon: any;
    className?: string;
    size?: Size;
    weight?: Weight;
    color?: string;
};

const TextLabel = ({
    children,
    icon,
    className,
    size,
    weight,
    color,
}: TextLabelProps) => {
    const thisStyle = classNames(
        'flex flex-row',
        'justify-start items-center',
        'w-auto px-1'
    );

    return (
        <div className={classNames(thisStyle, className)}>
            <Icon Image={icon} />
            <Text size={size} weight={weight}>
                {children}
            </Text>
        </div>
    );
};

export default TextLabel;
