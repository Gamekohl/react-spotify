import { createStyles } from '@mantine/core';
import React, { FunctionComponent, ReactNode } from 'react'
import { Navbar } from '../components/Navbar';
import { PlayerBar } from '../components/PlayerBar';
import UserProfile from '../components/UserProfile/UserProfile';

const useStyles = createStyles({
    wrapper: {
        gridTemplateAreas: '"nav-bar main-view buddy-feed" "now-playing-bar now-playing-bar now-playing-bar"',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: '1fr auto'
    },
    mainView: {
        gridArea: 'main-view',
        overflowY: 'auto'
    }
})

const MainLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.wrapper, 'grid h-full min-h-full relative w-full grid-rows-1')}>
            <UserProfile />
            <Navbar />
            <div className={classes.mainView}>
                {children}
            </div>
            <PlayerBar />
        </div>
    )
}

export default MainLayout;