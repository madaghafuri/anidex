import { CSSProperties, FC, MutableRefObject, ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface ScrollBarProps {
    height?: string;
    autoHide?: boolean;
    className?: string;
    styles?: CSSProperties;
    scrollRef?: MutableRefObject<any>;
    children?: ReactNode;
    onScroll?: () => void;
}

const ScrollBar: FC<ScrollBarProps> = ({
    children,
    height = '100%',
    autoHide = false,
    className,
    styles,
    scrollRef,
    onScroll = () => {},
}) => {
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: '#8A898B',
            opacity: '0.7',
            borderRadius: '5px',
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    const renderTrack = ({ style, ...props }) => {
        const trackStyle = {
            right: '1.5px',
            bottom: '2px',
            top: '2px',
            borderRadius: '3px',
        };
        return <div style={{ ...style, ...trackStyle }} {...props} />;
    };

    const renderView = ({ style, ...props }) => {
        const viewStyle = {
            marginRight: style.marginRight - 1,
            marginBottom: style.marginBottom - 1,
        };
        return <div style={{ ...style, ...viewStyle }} {...props} />;
    };

    const handleScroll = () => {
        onScroll();
    };

    return (
        <Scrollbars
            onScroll={handleScroll}
            ref={scrollRef}
            universal
            renderThumbVertical={renderThumb}
            renderThumbHorizontal={renderThumb}
            renderTrackVertical={renderTrack}
            renderView={renderView}
            autoHide={autoHide}
            style={{ ...styles, height: height }}
            className={className}
        >
            {children}
        </Scrollbars>
    );
};

export default ScrollBar;
