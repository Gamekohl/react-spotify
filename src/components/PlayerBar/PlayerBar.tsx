import { createStyles } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import React from 'react'
import { Breakpoint, maxWidth } from '../../utils/breakpoints';
import Controls from './Controls';
import NowPlaying from './NowPlaying';
const Player = dynamic(() => import('./Player'), {
    ssr: false
});

const useStyles = createStyles((theme, { sm }: { sm: boolean }) => ({
    wrapper: {
        gridArea: 'now-playing-bar',
        backgroundColor: '#181818',
        width: '100%',
        zIndex: 4
    },
    bar: {
        minWidth: sm ? '100%' : '620px',
        height: '91px',
        borderTop: '1px solid #282828'
    }
}));

const PlayerBar = () => {
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));
    const { classes, cx } = useStyles({ sm });

    return (
        <div className={classes.wrapper}>
            <div className={cx(
                classes.bar,
                !sm ? 'justify-between' : 'justify-center ',
                'px-4 flex items-center gap-8'
            )}>
                {!sm && <NowPlaying />}
                <Player />
                {!sm && <Controls />}
            </div>
        </div>
    )
}

export default PlayerBar