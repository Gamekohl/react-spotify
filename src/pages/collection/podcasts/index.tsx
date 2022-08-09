import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head'
import React from 'react'
import CollectionMenu from '../../../components/Header/CollectionMenu/CollectionMenu';
import { Breakpoint, maxWidth } from '../../../utils/breakpoints';

const Podcasts = () => {
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));

    return (
        <>
            <Head>
                <title>Spotify - Library</title>
                <meta property="og:title" title="Spotify - Library" key="title" />
            </Head>
            {sm && <CollectionMenu />}
            <div>Podcasts - WIP</div>
        </>
    )
}

export default Podcasts