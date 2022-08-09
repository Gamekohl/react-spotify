import { useMediaQuery } from '@mantine/hooks'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import CollectionMenu from '../../../components/Header/CollectionMenu/CollectionMenu'
import MediaItem from '../../../components/MediaItem/MediaItem'
import Section from '../../../components/Section/Section'
import { dummyData } from '../../../data/dummy'
import { Breakpoint, maxWidth } from '../../../utils/breakpoints'


const Albums: NextPage = () => {
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));

    return (
        <>
            <Head>
                <title>Spotify - Library</title>
                <meta property="og:title" title="Spotify - Library" key="title" />
            </Head>
            {sm && <CollectionMenu />}
            <Section title='Albums'>
                {dummyData.map((item, key) => (
                    <MediaItem key={key} {...item} />
                ))}
            </Section>
        </>
    )
}

export default Albums