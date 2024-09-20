import { useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Head from 'next/head';
import HomeIndex from '@/components/sections/home';
import Kryptoparner from './kryptopartner';
import Commerce from './commerce';
import { ContainerLayaut } from '@/styles/Layaut/layaut';
import Step from './step';


export default function Home() {
  const [route, setRout] = useState('home');
  const ruta = (r: string) => setRout(r)

  //* Filter component
  const [routing, _] = useState({
    home: < HomeIndex ruta={ruta} />,
    kryptoPartners: <Kryptoparner />,
    commerce: <Commerce />,
    ayuda: <Step />
  });

  return (
    <>
      <Head>
        <title>Kryptopia</title>
        <meta name="description" content="¡Sé un pionero en el mercado y genera ingresos extras con toda la tecnología necesaria para facilitar los pagos crypto! Descubre el futuro del comercio en  línea con nuestra plataforma blockchain." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerLayaut>
        <Navbar ruta={ruta} royalRoute={route} hidden={true} />
        {routing[route as string]}
        <Footer />
      </ContainerLayaut>
    </>
  )
}
