import {
    ContainerInvestors,
    RowInvestors,
    KryptoPartner,
    SeedInvestor,
    TextKryptoPartner,
    TextSeedInvestor,
    Investor,
    Partner,
    ContentImg
} from "@/styles/Investors/investors.styles";
import Image from "next/image";
import Buttom from "../smallComponents/buttom/buttom";
import CardInvestor from "../smallComponents/Cards/cardInvestor";
import { dataInvestor, dataParner } from "@/utils/data/data";

interface Props {
    ruta: (r) => void
}

const Investors = ({ ruta }: Props) => {
    return (
        <ContainerInvestors>
            <RowInvestors>
                <KryptoPartner>
                    <ContentImg>
                        <Image src="/assets/img-krypto-partner.webp" alt="Img Investors" width={200} height={200} priority />
                    </ContentImg>
                    <TextKryptoPartner>
                        <h3>¿Quieres ser un KryptoPartner?</h3>
                        <p>Imagínate que puedes ganar un 0.2% por todas las transacciones que hace PSE, Amazon, Mercado Libre, etc. </p>
                        <h4>En Kryptopia es un sueño hecho realidad.</h4>
                        <p>Impulsa la adopción de las criptomonedas como forma de pago global y sé pionero de esta revolución blockchain.</p>
                    </TextKryptoPartner>
                    <Partner>
                        {
                            dataParner.map((p, index) => (
                                <CardInvestor
                                    key={index}
                                    img={p.img}
                                    text={p.text} />
                            ))
                        }
                    </Partner>
                    <Buttom
                        color="--color-text-black"
                        disabled={false}
                        background="--color-bg-buttom-primary"
                        onClick={() => ruta("kryptoPartners")}
                    >¡Quiero ser un KryptoPartner!</Buttom>
                </KryptoPartner>
                <SeedInvestor>
                    <ContentImg>
                        <Image src="/assets/img-commerce.webp" alt="Img Investors" width={200} height={200} priority />
                    </ContentImg>
                    <TextSeedInvestor>
                        <h3>¿Quieres ser un Comercio?</h3>
                        <p>¿Por qué limitarse a monedas locales?</p>
                        <h4>Con Kryptopia, recibir criptomonedas es tan sencillo como cualquier otro pago. ¡Únete a la revolución crypto!"</h4>
                        {/* <p>Sé fundador de la plataforma que revolucionará el comercio electrónico crypto y haz crecer tu capital.</p> */}
                    </TextSeedInvestor>
                    <Investor>
                        {
                            dataInvestor.map((p, index) => (
                                <CardInvestor
                                    key={index}
                                    img={p.img}
                                    text={p.text} />
                            ))
                        }
                    </Investor>
                    <Buttom
                        color="--color-text-black"
                        disabled={false}
                        background="--color-bg-buttom"
                        onClick={() => ruta("commerce")}
                    >¡Quiero ser un Comercio!</Buttom>
                </SeedInvestor>
            </RowInvestors>
        </ContainerInvestors>
    );
}



export default Investors;




