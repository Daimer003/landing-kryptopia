import {
    ContainerKryptopia,
    RowKryptopia,
    ContentImg,
    ContentSlider
} from "@/styles/Kryptopia/kryptopia.styles";
import Image from "next/image";
import Buttom from "../smallComponents/buttom/buttom";
import Carrusel from "../smallComponents/carrusel";
import { data1 } from "@/utils/data/data";

interface Prop {
    ruta: (r) => void
}

const Kryp = ({ ruta }: Prop) => {
    return (
        <ContainerKryptopia>
            <RowKryptopia>
                <ContentImg>
                    <Image src="/assets/dashboard.webp" alt="Imagen dashboard" width={500} height={500} priority />
                </ContentImg>
                <ContentSlider>
                    <h3>¿Cómo Funciona Kryptopia?</h3>
                    <Carrusel data={data1} />
                    <Buttom
                        color="--color-text-black"
                        disabled={false}
                        background="--color-bg-buttom-primary"
                        onClick={() => ruta("kryptoPartners")}
                    >Sé parte del ecosistema</Buttom>
                </ContentSlider>
            </RowKryptopia>
        </ContainerKryptopia>
    );
}

export default Kryp;