import { useState, useEffect } from "react";
import {
    ContainerHeader,
    RowHeader,
    ContentText,
    ContentImg,
    Tags,
    ContentButton
} from "@/styles/Header/header.styles";
import Image from "next/image";
import Buttom from "../smallComponents/buttom/buttom";
import parse from "html-react-parser";
import { Kryptopia } from "@/styles/Beer/Beer.styles";
import { useRouter } from "next/router";
import { Tutorial } from "@/styles/Kryptopia/kryptopia.styles";
import { tags } from "./tags";
import VoxelDog from "../3dkryptopia/voxel-dog";

interface Props {
    title: string,
    paragraph: string,
    tag?: boolean,
    img?: any,
    colorH2?: string,
    video?: string
    textButton: string,
    commerce?: string,
    tutorial?: boolean,
    deck?: boolean,
    label?: string
}

const Header = ({
    title,
    paragraph,
    img,
    colorH2,
    video,
    textButton,
    commerce,
    tutorial,
    deck,
    label
}: Props) => {
    const router = useRouter();
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'Windows Phone'];
        const isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword));

        setIsMobileDevice(isMobile);
    }, []);

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight, // Altura de la ventana del navegador
            behavior: 'smooth', // Hace el desplazamiento suave
        });
    };



    return (
        <ContainerHeader>
            <RowHeader>
                <ContentText colorh2={colorH2}>
                    <h2>{title}</h2>
                    <p>{parse(paragraph)}</p>
                    <span>{label}</span>
                    <Tags>
                        {
                            tags.map((tag, index) => (
                                <span key={index}>{tag.tag}</span>
                            ))
                        }
                    </Tags>
                    <ContentButton>
                        {commerce == "commerce" ?
                            <Buttom
                                background={colorH2}
                                color="--color-text-black"
                                onClick={() => router.push("https://beer.kryptopia.io/")}
                            >Haz tu primer proceso de compra crypto</Buttom> :
                            <Buttom
                                background={colorH2}
                                color="--color-text-black"
                                onClick={() => handleScrollDown()}
                            >{textButton}</Buttom>
                        }
                        {
                            deck ?
                                <a
                                    href={isMobileDevice ?
                                        "https://deck.kryptopia.io/ " :
                                        "https://resources-storage.s3.amazonaws.com/documents/kryptopia/DeckSeed_Kryptopia_Landing.pdf"}
                                    target="_blank"
                                    rel="noreferer">
                                    <Buttom
                                        background="--color-bg-buttom-white"
                                        color="--color-text-black"
                                    >Quiero más información</Buttom>
                                </a> : <></>
                        }
                    </ContentButton>
                </ContentText>

                {tutorial ?
                    <Tutorial>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/QG3kyhd9jwM?si=D3gkV4xolLtspEGS"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </Tutorial> :
                    <ContentImg>
                        {commerce == "commerce" ? <Kryptopia>
                            <Image id="img1" src="/assets/moneda-kryptopia1.webp" alt="Imgen kryptopia" width={80} height={80} />
                            <Image id="img2" src="/assets/moneda-kryptopia2.webp" alt="Imgen kryptopia" width={80} height={80} />
                            <Image id="img3" src="/assets/moneda-kryptopia3.webp" alt="Imgen kryptopia" width={80} height={80} />
                        </Kryptopia> : <></>}
                        {
                            video ?
                                <video src={video} autoPlay loop poster={img} /> :
                                <VoxelDog />// <Image src={img} alt={img} width={500} height={500} priority />
                        }
                    </ContentImg>
                }
            </RowHeader>
        </ContainerHeader>
    );
}

export default Header;