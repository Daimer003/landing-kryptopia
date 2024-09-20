import {
    ContainerProducts,
    RowProducts,
    Content
} from "@/styles/Products/products.styles";
import CardProducts from "../smallComponents/Cards/cardProducts";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { dataProduct } from "@/utils/data/data";

SwiperCore.use([Navigation, Autoplay]);


const Products = () => {
    return (
        <ContainerProducts>
            <RowProducts>
                <h3>Productos de Kryptopia</h3>
                <Content>
                    <Swiper
                        navigation
                        spaceBetween={20}
                        loop={true}
                        // autoplay={{
                        //     delay: 4500, // Tiempo de espera entre diapositivas en milisegundos
                        //     disableOnInteraction: true // Permite la navegación manual incluso cuando está en modo automático
                        // }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1440: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {
                            dataProduct.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <CardProducts
                                        title={product.title}
                                        text={product.text}
                                        imgBackground={product.imgBackground}
                                        img={product.img} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Content>
            </RowProducts >
        </ContainerProducts >
    );
}

export default Products;