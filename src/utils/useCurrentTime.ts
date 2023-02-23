import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(dayjs());
    const currentTimeHMS = currentTime.format('HH:mm:ss');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return { currentTimeHMS, currentTime };
};

export default useCurrentTime;
