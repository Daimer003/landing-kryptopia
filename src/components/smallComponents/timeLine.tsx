import {
    ContainerTimeLine,
    Row,
    RowTimeLine,
    Content,
    P,
    Column,
    ColumnImg,
    ContentTimeLine,
    TimeLine,
} from "@/styles/SmallComponets/timeLine.styles";
import Image from "next/image";
import { patsTimeLine } from "../../../public/assets/svgs";


interface Props {
    data: any,
    title: string
}

const Timeline = ({ data, title }: Props) => {
    return (
        <ContainerTimeLine>
            <Row>
                <h3>{title}</h3>
                <RowTimeLine>
                    <span />
                    <TimeLine>
                        <ContentTimeLine>
                            <Content>
                                {
                                    data.map((l, index) => (
                                        <P key={index}>
                                            <Column>
                                                <h4>{l.text}</h4>
                                            </Column>
                                            <ColumnImg>
                                                {patsTimeLine}
                                                <Image src={`/assets/${l.img}`} alt="Imagen linea de tiempo" width={40} height={40} />
                                            </ColumnImg>
                                        </P>
                                    ))}
                            </Content>
                        </ContentTimeLine>
                    </TimeLine>
                </RowTimeLine>
            </Row>
        </ContainerTimeLine>
    );
}

export default Timeline;