import {
    ContainerCarrusel,
    RowCarrusel,
} from '@/styles/SmallComponets/carrusel.styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";
import CardKryptopia from './Cards/cardKryptopia';


SwiperCore.use([Navigation, Scrollbar, A11y]);

const Carrusel = ({ data }) => {


    return (
        <ContainerCarrusel>
            <RowCarrusel>
                <Swiper
                    navigation
                    spaceBetween={20}
                    loop={false}
                    // autoplay={{
                    //     delay: 4500, // Tiempo de espera entre diapositivas en milisegundos
                    //     disableOnInteraction: false, // Permite la navegación manual incluso cuando está en modo automático
                    // }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardKryptopia number={item.id} text={item.text} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </RowCarrusel>
        </ContainerCarrusel>
    );
}

export default Carrusel;