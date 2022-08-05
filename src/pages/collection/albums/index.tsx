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
                <title>Spotify - Bibliothek</title>
            </Head>
            <Section title='Alben'>
                {dummyData.map((item, key) => (
                    <MediaItem key={key} {...item} />
                ))}
            </Section>
        </>
    )
}

export default Albums