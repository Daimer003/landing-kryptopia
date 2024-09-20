import {
    ContainerCardProducts,
    RowCardProducts,
    ContentImg,
    ContentText
} from "@/styles/SmallComponets/Cards/cardProducts.styles";
import Image from "next/image";

interface Props {
    title: string,
    text: string,
    imgBackground: string,
    img: string
}

const CardProducts = ({ title, text, imgBackground, img }: Props) => {
    return (
        <ContainerCardProducts>
            <RowCardProducts img={`/assets/card/${imgBackground}`}>
                <ContentImg>
                    <Image src={`/assets/card/${img}`} alt="" width={220} height={300} priority />
                </ContentImg>
                <ContentText>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </ContentText>
            </RowCardProducts>
        </ContainerCardProducts>
    );
}

export default CardProducts;