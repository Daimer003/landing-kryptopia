import { ContainerButtom, RowButtom } from "@/styles/SmallComponets/Buttom/buttom.styles";

interface Props {
    children: any,
    background?: string,
    color?: string,
    onClick?: () => void,
    disabled?: boolean
    load?: boolean
}

const Buttom = ({ children, background, color, onClick, disabled, load }: Props) => {
    return (
        <ContainerButtom onClick={onClick} background={background} >
            <RowButtom
                disabled={disabled}
                color={color}
                load={load}
            ><span />{children}</RowButtom>
        </ContainerButtom>
    );
}

export default Buttom;