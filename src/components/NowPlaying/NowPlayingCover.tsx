import { createStyles } from '@mantine/core';
import React, { FunctionComponent } from 'react'
import { useNowPlayingContext } from '../../contexts/useNowPlaying';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import { useAppSelector } from '../../store/hooks';
import { selectNowPlayingMedia } from '../../store/features/nowPlaying.slice';
import Image from 'next/image';

const useStyles = createStyles({
    wrapper: {
        '&:hover': {
            '& > div': {
                display: 'flex'
            }
        }
    },
})

type NowPlayingCoverProps = {
    small?: boolean;
}

const NowPlayingCover: FunctionComponent<NowPlayingCoverProps> = (props) => {
    const { small = false } = props;
    const { classes, cx } = useStyles();
    const { setIsMinimized, isMinimized } = useNowPlayingContext();
    const media = useAppSelector(selectNowPlayingMedia);

    const toggleMinimized = () => {
        setIsMinimized(!isMinimized);
    }

    return (
        <div className={cx(classes.wrapper, { 'w-14 h-14': small }, 'cursor-pointer relative pb-[100%]')}>
            <div onClick={toggleMinimized} className="w-auto h-auto hidden z-10 bg-black absolute top-[5px] right-[5px] hover:scale-105 justify-center items-center bg-opacity-70 rounded-full">
                {!small ? (
                    <ChevronDown size={24} />
                ) : (
                    <ChevronUp size={24} />
                )}
            </div>
            <Image alt="NowPlaying" className="w-full h-full object-cover left-0 top-0 absolute" priority src={media.img} layout='fill' />
        </div>
    )
}

export default NowPlayingCover;