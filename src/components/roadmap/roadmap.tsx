import { useRef } from "react";
import {
    ContainerRoadmap,
    RowRoadmap,
    Content,
    Row,
    Control
} from "@/styles/Roadmap/roadmap.styles";
import CardRoadmap from "../smallComponents/Cards/cardRoadmap";
import { data3 } from "@/utils/data/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Roadmap = () => {
    const contentRef = useRef(null);

    const scrollLeft = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <ContainerRoadmap>
            <RowRoadmap>
                <span />
                <h3>Roadmap</h3>
                <Row ref={contentRef}>
                    <Content >
                        {
                            data3.map((i, index) => (
                                <CardRoadmap key={index} data={i} active={i.id == 1 ? 1 : 0} />
                            ))
                        }
                    </Content>
                </Row>
                <Control>
                    <button onClick={scrollLeft}><FiChevronLeft /></button>
                    <button onClick={scrollRight}><FiChevronRight /></button>
                </Control>
            </RowRoadmap>
        </ContainerRoadmap>
    );
}

export default Roadmap;