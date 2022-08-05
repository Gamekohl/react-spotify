import { createStyles } from '@mantine/core'
import React, { FunctionComponent } from 'react'
import { PlayerPlay, PlayerPause } from 'tabler-icons-react'
import { motion } from 'framer-motion'
import { MediaItem } from '../../models/MediaItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectPlaying, setNowPlayingMedia, setPlaying } from '../../store/features/nowPlaying.slice';

const useStyles = createStyles(theme => ({
    wrapper: {
        backgroundColor: theme.colors.spotifyAccent[5],
        boxShadow: '0 8px 8px rgb(0 0 0 / 30%)'
    }
}));

const PlayButton: FunctionComponent<MediaItem> = ({ id, title, interpreter, img }) => {
    const dispatch = useAppDispatch();
    const { id: playingId, playing } = useAppSelector(selectPlaying);
    const { classes, cx } = useStyles();

    const handleClick = () => {
        if (playingId === id) {
            dispatch(setPlaying(!playing))
        } else {
            dispatch(setNowPlayingMedia({ id, title, interpreter, img }));
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
            <button
                className={
                    cx(
                        classes.wrapper,
                        'w-12 h-12 rounded-full flex justify-center items-center text-black hover:scale-105 cursor-default'
                    )
                }
                onClick={handleClick}
            >
                {playing && id === playingId ? (
                    <PlayerPause fill='#000' size={24} />
                ) : (
                    <PlayerPlay fill='#000' size={24} />
                )}
            </button>
        </motion.div>
    )
}

export default PlayButton