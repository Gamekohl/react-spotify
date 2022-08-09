import { createStyles, Text } from '@mantine/core';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import GenreItem from '../../components/GenreItem/GenreItem';
import { genres } from '../../data/dummy';
import { Breakpoint, maxWidth, minWidth } from '../../utils/breakpoints';

const useStyles = createStyles({
    gridContainer: {
        '--column-width': '197px',
        '--column-count': 2,
        '--grid-gap': '24px',
        display: 'grid',
        overflow: 'hidden',
        gap: 'var(--grid-gap)',
        gridTemplateColumns: 'auto auto',
    },
    browseAllContainer: {
        '--column-width': '197px',
        '--column-count': 5,
        '--grid-gap': '24px',
        gridAutoRows: 'auto',
        gridTemplateRows: '1fr',
        overflowY: 'hidden',
        gap: 'var(--grid-gap)',
        display: 'grid',
        gridTemplateColumns: 'repeat(var(--column-count),minmax(0,1fr))',

        [`@media ${maxWidth(Breakpoint.sm)}`]: {
            '--column-count': 2,
        },
        [`@media ${minWidth(Breakpoint.sm)}`]: {
            '--column-count': 3,
        },
        [`@media ${minWidth(Breakpoint.md)}`]: {
            '--column-count': 3,
        },
        [`@media ${minWidth(Breakpoint.lg)}`]: {
            '--column-count': 4,
        },
        [`@media ${minWidth(Breakpoint.xl)}`]: {
            '--column-count': 5,
        },
        [`@media ${minWidth(Breakpoint.xxl)}`]: {
            '--column-count': 8,
        },
    }
});

const Search: NextPage = () => {
    const { classes } = useStyles();

    return (
        <>
            <Head>
                <title>Spotify - Search</title>
                <meta property="og:title" title="Spotify - Search" key="title" />
            </Head>
            <div>
                <div className='grid gap-8'>
                    <section>
                        <div className='flex mb-4 items-end justify-between'>
                            <Text lineClamp={1} size={24} color="white" weight={700}>Your top genres</Text>
                        </div>
                        <div className='relative'>
                            <div className="overflow-auto scroll-smooth">
                                <div className={classes.gridContainer}>
                                    <GenreItem bg="#7b7b7b" title='Metal' img='https://i.scdn.co/image/ab67706f0000000285704160b49125ac95099ec8' />
                                    <GenreItem bg='#e61e32' title='Rock' img='https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730' />
                                    <GenreItem bg='#ba5d07' title='Hip-Hop' img='https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c' />
                                    <GenreItem bg='#8d67ab' title='Pop' img='https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3' />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='flex mb-4 items-end justify-between'>
                            <Text lineClamp={1} size={24} color="white" weight={700}>Browse all</Text>
                        </div>
                        <div className={classes.browseAllContainer}>
                            {genres.map((item, key) => (
                                <GenreItem smaller key={key} {...item} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Search;