import { useEffect, useState } from 'react';

const mediaQuery = 'screen and (max-width: 768px)';
const breakpoints = {
    xs: 320,
    sm: 481,
    md: 721,
    lg: 1025,
    xl: 1201,
    xxl: 1441,
    xxxl: 1601,
};

function useWindowDimension() {
    const [windowDimension, setWindowDimension] = useState<{
        width: number | undefined;
        height: number | undefined;
    }>({ width: undefined, height: undefined });

    useEffect(() => {
        function handleResize() {
            setWindowDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        if (typeof window !== undefined) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowDimension;
}

function useMediaState() {
    const [breakpoint, setBreakpoint] = useState({
        xsAndDown: false,
        xsAndUp: false,
        smAndDown: false,
        smAndUp: false,
        mdAndDown: false,
        mdAndUp: false,
        lgAndDown: false,
        lgAndUp: false,
        xlAndDown: false,
        xlAndUp: false,
        xxlAndDown: false,
        xxlAndUp: false,
    });
    const { width = 0 } = useWindowDimension();

    useEffect(() => {
        setBreakpoint((breakpoint) => ({
            ...breakpoint,
            xsAndDown: width < breakpoints.sm,
            xsAndUp: width >= breakpoints.xs,
            smAndDown: width < breakpoints.md,
            smAndUp: width >= breakpoints.sm,
            mdAndDown: width < breakpoints.lg,
            mdAndUp: width >= breakpoints.md,
            lgAndDown: width < breakpoints.xl,
            lgAndUp: width >= breakpoints.lg,
            xlAndDown: width < breakpoints.xxl,
            xlAndUp: width >= breakpoints.xl,
            xxlAndDown: width < breakpoints.xxxl,
            xxlAndUp: width >= breakpoints.xxl,
        }));
    }, [width]);

    return breakpoint;
}

export default useMediaState;
