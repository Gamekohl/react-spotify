import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import MainLayout from '../layouts/MainLayout';
import { NowPlayingProvider } from '../contexts/useNowPlaying';
import { motion, Variants } from 'framer-motion';
import GlobalFonts from '../theming/GlobalFonts';
import { appTheme } from '../theming/theme';

const appVariants: Variants = {
  initial: {
    opacity: 0,
    y: '5px'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  }
}

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        ...appTheme,
        fontFamily: "Gotham, sans-serif",
        colorScheme: 'dark'
      }}
    >
      <GlobalFonts />
      <NowPlayingProvider>
        <MainLayout>
          <motion.div key={router.route} initial="initial" animate="animate" variants={appVariants}>
            <Component {...pageProps} />
          </motion.div>
        </MainLayout>
      </NowPlayingProvider>
    </MantineProvider>
  );
}

export default App;
