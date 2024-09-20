import { useState, useEffect } from "react";
import {
    ContainerNavbar,
    RowrNavbar,
    ContentLogo,
    Nav,
    ContentMenu,
    SideBard,
    ContentSidebard,
    Content,
    SideBardHead
} from "@/styles/Navbar/navbar.styles";
import Image from "next/image";
import Buttom from "../smallComponents/buttom/buttom";
import { FiAlignRight, FiX } from "react-icons/fi";
import { Links } from "@/utils/dataNavbar/links.routes";

interface Prop {
    ruta?: (r: string) => void,
    royalRoute?: string,
    hidden?: boolean
}

const Navbar = ({ ruta, royalRoute, hidden }: Prop) => {
    const [active, setActive] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    //* Captura el evento, cuanto se desplaza en el eje (z).
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    //* Si el desplazamiento es masyor a 60, fija el navbar.
    const listenToScroll = () => {
        let heightToShow = 170;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        if (winScroll > heightToShow) {
            !show && setShow(true);
        } else {
            setShow(false);
        }
    }

    return (
        <ContainerNavbar menufixed={show.toString()}>
            <RowrNavbar>
                <ContentLogo>
                    <Image src="/assets/logo.webp" alt="Logo de Kryptopia" width={300} height={56} />
                    {/* <Image src="/assets/min-logo.webp" alt="Logo de Kryptopia" width={50} height={50} /> */}
                </ContentLogo>
                <Nav disp={hidden}>
                    {
                        Links.map((link, i) => (
                            <a
                                key={i}
                                className={royalRoute == link.path ? 'active' : ''}
                                onClick={() => ruta(`${link.path}`)}
                            >
                                {link.name}
                            </a>
                        ))
                    }
                    <a href="https://wa.me/message/NK2EEYBKZ3YLD1" target="_blank" rel="noreferer">
                        <Buttom
                            background="--color-bg-buttom-primary"
                            color="--color-text-black"
                            disabled={false}
                        >Contáctanos</Buttom></a>
                </Nav>
                <ContentMenu onClick={() => setActive(true)}>
                    <span><FiAlignRight /></span>
                </ContentMenu>
                <SideBard active={active.toString()}>
                    <ContentSidebard onClick={() => setActive(false)} active={active.toString()}>
                        <div>
                            <SideBardHead>
                                <Image src="/assets/logo.webp" alt="Logo de Kryptopia" width={300} height={56} />
                                <span onClick={() => setActive(false)}><FiX /></span>
                            </SideBardHead>
                            <Content disp={hidden}>
                                {
                                    Links.map((link, i) => (
                                        <a
                                            key={i}
                                            className={royalRoute === link.path ? 'active' : ''}
                                            onClick={() => ruta(`${link.path}`)}
                                        >
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </Content>
                        </div>
                        <a href="https://wa.me/message/NK2EEYBKZ3YLD1" target="_blank" rel="noreferer">
                            <Buttom
                                background="--color-bg-buttom-primary"
                                color="--color-text-black"
                                disabled={false}
                            >Contáctanos</Buttom>
                        </a>
                    </ContentSidebard>
                </SideBard>
            </RowrNavbar>
        </ContainerNavbar>
    );
}

export default Navbar;