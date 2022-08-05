import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { NowPlayingProvider } from '../contexts/useNowPlaying';
import { motion, Variants } from 'framer-motion';
import GlobalFonts from '../theming/GlobalFonts';
import { appTheme } from '../theming/theme';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import dynamic from 'next/dynamic';
const MainLayout = dynamic(() => import('../layouts/MainLayout'), {
  ssr: false
});

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
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
