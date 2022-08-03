import { createStyles } from '@mantine/core'
import React from 'react'
import { PlayerPlay } from 'tabler-icons-react'
import { motion } from 'framer-motion'

const useStyles = createStyles(theme => ({
    wrapper: {
        backgroundColor: theme.colors.spotifyAccent[5],
        boxShadow: '0 8px 8px rgb(0 0 0 / 30%)'
    }
}));

const PlayButton = () => {
    const { classes, cx } = useStyles();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
            <button
                className={
                    cx(
                        classes.wrapper,
                        'w-12 h-12 rounded-full flex justify-center items-center text-black hover:scale-105 cursor-default'
                    )
                }>
                <PlayerPlay fill='#000' size={24} />
            </button>
        </motion.div>
    )
}

export default PlayButton