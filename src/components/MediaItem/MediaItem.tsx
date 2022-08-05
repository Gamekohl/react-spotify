import { createStyles, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import PlayButton from '../PlayButton/PlayButton';
import { motion } from 'framer-motion';
import { MediaItem } from '../../models/MediaItem';
import { useAppSelector } from '../../store/hooks';
import { selectPlaying } from '../../store/features/nowPlaying.slice';

type MediaItemProps = MediaItem;

const useStyles = createStyles({
    wrapper: {
        transition: 'background-color .3s ease'
    },
    imgWrapper: {
        backgroundColor: '#333',
        boxShadow: '0 8px 24px rgb(0 0 0 / 50%)',
        position: 'relative',
        paddingBottom: '100%',
        width: '100%',
        borderRadius: '6px'
    }
});

const MediaItem: FunctionComponent<MediaItemProps> = (item) => {
    const { playing, id: playingId } = useAppSelector(selectPlaying);
    const { hovered, ref } = useHover();
    const { classes, cx } = useStyles();

    const isPlaying = playing && playingId === item.id;

    return (
        <div
            ref={ref}
            className={cx(classes.wrapper, 'bg-[#181818] rounded-md flex-grow relative p-4 w-full cursor-pointer hover:bg-[#282828]')}>
            <div className='h-full'>
                <div className='mb-4 relative'>
                    <div className={classes.imgWrapper}>
                        <Image alt={item.title} className='rounded-md' src={item.img} layout='fill' />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={hovered || isPlaying ? { opacity: 1, y: 0, transition: { duration: 0.3 } } : { opacity: 0, y: 5, transition: { duration: 0.3 } }}
                        className='absolute bottom-2 right-2'
                    >
                        <PlayButton {...item} />
                    </motion.div>
                </div>
                <div className='min-h-[62px]'>
                    <Text title={item.title} lineClamp={1} className='pb-1' size="md" weight={700} color="white">{item.title}</Text>
                    <Text title={item.interpreter} lineClamp={1} size="sm" color="#b3b3b3">{item.interpreter}</Text>
                </div>
            </div>
        </div>
    )
}

export default MediaItem