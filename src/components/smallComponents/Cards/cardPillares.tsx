import {
    ContainerPillares,
    RowPillares
} from "@/styles/SmallComponets/Cards/cardPillares.styles"

interface Props {
    title: string,
    paragrapth: string,
    img: string
}

const CardPillares = ({ title, paragrapth, img }: Props) => {
    return (
        <ContainerPillares img={img}>
            <RowPillares>
                <h3>{title}</h3>
                <p>{paragrapth}</p>
            </RowPillares>
        </ContainerPillares>
    );
}

export default CardPillares;