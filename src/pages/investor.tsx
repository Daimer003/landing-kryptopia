import { useEffect } from 'react';
import Header from '@/components/header/header';
import SeedInvestor from '@/components/seedInvestor/seedInvestor';
import Timeline from '@/components/smallComponents/timeLine';
import { ContainerLayaut } from '@/styles/Layaut/layaut';
import {
    ContentKriptopia,
} from "@/styles/Kryptopia/kryptopia.styles";
import {
    ContentColumn,
    ContantImg,
    ContentSlider,
} from '@/styles/Commerce/commerce.styles';
import Carrusel from '@/components/smallComponents/carrusel';
import Image from 'next/image';
import { dataTimeLine3 } from "@/utils/data/data";
import { data2 } from '@/utils/data/data';
import Navbar from '@/components/navbar/navbar';
import Head from 'next/head';
import Footer from '@/components/footer/footer';

const Investor = () => {

    //* Cuando carge el component, scroll auto 0
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <ContainerLayaut>
            <Head>
                <title>Kryptopia</title>
                <meta name="description" content="Con tu inversión en Kryptopia, apoyas la adopción masiva de criptomonedas y también generas ganancias pasivas." />
            </Head>
            <Navbar hidden={false} />
            <Header
                title='Invierte en tecnología eficiente y segura para los comercios que desean aceptar criptomonedas como método de pago'
                paragraph='<strong>Con tu inversión en Kryptopia</strong>, apoyas la adopción masiva de criptomonedas y también generas ganancias pasivas. <br /><br />
                ¿Por qué esperar? <strong>Construyamos juntos el futuro digital del comercio electrónico en criptomonedas.</strong><br /><br />
                ¡Invierta, recibe un 5x de su capital y sea parte del cambio!'
                img='/assets/img-kryptopia.webp'
                colorH2="--color-text-secondary"
                video='/assets/media/avatar2.webm'
                textButton='Quiero ser SeedInvestor'
                tutorial={true}
                deck={true}
            />

            <ContentKriptopia>
                <h3>Qué hace diferente a Kryptopia</h3>
                <p>Existen otras pasarelas de pago en criptomonedas, pero
                    <strong>ninguna está pensada para atender las necesidades de los comercios</strong>; Kryptopia es un ecosistema que entrega toda la tecnología, educación, y facilidades para que los <strong>comercios accedan a los más de 54,200 millones de dólares de transacciones crypto.</strong></p>
                <ContentColumn>
                    <ContentSlider>
                        <Carrusel data={data2} />
                    </ContentSlider>
                    <ContantImg>
                        <Image src="/assets/pc.webp" alt="Imagen dashboard" width={500} height={500} priority />
                    </ContantImg>
                </ContentColumn>
            </ContentKriptopia>
            <Timeline
                title='Beneficios de invertir en kryptopia'
                data={dataTimeLine3}
            />
            <SeedInvestor />
            <Footer />
        </ContainerLayaut>
    );
}

export default Investor;
