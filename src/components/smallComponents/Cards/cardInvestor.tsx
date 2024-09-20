import {
    ContainerCardInvestor,
    RowCardInvestor,
    ContentImg,
    ContentText
} from "@/styles/SmallComponets/Cards/cardInvestor.styles";
import Image from "next/image";

interface Props {
    img: string,
    text: string
}

const CardInvestor = ({ img, text }: Props) => {
    return (
        <ContainerCardInvestor>
            <RowCardInvestor>
                <ContentImg>
                    <span />
                    <Image src={`/assets/${img}`} alt="Icono" width={40} height={40} priority />
                </ContentImg>
                <ContentText>
                    <p>{text}</p>
                </ContentText>
            </RowCardInvestor>
        </ContainerCardInvestor>
    );
}

export default CardInvestor;
