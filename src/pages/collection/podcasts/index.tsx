import Head from 'next/head'
import CollectionLayout from '../../../layouts/CollectionLayout';

const Podcasts = () => {
    return (
        <>
            <Head>
                <title>Spotify - Library</title>
                <meta property="og:title" title="Spotify - Library" key="title" />
            </Head>
            <div>Podcasts - WIP</div>
        </>
    )
}

Podcasts.PageLayout = CollectionLayout;

export default Podcasts