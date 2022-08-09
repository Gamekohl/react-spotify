import Head from 'next/head'
import CollectionLayout from '../../../layouts/CollectionLayout';

const Playlists = () => {
    return (
        <>
            <Head>
                <title>Spotify - Library</title>
                <meta property="og:title" title="Spotify - Library" key="title" />
            </Head>
            <div>Playlists - WIP</div>
        </>
    )
}

Playlists.PageLayout = CollectionLayout;

export default Playlists