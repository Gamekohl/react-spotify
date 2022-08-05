import { Microphone2, PlaylistAdd, DeviceDesktop, ArrowsDiagonal, ArrowsDiagonalMinimize2, Volume, Volume2, Volume3 } from 'tabler-icons-react';
import React, { useState } from 'react'
import useFullscreen from '../../hooks/useFullscreen';
import ControlButton from '../ControlButton/ControlButton';
import CSlider from '../UI/CSlider';

const Controls = () => {
    const [value, setValue] = useState(100);
    const { toggleFullscreen, isFullscreen } = useFullscreen();

    return (
        <div className="flex items-center flex-1 justify-end gap-4 text-[#a7a7a7]">
            <ControlButton tooltipLabel="Lyrics" icon={<Microphone2 size={18} />} />
            <ControlButton tooltipLabel="Queue" icon={<PlaylistAdd size={20} />} />
            <ControlButton tooltipLabel="Connect to a device" icon={<DeviceDesktop size={20} />} />
            <div className="flex items-center gap-2">
                {value >= 50 ? <Volume size={20} /> : value > 0 ? <Volume2 size={20} /> : <Volume3 size={20} />}
                <CSlider
                    value={value}
                    onChange={setValue}
                    className="w-[93px]"
                    thumbSize={12}
                    size={4}
                    label={null}
                />
            </div>
            {isFullscreen ? (
                <ControlButton icon={<ArrowsDiagonalMinimize2 onClick={toggleFullscreen} size={20} />} />
            ) : (
                <ControlButton icon={<ArrowsDiagonal onClick={toggleFullscreen} size={20} />} />
            )}
        </div>
    )
}

export default Controls