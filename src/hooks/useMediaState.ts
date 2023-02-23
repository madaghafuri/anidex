import { useEffect, useState } from 'react';

const mediaQuery = 'screen and (max-width: 768px)';

const useMediaState = () => {
    const mq = window.matchMedia(mediaQuery);
    const [isMobile, setIsMobile] = useState<boolean>(mq.matches);

    useEffect(() => {
        const handleMediaChange = (
            media: MediaQueryList,
            event: MediaQueryListEvent
        ) => {
            setIsMobile(media.matches);
            console.log(media.matches);
        };

        // @ts-ignore
        mq.addEventListener('change', handleMediaChange);

        return () => {
            // @ts-ignore
            mq.removeEventListener('change', handleMediaChange);
        };
    });

    return isMobile;
};

export default useMediaState;
