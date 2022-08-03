import { createStyles, ScrollArea } from '@mantine/core';
import React, { FunctionComponent, ReactNode } from 'react'
import Header from '../components/Header/Header';
import { Navbar } from '../components/Navbar';
import { PlayerBar } from '../components/PlayerBar';

const useStyles = createStyles({
    wrapper: {
        gridTemplateAreas: '"nav-bar main-view buddy-feed" "now-playing-bar now-playing-bar now-playing-bar"',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: '1fr auto'
    },
    mainView: {
        gridArea: 'main-view',
        overflowY: 'hidden'
    }
})

const MainLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const { classes, cx } = useStyles();

    return (
        <>
            <div className={cx(classes.wrapper, 'grid h-full min-h-full relative w-full grid-rows-1')}>
                <Header />
                <Navbar />
                <ScrollArea>
                    <div className={classes.mainView}>
                        <main className='mt-16 inline-block w-full pt-6 px-8'>
                            {children}
                        </main>
                    </div>
                </ScrollArea>
                <PlayerBar />
            </div>
        </>
    )
}

export default MainLayout;