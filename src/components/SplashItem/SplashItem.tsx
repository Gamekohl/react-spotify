import { createStyles, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import React, { FunctionComponent, useEffect, useState } from 'react'
import PlayButton from '../PlayButton/PlayButton';
import FastAverageColor from 'fast-average-color';
import { MediaItem } from '../../models/MediaItem';
import { useAppSelector } from '../../store/hooks';
import { selectPlaying } from '../../store/features/nowPlaying.slice';
const fac = new FastAverageColor();

type SplashItemProps = MediaItem & {
    emitAvgColor: (color: string) => void;
}

const useStyles = createStyles({
    wrapper: {
        backgroundColor: 'hsla(0,0%,100%,.1)',
        transition: 'background-color .3s ease',

        '&:hover': {
            backgroundColor: 'hsla(0,0%,100%,.2)',
        }
    },
    imgWrapper: {
        minWidth: '80px',
        minHeight: '80px',
        boxShadow: '0 8px 24px rgb(0 0 0 / 50%)'
    }
});

const SplashItem: FunctionComponent<SplashItemProps> = ({ emitAvgColor, ...item }) => {
    const { classes, cx } = useStyles();
    const { hovered, ref } = useHover();
    const { playing, id: playingId } = useAppSelector(selectPlaying);
    const [avgColor, setAvgColor] = useState('');

    useEffect(() => {
        fac.getColorAsync(item.img).then(color => {
            setAvgColor(color.rgba);
        });
    });

    useEffect(() => {
        emitAvgColor(avgColor);
    }, [hovered]);

    const isPlaying = playing && playingId === item.id;

    return (
        <div ref={ref} className={cx(classes.wrapper, 'rounded-md overflow-hidden relative h-20 flex cursor-pointer')}>
            <div className={classes.imgWrapper}>
                <Image src={item.img} width="80" height="80" alt={item.title} />
            </div>
            <div className='flex flex-grow text-white justify-between items-center px-4'>
                <Text lineClamp={2} size="md" weight={700}>{item.title}</Text>
                {(hovered || isPlaying) && <PlayButton {...item} />}
            </div>
        </div>
    )
}

export default SplashItem