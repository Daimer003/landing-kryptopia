
import {
    ContainerCardRoadmap,
    RowCardRoadmap,
    Items,
    Div
} from "@/styles/SmallComponets/Cards/cardRoadmap.styles"
import Image from "next/image";


interface Prop {
    data?: any,
    active: number
}

const CardRoadmap = ({ data, active }: Prop) => {
    return (
        <ContainerCardRoadmap active={active}>
            <Image src="/assets/p.webp" alt="Imagen" width={40} height={80} />
            <RowCardRoadmap>
                <h4>{data.title}</h4>
                <Items>
                    <ul>
                        {
                            data.li.map((i, index) => (
                                <Div key={index}>
                                    <li >{i?.filled ?
                                        <Image src="/assets/icon.webp"
                                            alt="Icon"
                                            width={10}
                                            height={10}
                                            priority /> :
                                        <></>}{i.li}</li>
                                </Div>
                            ))
                        }
                    </ul>
                </Items>
            </RowCardRoadmap>
        </ContainerCardRoadmap>
    );
}

export default CardRoadmap;