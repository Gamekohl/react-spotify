import type { NextPage } from 'next'
import Greeting from '../components/Greeting/Greeting'
import { createStyles } from '@mantine/core'
import SplashItem from '../components/SplashItem/SplashItem'
import { useState } from 'react'

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
  const { classes, cx } = useStyles();
  const [avgColor, setAvgColor] = useState('rgb(83, 83, 83)');

  const handleColorChange = (color: string) => {
    setAvgColor(color);
  }

  return (
    <div style={{ height: '2000px' }}>
      <div className='gap-6 grid'>
        <section className='flex flex-col min-h-[200px] relative mb-4'>
          <div style={{ backgroundColor: avgColor }} className={cx(classes.dynamicBackgroundWrapper, 'absolute h-[332px] -mt-16 -ml-8 -z-10')}></div>
          <Greeting className='mb-6' />
          <div className={classes.splashItems}>
            <SplashItem emitAvgColor={handleColorChange} img='https://i.scdn.co/image/ab67616d0000b273e70aac569b94abd971112f1b' title='Berserker' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
