import { useState, useRef } from "react";
import {
    ContainerSeedInvestor,
    RowSeedInvestor,
    ContentSeedInvestor,
    Column,
    ColumnImg,
    Values,
    Value,
    Control,
    Select,
    Option,
    ContentInvestor,
    ModalInvestor,
    Content
} from "@/styles/SeedInvestor/seedInvestor.styles";
import Buttom from "../smallComponents/buttom/buttom";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";
import { KryptopiaService } from '@/services/kr.service';
import Modal from '@/components/modals/modal';
import { values } from "@/utils/data/data";
import { Check, Input } from "@/styles/Commerce/commerce.styles";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const SeedInvestor = () => {
    const lastComponentRef = useRef(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState(false);
    const [prevCount, setPrevCount] = useState<number>(0);
    // const [control, setControl] = useState<boolean>(true);
    const [loadInvestor, setLoadInvestor] = useState<boolean>(false);
    const router = useRouter();
    const [createInvestor, setCreateInvestor] = useState<any>({
        name: '',
        wallet: '',
        email: '',
        phone: '',
    })

    //* Valida que todos los campos esten llenos.
    const validarObjeto = (createInvestor: any) => {
        for (const key in createInvestor) {
            if (createInvestor.hasOwnProperty(key)) {
                if (createInvestor[key] == "") {
                    return false
                } else if (createInvestor[key] !== undefined && createInvestor[key] !== null && createInvestor[key] !== "") {
                    return true
                }

            }
        }
    }

    //*Obtener valores de los campos y validaciones
    const getInpust = (event: Event) => {
        const { value, name } = event.target as HTMLInputElement;
        setCreateInvestor({
            ...createInvestor,
            [name]: value,
        })
    }

    //* Cambia el estado del check. 
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    //* incrementa el valor de prevcount
    const increment = () => {
        // if (control) setPrevCount(0);
        setPrevCount(prevCount => prevCount + 1 * 1000);
        // setControl(false);
    };

    //* decrementa el valor de prevcount
    const decrement = () => {
        if (prevCount <= 0) return;
        setPrevCount(prevCount => prevCount - 1 * 1000);
    };

    //* Setea el valor control a true y prevcount a (0);
    const select = (v: number) => {
        // setControl(true);
        setPrevCount(v);
    }

    //* Registra la inversión.
    const investor = async () => {
        if (isChecked) {
            const esValido = await validarObjeto(createInvestor);
            if (esValido) {
                setLoadInvestor(true);
                await KryptopiaService.investor(
                    createInvestor?.name,
                    createInvestor?.wallet,
                    prevCount / 1000,
                    createInvestor?.email,
                    createInvestor?.city)
                    .then((data) => {
                        if (data.status) {
                            router.push(data.data);
                            setLoadInvestor(false);
                            setCreateInvestor(
                                {
                                    name: '',
                                    wallet: '',
                                    email: '',
                                    phone: '',
                                }
                            )
                            setShowModal(false);
                            setIsChecked(false);
                        }
                    })
            } else {
                toast.info("Todos los campos deben estar completados.", {
                    toastId: "fields"
                });
            }
        } else {
            toast.info("Por favor, acepte los términos y condiciones", {
                toastId: "termInvestor"
            });
        }
    }

    return (
        <ContainerSeedInvestor ref={lastComponentRef}>
            <RowSeedInvestor>
                <h3>Calcula el porcentaje de ganancias de tu inversión</h3>
                <p>Selecciona el monto que deseas invertir teniendo en cuenta que el valor mínimo son
                    <strong>$1,000 USD</strong>. Recibirás un <strong>ROI</strong> estimado en <strong> 24 meses</strong> de hasta <strong>5 veces</strong> tu inversión.
                </p>
                <ContentSeedInvestor>
                    <Column>
                        <Values>
                            <Select>
                                {
                                    values.map((v, index) => (
                                        <Option
                                            key={index}
                                            onClick={() => select(v.value)} >
                                            <span>${v.value.toLocaleString()}</span>
                                        </Option>
                                    ))
                                }
                            </Select>
                        </Values>
                        <Value>
                            <ContentInvestor>
                                <span>
                                    <p>Vas a invertir: $ <strong>{prevCount.toLocaleString()}</strong>  USD</p>
                                </span>
                                <span>
                                    <p>En 24 meses tendrás: $ <strong>{(prevCount * 5).toLocaleString()}</strong> USD</p>
                                </span>
                            </ContentInvestor>
                            <Control>
                                <button onClick={() => increment()}>
                                    <div><span><FiPlus /></span></div>
                                </button>
                                <button onClick={() => decrement()}>
                                    <div><span><FiMinus /></span></div>
                                </button>
                            </Control>
                        </Value>
                        <Buttom
                            background="--color-text-secondary"
                            color="--color-text-black"
                            disabled={prevCount / 1000 > 0 ? false : true}
                            onClick={() => setShowModal(prevCount / 1000 > 0 ? true : false)}
                        >Quiero ser SeedInvestor</Buttom>
                    </Column>
                    <ColumnImg>
                        <Image src="assets/nft-card.webp" alt="Imagen kryptopia" width={100} height={140} priority />
                    </ColumnImg>
                </ContentSeedInvestor>
            </RowSeedInvestor>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                small={true}>
                <ModalInvestor>
                    <Content>
                        <h4>Estas a un paso abrir tu  puerta al universo de pagos crypto</h4>
                        <div>
                            <Input>
                                <input type='text' placeholder='Nombre' name='name' onChange={() => getInpust(event)} required />
                            </Input>
                        </div>
                        <div>
                            <Input>
                                <input type='number' placeholder='Celular' name='phone' onChange={() => getInpust(event)} required />
                            </Input>
                            <Input>
                                <input type='email' placeholder='Email' name='email' onChange={() => getInpust(event)} required />
                            </Input>
                        </div>
                        <p>Copia tu wallet de Polygon y pégala aquí para enviarte el NFT y los dividendos que ganarás como KryptoInvestor:</p>
                        <Input>
                            <input type='text' placeholder='Wallet Polygon' name='wallet' onChange={() => getInpust(event)} required />
                        </Input>
                        <Check>
                            {/* <label htmlFor="miCheckbox">Opción</label> */}
                            <div>
                                <input
                                    type='checkbox'
                                    id="miCheckbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange} />
                            </div>
                            <p><a
                                href="https://resources-storage.s3.amazonaws.com/documents/privacy_policy.pdf"
                                target="_blank"
                                rel="noreferer" >Acepto términos y condiciones y políticas de tratamientos de datos.</a></p>
                        </Check>
                        <Buttom
                            onClick={() => investor()}
                            color="--color-text-black"
                            disabled={false}
                            load={loadInvestor}
                            background="--color-text-primary">Ser SeedInvestor</Buttom>
                    </Content>
                </ModalInvestor>
            </Modal>
        </ContainerSeedInvestor>
    );
}

export default SeedInvestor;