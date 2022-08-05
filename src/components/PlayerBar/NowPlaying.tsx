import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import NowPlayingCover from '../NowPlaying/NowPlayingCover'
import { useNowPlayingContext } from '../../contexts/useNowPlaying'
import ControlButton from '../ControlButton/ControlButton'
import { Heart, PictureInPicture } from 'tabler-icons-react'
import { Text } from '@mantine/core'
import { useAppSelector } from '../../store/hooks'
import { selectNowPlayingMedia } from '../../store/features/nowPlaying.slice'

const NowPlaying = () => {
    const controls = useAnimation();
    const { isMinimized } = useNowPlayingContext();
    const media = useAppSelector(selectNowPlayingMedia);

    useEffect(() => {
        animationSequence();
    }, [isMinimized]);

    const animationSequence = async () => {
        if (!isMinimized) {
            await controls.start({ x: '-100%', transition: { duration: 0.1 } });
            return await controls.start({ display: 'none' });
        } else {
            await controls.start({ display: 'block' })
            return await controls.start({ x: 0 });
        }
    };

    return (
        <div className="flex flex-1 gap-2 items-center">
            <motion.div animate={controls} className="mr-[14px]">
                <NowPlayingCover key="smallNowPlaying" small />
            </motion.div>
            <div className="flex flex-col text-white mr-[14px]">
                <Text lineClamp={1} className="text-sm font-semibold hover:underline cursor-pointer max-w-[260px] line-clamp-1">{media?.title}</Text>
                <Text lineClamp={1} className="text-[0.6875em] font-light text-[#a7a7a7] hover:underline cursor-pointer">{media?.interpreter}</Text>
            </div>
            <div className="text-[#b3b3b3] flex items-center">
                <div className="w-8 h-8 flex justify-center items-center">
                    <ControlButton tooltipLabel="Save to Your Library" icon={<Heart size={20} />} />
                </div>
                <div className="w-8 h-8 flex justify-center items-center">
                    <ControlButton tooltipLabel="Miniplayer" icon={<PictureInPicture size={20} />} />
                </div>
            </div>
        </div>
    )
}

export default NowPlaying