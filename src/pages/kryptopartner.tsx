import { useEffect } from 'react';
import Header from '@/components/header/header';
import Buttom from '@/components/smallComponents/buttom/buttom';
import Carrusel from '@/components/smallComponents/carrusel';
import Timeline from '@/components/smallComponents/timeLine';
import { ContainerLayaut } from '@/styles/Layaut/layaut';
import {
    Container,
    ContentRow,
    ContentColumn,
    ContantImg,
    ContentSlider,
    ContentInnovation,
    ContentColInnovation,
    Post,
    Form,
    ContentBtn,
    Input,
    ConetntForm,
    CheckWe
} from '@/styles/Commerce/commerce.styles';
import Image from 'next/image';
import { KryptopiaService } from '@/services/kr.service';
import { useState } from 'react';
import Modal from '@/components/modals/modal';
import { Notifications } from '@/components/notifications/notifications';
import { toast } from "react-toastify";
import { dataTimeLine2 } from "@/utils/data/data";
import { data2 } from '@/utils/data/data';

const Kryptoparner = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState(false);
    const [valid, setValid] = useState<boolean>(true);
    const [createUser, setCreateUser] = useState<any>({
        name: "",
        lastname: "",
        email: "",
        city: "",
        phone: "",
    })

    //* Valida que todos los campos esten llenos.
    function validarObjetoLleno(createUser: object) {
        for (const key in createUser) {
            if (createUser.hasOwnProperty(key)) {
                if (!createUser[key]) {
                    setValid(false);
                    return false; //* Si se encuentra un campo vacío o falsy, retorna falso
                }
            }
        }
        setValid(true);
        return true; //* Si todos los campos están llenos, retorna verdadero
    }

    //* Cambia el estado del check. 
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    //* Obtener valores de los campos y validaciones
    const getInpust = (event: Event) => {
        validarObjetoLleno(createUser);
        const { value, name } = event.target as HTMLInputElement;
        setCreateUser({
            ...createUser,
            [name]: value,
        })
    }

    //* Función para realizar el registro
    const register = async () => {
        if (isChecked) {
            if (valid) {
                await KryptopiaService.register(
                    createUser?.name,
                    createUser?.lastname,
                    createUser?.email,
                    createUser?.city,
                    createUser?.phone)
                    .then((data) => {
                        if (data?.status) {
                            setShowModal(true);
                            window.open(data.data, '_blank');
                        }
                    })
            } else {
                toast.info("Todos los campos deben estar completados.", {
                    toastId: "fields"
                });
            }
        } else {
            toast.info("Por favor, acepte los términos y condiciones", {
                toastId: "term"
            });
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <ContainerLayaut>
            <Header
                title='Invita un comercio a Kryptopia y se su socio de por vida'
                paragraph='<strong>Gana un 0.2% de todas las ventas</strong> que realicen los comercios que invites. <br /><br />
                Impulsa la adopción de las criptomonedas como forma de pago global y <strong>sé pionero de esta revolución blockchain</strong>.
                '
                img='/assets/img-we.webp'
                colorH2="--color-text-primary"
                video='/assets/media/avatar1.webm'
                textButton='Quiero ser KryptoPartner'
            />
            <Timeline
                title='Beneficios de los KryptoPartners'
                data={dataTimeLine2} />
            <Container>
                <ContentRow>
                    <h3>Qué hace diferente a Kryptopia</h3>
                    <p>El comercio electrónico mueve <strong>billones de dólares al día</strong>, las pasarelas de pago procesan todas las transacciones y cobran entre un 2% y un 7% por hacerlo; <strong>Kryptopia se proyecta a mover más de 100 millones de dólares al mes, y será gracias a qué:</strong> </p>
                    <ContentColumn>
                        <ContentSlider>
                            <Carrusel data={data2} />
                        </ContentSlider>
                        <ContantImg>
                            <Image src="/assets/pc.webp" alt="Imagen dashboard" width={500} height={500} priority />
                        </ContantImg>
                    </ContentColumn>
                    <ContentInnovation>
                        <h3>Registrate como KryptoPartners</h3>
                        <ContentColInnovation>
                            <Post>
                                <p>Al registrarte como KryptoPartner harás parte de un sistema educativo único que te brindará las herramientas necesarias para traer comercios al ecosistema y gozar de los beneficios pasivos de sus transacciones.
                                </p>
                            </Post>
                            <Form>
                                <ConetntForm>
                                    <div>
                                        <Input>
                                            <input
                                                type='text'
                                                autoComplete="off"
                                                placeholder='Nombre'
                                                name='name'
                                                onChange={() => getInpust(event)} required />
                                        </Input>
                                        <Input>
                                            <input
                                                type='text'
                                                autoComplete="off"
                                                placeholder='Apellido'
                                                name='lastname'
                                                onChange={() => getInpust(event)} required />
                                        </Input>
                                    </div>
                                    <div>
                                        <Input>
                                            <input
                                                type='number'
                                                autoComplete="off"
                                                placeholder='Celular'
                                                name='phone'
                                                onChange={() => getInpust(event)} required />
                                        </Input>
                                        <Input>
                                            <input
                                                type='text'
                                                autoComplete="off"
                                                placeholder='Ciudad'
                                                name='city'
                                                onChange={() => getInpust(event)} required />
                                        </Input>
                                    </div>
                                    <Input>
                                        <input
                                            type='email'
                                            autoComplete="off"
                                            placeholder='Correo electrónico'
                                            name='email'
                                            onChange={() => getInpust(event)} required />
                                    </Input>
                                    <CheckWe >
                                        <input
                                            type='checkbox'
                                            id="miCheckbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange} />
                                        <p><a
                                            href="https://resources-storage.s3.amazonaws.com/documents/privacy_policy.pdf"
                                            target="_blank"
                                            rel="noreferer" >Acepto términos y condiciones y políticas de tratamientos de datos.
                                        </a></p>
                                    </CheckWe >
                                </ConetntForm>
                                <ContentBtn>
                                    <Buttom
                                        onClick={() => register()}
                                        color="--color-text-black"
                                        disabled={false}
                                        background="--color-bg-buttom-primary">Registrarme</Buttom>
                                </ContentBtn>
                            </Form>
                        </ContentColInnovation>
                    </ContentInnovation>
                </ContentRow>
            </Container>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                small={true}>
                <Notifications>
                    <Image src="/assets/icon-kryptopia.webp " alt="Icono de kryptopia" width={40} height={40} priority />
                    <h4>¡Buenas noticias! Su registro ha sido exitoso</h4>
                    <span>Ahora eres un KryptoPartner.</span>
                    <p>Pronto te estaremos informando de nuestro sistema educativo donde aprenderás todo lo necesario para que invites a comercios a recibir criptomonedas y ganes de sus transacciones.</p>
                    <p>Atento a tu correo y a tu whatsapp, estaremos en contacto.</p>
                </Notifications>
            </Modal>
        </ContainerLayaut>
    );
}

export default Kryptoparner;


