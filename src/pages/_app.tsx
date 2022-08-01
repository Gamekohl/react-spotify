import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import GlobalFonts from '../theming/GlobalFonts';
import MainLayout from '../layouts/MainLayout';
import { NowPlayingProvider } from '../contexts/useNowPlaying';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Gotham, sans-serif",
        colorScheme: 'dark'
      }}
    >
      <NowPlayingProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NowPlayingProvider>
    </MantineProvider>
  );
}

export default App;
