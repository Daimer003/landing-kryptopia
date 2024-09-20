import { useEffect, useState } from "react";
import Buttom from "@/components/smallComponents/buttom/buttom";
import {
    ContainerBeer,
    RowBeer,
    ContentText,
    ContentImg,
    Kryptopia,
    ContentBeer,
    Img,
    Amount,
    Commerce
} from "@/styles/Beer/Beer.styles";
import {
    ModalInvestor,
    Content
} from "@/styles/SeedInvestor/seedInvestor.styles";
import { CheckBeer, Input } from "@/styles/Commerce/commerce.styles";
import { ContentLogo } from "@/styles/Navbar/navbar.styles";
import Image from "next/image";
import Modal from "@/components/modals/modal";
import { toast } from "react-toastify";
import { KryptopiaService } from '@/services/kr.service';
import Head from 'next/head';

const Beer = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState(true);
    const [valid, setValid] = useState<boolean>(false);
    const [type, setType] = useState<string>("kryptopartner");
    const [payBeer, setPayBeer] = useState<any>({
        name: '',
        commerce: 'kryptopartner',
        lastname: '',
        email: '',
        city: ''
    })

    //* Valida que todos los campos esten llenos.
    function validarObjetoLleno(payBeer) {
        for (const key in payBeer) {
            if (payBeer.hasOwnProperty(key)) {
                if (!payBeer[key]) {
                    setValid(false);
                    return false;
                }
            }
        }
        setValid(true);
        return true;
    }

    //* Obtener valores de los campos y validaciones
    const getInpust = (event: Event) => {
        validarObjetoLleno(payBeer);
        const { value, name } = event.target as HTMLInputElement;
        setPayBeer({
            ...payBeer,
            [name]: value,
        })
    }

    //* Cambia el estado del check. 
    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
        setType(e.target.value)
        console.log(isChecked)
    };

    //* Función para realizar el registro
    const register = async () => {
        if (valid) {
            await KryptopiaService.beer(
                payBeer?.name,
                payBeer?.commerce,
                type,
                payBeer?.lastname,
                payBeer?.email,
                payBeer?.city)
                .then((data) => {
                    if (data?.status) {
                        setShowModal(true);
                        window.location.href = data.data;
                    }
                })
        } else {
            toast.info("Todos los campos deben estar completados.", {
                toastId: "fields"
            });
        }
    }

    useEffect(() => {
        setValid(false);
    }, [showModal])


    return (
        <ContainerBeer>
            <Head>
                <title>Kryptopia</title>
                <meta name="description" content="Con nuestra plataforma, comprar y disfrutar se convierte en una experiencia fluida, sin obstáculos. ¿Listo para vivir la KryptoFacilidad? Compra cerveza y ¡salud!" />
            </Head>
            <nav>
                <ContentLogo>
                    <Image src="/assets/logo.webp" alt="Logo de Kryptopia" width={300} height={56} />
                </ContentLogo>
                <a href="https://wa.me/message/NK2EEYBKZ3YLD1" target="_blank" rel="noreferer">
                    <Buttom
                        background="--color-bg-buttom-primary"
                        color="--color-text-black">
                        Contáctanos
                    </Buttom>
                </a>
            </nav>
            <RowBeer>
                <ContentText>
                    <h2>Cerveza Kryptopia</h2>
                    <p>En Kryptopia, hemos revolucionado el proceso de pago para que sea tan suave y refrescante como ese primer trago de tu bebida favorita. <br /><br />
                        Con nuestra plataforma, comprar y disfrutar se convierte en una experiencia fluida, sin obstáculos. ¿Listo para vivir la KryptoFacilidad? Compra cerveza y ¡salud!"
                    </p>
                </ContentText>
                <ContentBeer>
                    <ContentImg>
                        <Img>
                            <Image src="/assets/beer.webp" alt="Imagen beer" width={500} height={500} priority />
                        </Img>
                        <Kryptopia>
                            <Image id="img1" src="/assets/moneda-kryptopia1.webp" alt="Imgen kryptopia" width={80} height={80} />
                            <Image id="img2" src="/assets/moneda-kryptopia2.webp" alt="Imgen kryptopia" width={80} height={80} />
                            <Image id="img3" src="/assets/moneda-kryptopia3.webp" alt="Imgen kryptopia" width={80} height={80} />
                        </Kryptopia>
                        <Amount>
                            <span>$0.5 USD</span>
                            <Buttom
                                background="--color-bg-buttom-primary"
                                color="--color-text-black"
                                onClick={() => setShowModal(true)}
                            >Comprar Cerveza</Buttom>
                        </Amount>
                    </ContentImg>

                </ContentBeer>
            </RowBeer>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                small={true}>
                <ModalInvestor>
                    <Content>
                        <h4>Cerveza Kryptopia</h4>
                        <p>Con Kryptopia, aprende a hacer compras cryptos y únete a nuestra revolución.
                        </p>
                        <div>
                            <Input>
                                <input
                                    type='text'
                                    placeholder='Nombre'
                                    name='name'
                                    autoComplete="off"
                                    onChange={() => getInpust(event)} required />
                            </Input>
                            <Input>
                                <input
                                    type='text'
                                    placeholder='Apellido'
                                    name='lastname'
                                    autoComplete="off"
                                    onChange={() => getInpust(event)} required />
                            </Input>
                        </div>
                        <div>
                            <Input>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    autoComplete="off"
                                    onChange={() => getInpust(event)} required />
                            </Input>
                            <Input>
                                <input
                                    type='text'
                                    placeholder='Ciudad'
                                    name='city'
                                    autoComplete="off"
                                    onChange={() => getInpust(event)} required />
                            </Input>
                        </div>

                        <Commerce active={isChecked}>
                            <Input>
                                <input
                                    type='text'
                                    placeholder='Nombre Comercio'
                                    name='commerce'
                                    autoComplete="off"
                                    onChange={() => getInpust(event)} required />
                            </Input>
                        </Commerce>

                        <CheckBeer>
                            {/* <label htmlFor="miCheckbox">Opción</label> */}
                            <div>
                                <input type="radio" id="miCheckbox" value="kryptopartner" checked={isChecked} onChange={handleCheckboxChange} />
                                <p>Soy un Kryptopartner</p>
                            </div>
                            <div>
                                <input type="radio" id="miCheckbox" value="commerce" checked={!isChecked} onChange={handleCheckboxChange} />
                                <p>Soy un comercio</p>
                            </div>
                        </CheckBeer>
                        <Buttom
                            onClick={() => register()}
                            color="--color-text-black"
                            disabled={!valid}
                            background="--color-text-primary">Comprar Cerveza</Buttom>
                    </Content>
                </ModalInvestor>

            </Modal>
        </ContainerBeer>
    );
}

export default Beer;