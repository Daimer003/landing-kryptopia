import Investors from '@/components/investors/investors';
import Kryptopia from '@/components/kryptopia/kryptopia';
import Header from '@/components/header/header';
import { ContainerLayaut } from '@/styles/Layaut/layaut';
import Timeline from '../smallComponents/timeLine';
import Ecosystem from '../ecosystem/ecosystem';
import Products from '../products/products';
import { dataTimeLine } from "@/utils/data/data";
import Roadmap from '../roadmap/roadmap';

interface Prop {
    ruta: (r: string) => void
}

const HomeIndex = ({ ruta }: Prop) => {
    return (
        <ContainerLayaut>
            <Header
                title='Kryptopia: Tu puerta al universo cripto'
                paragraph='¡Sé un pionero en el mercado y genera ingresos extras con toda la tecnología necesaria para facilitar los pagos crypto! Descubre el futuro del comercio en  línea con nuestra plataforma blockchain.'
                img='/assets/cards.webp'
                colorH2="--color-text-primary"
                textButton='Compra una cerveza'
                commerce='commerce'
            />
            <Kryptopia ruta={ruta} />
            <Timeline title='¿Por qué somos diferentes?' data={dataTimeLine} />
            <Ecosystem />
            <Products />
            <Roadmap />
            <Investors ruta={ruta} />
        </ContainerLayaut >
    );
}

export default HomeIndex;