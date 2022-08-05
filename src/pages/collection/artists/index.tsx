import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ArtistItem from '../../../components/ArtistItem/ArtistItem'
import Section from '../../../components/Section/Section'
import { artists } from '../../../data/dummy'

const Artists: NextPage = () => {
    return (
        <>
            <Head>
                <title>Spotify - Bibliothek</title>
            </Head>
            <Section title='Künstler*innen'>
                {artists.map((item, key) => (
                    <ArtistItem key={key} {...item} />
                ))}
            </Section>
        </>
    )
}

export default Artists