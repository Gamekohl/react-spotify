import Head from 'next/head'
import MediaItem from '../../../components/MediaItem/MediaItem'
import Section from '../../../components/Section/Section'
import { dummyData } from '../../../data/dummy'
import CollectionLayout from '../../../layouts/CollectionLayout'

const Albums = () => {
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

Albums.PageLayout = CollectionLayout;

export default Albums