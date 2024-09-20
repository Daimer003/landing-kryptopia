import type { ReactElement, ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { Background, theme } from '@/styles/Layaut/layaut';
import "../styles/swiper.css";
import { ComponentLoad } from "@/styles/Layaut/layaut";
import { LogoSvg } from '@/components/smallComponents/logoSvg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import createEmotionCache from 'src/createEmotionCache';
import { NextPage } from 'next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Beer from './beer';
import SeedInvestor from './investor';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const [dom, setDom] = useState(true);
  const [subdomain, setSubdomain] = useState<string>("kryptopia");
  const [errorVideo, setErrorVideo] = useState<boolean>(false);
  const videoRef = useRef(null);
  const router = useRouter();

  //* Obtiene el host y redirecciona a una ruta.
  useEffect(() => {
    const host = router?.query?.subdomain || window.location.host;
    if (
      host == "beer.kryptopia.io" ||
      host == "https://beer.kryptopia.io" ||
      host == "http://beer.kryptopia.io") {
      setSubdomain("beer");
    }
    if (
      host == "inversion.kryptopia.io" ||
      host == "https://inversion.kryptopia.io" ||
      host == "http://inversion.kryptopia.io"
    ) {
      setSubdomain("investor");
    }
  }, [router?.query?.subdomain])

  //* filter domain
  const SubDomain = () => {
    switch (subdomain) {
      case "beer":
        return <Beer />
        break;
      case "investor":
        return <SeedInvestor />
        break;
      case "kryptopia":
        return <Component {...pageProps} />
        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setDom(false);
    }, 1000)
  }, [dom])

  useEffect(() => {
    const videoElement = videoRef.current;
    //* Ejecuta el video.
    const playVideo = () => {
      if (videoElement) {
        videoElement.play().catch(error => {
          setErrorVideo(true);
          console.log("Error de video", error)
        });
      }
    };

    //* Intentar reproducir el video después de que el componente se monte.
    playVideo();
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      {
        getLayout(
          <ThemeProvider theme={theme}>
            <ToastContainer
              position="top-right"
              autoClose={8000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark" />
            <Background>
              {
                errorVideo ?
                  <Image src="/assets/img-background-body.webp" alt="Imagen background" width={500} height={900} priority />
                  : <video
                    ref={videoRef}
                    controls={false}
                    muted
                    autoPlay
                    loop
                    poster='/assets/img-background-body.webp'>
                    <source src='/assets/media/background.webm' type="video/webm" />
                  </video>
              }

            </Background>
            {dom ?
              <ComponentLoad load={dom}>
                <LogoSvg />
              </ComponentLoad> :
              <SubDomain />
            }
          </ThemeProvider>
        )}
    </CacheProvider>
  )
}
