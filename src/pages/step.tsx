import { useState } from "react";
import {
    ContainerStep,
    RowrStep,
    StepByStep,
    Tutorial,
    ContentStep,
    ContenButton,
    ContenButtonTutorial,
    ContentSystem,
    Content
} from "@/styles/Step/step.styles";
import parse from "html-react-parser";
import Buttom from "@/components/smallComponents/buttom/buttom";
import Image from "next/image";
import { dataStap } from "@/utils/data/data";
import { android, appstore, iconAndroid, iconIos } from "../../public/assets/step-by-step/logos";


const Step = () => {
    const [step, setStep] = useState<any>(1);
    const [system, setSystem] = useState<string>("android");

    //* incrementa el valor de prevcount
    const increment = () => {
        if (step >= dataStap.length) return;
        setStep(prevCount => prevCount + 1);
    };

    //* decrementa el valor de prevcount
    const decrement = () => {
        if (step <= 1) return;
        setStep(prevCount => prevCount - 1);
    };


    return (
        <ContainerStep>
            <RowrStep>
                <StepByStep>
                    {
                        dataStap.map((st, index) => {
                            if (step == st.id) {
                                return (
                                    <ContentStep key={index}>
                                        <h3>{st.step}</h3>
                                        <p>{parse(st.text)}</p>
                                        {
                                            step == 1 ?
                                                <ContentSystem>
                                                    <div>{android}</div>
                                                    <div>{appstore}</div>
                                                </ContentSystem> : <></>
                                        }
                                        <ContenButton>
                                            <Buttom
                                                onClick={() => decrement()}
                                                background="--color-text-gray"
                                                disabled={step == 1 ? true : false}
                                                color="--color-text-black">Atras</Buttom>
                                            <Buttom
                                                onClick={() => increment()}
                                                background="--color-text-primary"
                                                color="--color-text-black">Siguiente</Buttom>
                                        </ContenButton>
                                    </ContentStep>
                                )
                            }
                        })
                    }
                </StepByStep>
                <Tutorial>
                    {
                        dataStap.map((st, index) => {
                            if (step == st.id) {
                                return (
                                    <Content key={index}>
                                        <ContenButtonTutorial>
                                            <Buttom
                                                onClick={() => setSystem("android")}
                                                background={system == "android" ? "--color-text-primary" : "--color-text-gray"}
                                                color="--color-text-black">{iconAndroid}Tutoria Android</Buttom>
                                            <Buttom
                                                onClick={() => setSystem("ios")}
                                                background={system == "ios" ? "--color-text-primary" : "--color-text-gray"}
                                                color="--color-text-black">{iconIos}Tutorial IOS</Buttom>
                                        </ContenButtonTutorial>
                                        <Image
                                            src={`/assets/step-by-step/${system}/${st.gif}`}
                                            alt="Imagen step by step"
                                            width={160}
                                            height={220} />
                                    </Content>
                                )
                            }
                        })
                    }
                </Tutorial>
            </RowrStep>
        </ContainerStep>
    );
}

export default Step;