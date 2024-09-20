import {
    ContainerFooter,
    RowFooter,
    Column,
    LogoFooter
} from "@/styles/Footer/footer.styles";
import Image from "next/image";

const Footer = () => {
    return (
        <ContainerFooter>
            <RowFooter>
                <Column>
                    <LogoFooter>
                        {/* <Image className="logo" src="/assets/logo.webp" alt="Logo de kriptopia" width={100} height={56} /> */}
                        {/* <Image className="criptovision" src="/assets/criptovision.webp" alt="Logo de kriptopia" width={80} height={80} /> */}
                    </LogoFooter>
                    {/* <p>Kryptopia en alianza con <strong>Cryptovision</strong>.</p> */}
                </Column>
                <Column>
                    <div>
                        <a href="https://www.youtube.com/@Kryptopiaoficial" target="_blank" rel="noreferer"><Image src="/assets/youtube.webp" alt="" width={26} height={26} /></a>
                        <a href="https://www.instagram.com/kryptopia.io/" target="_blank" rel="noreferer"><Image src="/assets/in.webp" alt="" width={26} height={26} /></a>
                        <a href="https://www.facebook.com/profile.php?id=100095248489765" target="_blank" rel="noreferer"><Image src="/assets/face.webp" alt="" width={26} height={26} /></a>
                    </div>
                    <span>Copyright</span>
                </Column>
            </RowFooter>
        </ContainerFooter>
    );
}

export default Footer;