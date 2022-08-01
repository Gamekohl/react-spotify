import { createStyles } from '@mantine/core'
import React from 'react'
import Controls from './Controls';
import NowPlaying from './NowPlaying';
import Player from './Player';

const useStyles = createStyles({
    wrapper: {
        gridArea: 'now-playing-bar',
        backgroundColor: '#181818',
        width: '100%',
        zIndex: 4
    },
    bar: {
        minWidth: '620px',
        height: '91px',
        borderTop: '1px solid #282828'
    }
})

const PlayerBar = () => {
    const { classes, cx } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={cx(classes.bar, 'px-4 flex items-center gap-8 justify-between')}>
                <NowPlaying />
                <Player />
                <Controls />
            </div>
        </div>
    )
}

export default PlayerBar