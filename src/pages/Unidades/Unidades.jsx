import { useState } from "react";
import { Container, CadastroUnidades, UnidadesList } from "../../components/index";
import './Unidades.css'

export default function Unidades() {
    const [unidadeSelecionada, setUnidadeSelecionada] = useState(undefined);
    const [openForm, setOpenForm] = useState(false);

    return (
        <Container title='Unidades'>

            {openForm === false && <UnidadesList setOpenForm={setOpenForm} setUnidadeSelecionada={setUnidadeSelecionada}/>}

            {openForm === true && (
                <CadastroUnidades setOpenForm={setOpenForm} unidadeSelecionada={unidadeSelecionada} setUnidadeSelecionada={setUnidadeSelecionada}/>
            )}
        </Container>
    )
}