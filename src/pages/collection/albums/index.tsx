import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import MediaItem from '../../../components/MediaItem/MediaItem'
import Section from '../../../components/Section/Section'
import { dummyData } from '../../../data/dummy'


const Albums: NextPage = () => {
    return (
        <>
            <Head>
                <title>Spotify - Library</title>
                <meta property="og:title" title="Spotify - Library" key="title" />
            </Head>
            <Section title='Albums'>
                {dummyData.map((item, key) => (
                    <MediaItem key={key} {...item} />
                ))}
            </Section>
        </>
    )
}

export default Albums