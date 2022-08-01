import { useEffect, useState } from 'react'

const useFullscreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange)

        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const handleFullscreenChange = () => {
        if (!document.fullscreenElement) {
            setIsFullscreen(false);
        }
    }

    const toggleFullscreen = () => {
        if (isFullscreen) {
            document.exitFullscreen();

            setIsFullscreen(false);
        } else {
            document.documentElement.requestFullscreen();

            setIsFullscreen(true);
        }
    }

    return { toggleFullscreen, isFullscreen };
}

export default useFullscreen