import type { NextPage } from 'next'
import Greeting from '../components/Greeting/Greeting'
import { createStyles } from '@mantine/core'
import SplashItem from '../components/SplashItem/SplashItem'
import { useState } from 'react'
import { dummyData } from '../data/dummy'
import MediaSection from '../components/MediaSection/MediaSection'
import MediaItem from '../components/MediaItem/MediaItem';
import { useMediaQuery } from '@mantine/hooks'
import { Breakpoint, maxWidth } from '../utils/breakpoints'

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
        <MediaSection link='/' title='Wieder reinhören'>
          {dummyData.map(item => (
            <MediaItem key={item.id} {...item} />
          ))}
        </MediaSection>
        <MediaSection link='/' title='Zuletzt gehört'>
          {reversed.map((item, key) => (
            <MediaItem key={key} {...item} />
          ))}
        </MediaSection>
        <MediaSection link='/' title='Deine Lieblingskünstler*innen'>

        </MediaSection>
      </div>
    </div>
  )
}

export default Home
