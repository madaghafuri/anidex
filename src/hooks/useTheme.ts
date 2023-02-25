import { useEffect, useState } from 'react';

const themeQuery = '(prefers-color-scheme: dark)';

const useTheme = () => {
    const tq = window.matchMedia(themeQuery);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(tq.matches);
    const isLightTheme = !isDarkTheme;

    useEffect(() => {
        const handleThemeListener = (media: MediaQueryList) => {
            setIsDarkTheme(media.matches);
            console.log(media.matches);
        };
        //@ts-ignore
        tq.addEventListener('change', handleThemeListener);
        return () => {
            //@ts-ignore
            tq.removeEventListener('change', handleThemeListener);
        };
    }, []);

    return { isDarkTheme, isLightTheme };
};

export default useTheme;
