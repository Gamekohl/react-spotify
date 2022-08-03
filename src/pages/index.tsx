import type { NextPage } from 'next'
import Greeting from '../components/Greeting/Greeting'
import { createStyles } from '@mantine/core'
import SplashItem from '../components/SplashItem/SplashItem'

const useStyles = createStyles({
  splashItems: {
    display: 'grid',
    gap: '16px 24px',
    gridTemplate: 'auto/repeat(auto-fill, minmax(max(270px, 25%), 1fr))'
  }
})

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div style={{ height: '2000px' }}>
      <div className='gap-6 grid'>
        <section className='flex flex-col min-h-[200px] relative mb-4'>
          <Greeting className='mb-6' />
          <div className={classes.splashItems}>
            <SplashItem img='https://i.scdn.co/image/ab67616d0000b273e70aac569b94abd971112f1b' title='Berserker' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
