import {
    ContainerCardKryptopia,
    RowCardKryptopia,
    Text
} from "@/styles/SmallComponets/Cards/cardKryptopia.styles";

const CardKryptopia = ({ number, text }) => {
    return (
        <ContainerCardKryptopia>
            <RowCardKryptopia>
                <span>{number}</span>
                <Text>
                    <p>{text}</p>
                </Text>
            </RowCardKryptopia>
        </ContainerCardKryptopia>
    );
}

export default CardKryptopia;