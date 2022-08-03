import React, { createElement, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowsShuffle, PlayerSkipBack, PlayerPlay, PlayerPause, PlayerSkipForward, Repeat } from 'tabler-icons-react';
import ControlButton from '../ControlButton/ControlButton';
import { CSlider } from '../UI';

const Player = () => {
    const mockDuration = 435;
    const [value, setValue] = useState(0);
    const [playing, setPlaying] = useState(false);

    const togglePlaying = () => setPlaying(!playing);

    const handleOnChange = (value: number) => {
        setValue((value / 100) * mockDuration);
    }

    const convertDuration = (duration: number) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);

        const padTo2Digits = (num: number) => {
            return num.toString().padStart(2, '0');
        }

        return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="player-controls" className="m-w-[722px] w-2/5 flex flex-col">
            <div className="mb-[12px]">
                <div className="flex items-center text-[#b3b3b3] w-full gap-4">
                    <div className="flex-1 flex gap-4 items-center justify-end">
                        <ControlButton tooltipLabel="Shuffle aktivieren" icon={<ArrowsShuffle size={20} />} />
                        <ControlButton icon={<PlayerSkipBack fill="currentColor" size={20} />} />
                    </div>
                    <div className="w-8 h-8 rounded-full text-black bg-white flex justify-center items-center hover:scale-110">
                        {createElement(!playing ? PlayerPlay : PlayerPause, {
                            fill: "currentColor",
                            onClick: togglePlaying,
                            size: 20
                        })}
                    </div>
                    <div className="flex-1 flex gap-4 items-center justify-start">
                        <ControlButton icon={<PlayerSkipForward fill="currentColor" size={20} />} />
                        <ControlButton tooltipLabel="Wiederholen aktivieren" icon={<Repeat size={20} />} />
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-2 text-[#a7a7a7] justify-between items-center">
                <span className="text-[0.6875rem]">{convertDuration(value)}</span>
                <CSlider onChange={handleOnChange} step={0.1} className="w-full" size={5} label={null} />
                <span className="text-[0.6875rem]">{convertDuration(mockDuration)}</span>
            </div>
        </motion.div>
    )
}

export default Player