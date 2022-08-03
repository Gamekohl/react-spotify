import type { NextPage } from 'next'
import Greeting from '../components/Greeting/Greeting'
import UserProfile from '../components/UserProfile/UserProfile'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
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
      <header className='w-full h-16 absolute flex justify-between px-8 py-4 bg-black z-20'>
        <div className='flex justify-between items-center gap-4'>
          <ChevronLeft size={32} />
          <ChevronRight size={32} />
        </div>
        <UserProfile />
      </header>
      <main className='mt-16 inline-block w-full'>
        <div className='gap-6 grid pt-6 px-8'>
          <section className='flex flex-col min-h-[200px] relative mb-4'>
            <Greeting className='mb-6' />
            <div className={classes.splashItems}>
              <SplashItem img='https://i.scdn.co/image/ab67616d0000b273e70aac569b94abd971112f1b' title='Berserker' />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
