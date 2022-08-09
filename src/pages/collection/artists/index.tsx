import { useMediaQuery } from '@mantine/hooks'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ArtistItem from '../../../components/ArtistItem/ArtistItem'
import CollectionMenu from '../../../components/Header/CollectionMenu/CollectionMenu'
import Section from '../../../components/Section/Section'
import { artists } from '../../../data/dummy'
import { Breakpoint, maxWidth } from '../../../utils/breakpoints'

const Artists: NextPage = () => {
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));

    return (
        <>
            <Head>
                <title>Spotify - Library</title>
                <meta property="og:title" title="Spotify - Library" key="title" />
            </Head>
            {sm && <CollectionMenu />}
            <Section title='Artists'>
                {artists.map((item, key) => (
                    <ArtistItem key={key} {...item} />
                ))}
            </Section>
        </>
    )
}

export default Artists