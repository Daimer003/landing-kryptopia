import {
    ContainerEcosystem,
    RowEcosystem,
    Text,
    Video
} from "@/styles/Ecosystem/ecosystem.styles";

const Ecosystem = () => {
    return (
        <ContainerEcosystem id="nosotros">
            <RowEcosystem>
                <Text>
                    <h3>Un ecosistema con una proyección de crecimiento ambiciosa</h3>
                    <p>Kryptopia le permite a los comercios tener su propia <strong>pasarela de pagos</strong>, su propia <strong>tienda en línea</strong>, conexión a los principales <strong>CRM</strong>, pagar a proveedores, socios y aliados comerciales de manera automática y muchas otras funcionalidades que sólo la tecnología Blockchain puede permitir.</p>
                </Text>
                <Video>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-eScXZYMsIY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Video>
            </RowEcosystem>
        </ContainerEcosystem>
    );
}

export default Ecosystem;