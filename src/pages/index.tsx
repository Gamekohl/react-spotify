import type { NextPage } from 'next'
import Greeting from '../components/Greeting/Greeting'
import { createStyles } from '@mantine/core'
import SplashItem from '../components/SplashItem/SplashItem'
import { useState } from 'react'
import { artists, dummyData } from '../data/dummy'
import MediaSection from '../components/MediaSection/MediaSection'
import MediaItem from '../components/MediaItem/MediaItem';
import { useMediaQuery } from '@mantine/hooks'
import { Breakpoint, maxWidth } from '../utils/breakpoints'
import ArtistItem from '../components/ArtistItem/ArtistItem'
import Head from 'next/head'

const useStyles = createStyles({
  splashItems: {
    display: 'grid',
    gap: '16px 24px',
    gridTemplate: 'auto/repeat(auto-fill, minmax(max(270px, 25%), 1fr))'
  },
  dynamicBackgroundWrapper: {
    width: 'calc(100% + 4rem)',
    backgroundImage: 'linear-gradient(rgba(0,0,0,.6) 0, #121212 100%),url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=")',
    transition: 'background 1s ease'
  }
})

const Home: NextPage = () => {
  const sm = useMediaQuery(maxWidth(Breakpoint.sm));
  const { classes, cx } = useStyles();
  const [avgColor, setAvgColor] = useState('rgb(83, 83, 83)');
  const reversed = [].concat(dummyData).reverse();

  const handleColorChange = (color: string) => {
    setAvgColor(color);
  }

  return (
    <>
      <Head>
        <title>Spotify - Web Player</title>
        <meta property="og:title" title="Spotify - Web Player" key="title" />
        <meta httpEquiv="content-Type" content="text/html; utf-8" />
        <meta httpEquiv="Pragma" content="cache" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta httpEquiv="content-Language" content="de" />
        <meta name="description" content="Spotify Clone made with ReactJS, NextJS and Redux" />
        <meta name="keywords" content="spotify,clone,spotify clone, reactjs,react,redux,nextjs" />
        <meta name="author" content="Gamekohl" />
        <meta name="publisher" content="Gamekohl" />
        <meta name="copyright" content="Gamekohl" />
        <meta httpEquiv="Reply-to" content="" />
        <meta name="expires" content="" />
        <meta name="revisit-after" content="15 days" />
      </Head>
      <div>
        <div className='gap-6 grid'>
          <section className='flex flex-col min-h-[200px] relative mb-4'>
            <div
              style={{ backgroundColor: avgColor }}
              className={cx(
                classes.dynamicBackgroundWrapper,
                sm ? 'h-[300px]' : 'h-[332px]',
                'absolute -mt-16 -ml-8 -z-10'
              )}
            ></div>
            <Greeting className='mb-6' />
            <div className={classes.splashItems}>
              {dummyData.slice(0, 6).map(item => (
                <SplashItem key={item.id} emitAvgColor={handleColorChange} {...item} />
              ))}
            </div>
          </section>
          <MediaSection link='/' title='Jump back in'>
            {dummyData.map(item => (
              <MediaItem key={item.id} {...item} />
            ))}
          </MediaSection>
          <MediaSection link='/' title='Recently played'>
            {reversed.map((item, key) => (
              <MediaItem key={key} {...item} />
            ))}
          </MediaSection>
          <MediaSection link='/' title='Your favorite artists'>
            {artists.map((item, key) => (
              <ArtistItem key={key} {...item} />
            ))}
          </MediaSection>
        </div>
      </div>
    </>
  )
}

export default Home
