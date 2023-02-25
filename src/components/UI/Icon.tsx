import classNames from 'classnames';
import useTheme from '../../hooks/useTheme';

interface IconProps {
    Image: any;
    width?: string;
    height?: string;
    color?: string;
    alt?: string;
    onClick?: () => void;
    className?: string;
}
const Icon = ({
    Image,
    width,
    height,
    color,
    alt = 'icon',
    onClick = () => {},
    className,
}: IconProps) => {
    const { isDarkTheme } = useTheme();
    const additionalStyle = isDarkTheme
        ? 'stroke-default-light'
        : 'stroke-default-dark';

    return (
        <Image
            className={classNames(
                `transition-all duration-500 cursor-default ${className}`,
                additionalStyle
            )}
            style={{ color: color, width, height }}
            onClick={onClick}
            alt={alt}
        />
    );
};

export default Icon;
