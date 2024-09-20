import { useEffect } from 'react';
import Header from '@/components/header/header';
import Buttom from '@/components/smallComponents/buttom/buttom';
import { ContainerLayaut } from '@/styles/Layaut/layaut';
import {
    Container,
    ContentRow,
    ContentColInnovation,
    Post,
    Form,
    ContentBtn,
    Input,
    ConetntForm,
    CheckWe,
    SectionOne
} from '@/styles/Commerce/commerce.styles';
import Image from 'next/image';
import { KryptopiaService } from '@/services/kr.service';
import { useState } from 'react';
import Modal from '@/components/modals/modal';
import { Notifications } from '@/components/notifications/notifications';
import { toast } from "react-toastify";


const Commerce = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState(false);
    const [valid, setValid] = useState<boolean>(true);
    const [createUser, setCreateUser] = useState<any>({
        name: "",
        commerce: "",
        lastname: "",
        email: "",
        city: "",
    })

    //* Valida que todos los campos esten llenos.
    function validarObjetoLleno(payBeer) {
        for (const key in payBeer) {
            if (payBeer.hasOwnProperty(key)) {
                if (!payBeer[key]) {
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

    //*Obtener valores de los campos y validaciones
    const getInpust = (event: Event) => {
        validarObjetoLleno(createUser);
        const { value, name } = event.target as HTMLInputElement;
        setCreateUser({
            ...createUser,
            [name]: value,
        })
    }

    //*Función para realizar el registro
    const register = async () => {
        if (isChecked) {
            if (valid) {
                await KryptopiaService.commerce(
                    createUser?.name,
                    createUser?.commerce,
                    createUser?.lastname,
                    createUser?.email,
                    createUser?.city)
                    .then((data) => {
                        if (data?.status) {
                            setShowModal(true);
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
                title='¿Por qué limitarte a monedas tradicionales?'
                paragraph='Con Kryptopia, recibir criptomonedas es tan sencillo como cualquier otro pago. ¡Únete a la revolución crypto!"'
                label='¡Únete a la revolución crypto!'
                img='/assets/img-beer.webp'
                colorH2="--color-text-primary"
                textButton='Quiero ser un Comercio'
                tutorial={true}
            />

            <SectionOne>


            </SectionOne>

            <Container>
                <ContentRow >
                    <h3>Registrate como comercio</h3>
                    <ContentColInnovation>
                        <Post>
                            <p>Al registrarte como Comercio harás parte de un sistema global único que te brindará las herramientas necesarias para recibir pagos en crypto y cambiarlo
                                a tu moneda local. Además de otras funciones que llevarán tu negocio a otro nivel.
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
                                            placeholder='Celular'
                                            name='phone'
                                            onChange={() => getInpust(event)} required />
                                    </Input>
                                    <Input>
                                        <input
                                            type='text'
                                            placeholder='Ciudad'
                                            name='city'
                                            onChange={() => getInpust(event)} required />
                                    </Input>
                                </div>
                                <div>
                                    <Input>
                                        <input
                                            type='email'
                                            autoComplete="off"
                                            placeholder='Correo electrónico'
                                            name='email'
                                            onChange={() => getInpust(event)} required />
                                    </Input>
                                    <Input>
                                        <input
                                            type='text'
                                            autoComplete="off"
                                            placeholder='Comercio'
                                            name='commerce'
                                            onChange={() => getInpust(event)} required />
                                    </Input>
                                </div>
                                <CheckWe>
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
                                </CheckWe>
                            </ConetntForm>
                            <ContentBtn>
                                <Buttom
                                    onClick={() => register()}
                                    color="--color-text-black"
                                    disabled={!valid}
                                    background="--color-bg-buttom-primary">Registrarme</Buttom>
                            </ContentBtn>
                        </Form>
                    </ContentColInnovation>
                </ContentRow >
            </Container>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                small={true}>
                <Notifications>
                    <Image src="/assets/icon-kryptopia.webp " alt="Icono de kryptopia" width={40} height={40} priority />
                    <h4>¡Buenas noticias!
                        Su registro ha sido exitoso</h4>
                    <p>Pronto te estaremos informando de nuestro sistema educativo donde aprenderás todo lo necesario para que invites a comercios a recibir criptomonedas y ganes de sus transacciones.</p>
                    <p>Atento a tu correo y a tu whatsapp, estaremos en contacto.</p>
                </Notifications>
            </Modal>
        </ContainerLayaut>
    );
}

export default Commerce;


