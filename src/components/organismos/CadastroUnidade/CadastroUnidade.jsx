import { Button } from "../../index";
import { useState } from "react";

import './CadastroUnidade.css';

export default function CadastroUnidade({ setOpenForm, unidadeSelecionada, setUnidadeSelecionada }) {
    const emptyState = {
        apelido: "",
        local: "",
        marca: "",
        modelo: "",
        ativa: false,
    };

    const [formulario, setFormulario] = useState(unidadeSelecionada || emptyState);

    const salvarFormulario = (event) => {
        event.preventDefault();
        if (unidadeSelecionada && unidadeSelecionada.id) {
          fetch(`http://localhost:3000/unidades/${unidadeSelecionada.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formulario),
          });
        } else {
          fetch("http://localhost:3000/unidades", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formulario),
          });
        }
        setUnidadeSelecionada(emptyState);
        setOpenForm(false);
      };

    return (
        <section>
            <form className="form" onSubmit={salvarFormulario}>
                <label htmlFor="apelido">Apelido</label>
                <input type="text" placeholder="Apelido" id="apelido" name="apelido" autoComplete="off" value={formulario.apelido} onChange={(e) => { setFormulario({ ...formulario, apelido: e.target.value }) }} required/>
                <label htmlFor="local">Local</label>
                <input type="text" placeholder="Local" id="local" name="local" autoComplete="off" value={formulario.local} onChange={(e) => { setFormulario({ ...formulario, local: e.target.value }) }} required/>
                <label htmlFor="marca">Marca</label>
                <input type="text" placeholder="Marca" id="marca" name="marca" autoComplete="off" value={formulario.marca} onChange={(e) => { setFormulario({ ...formulario, marca: e.target.value }) }} required/>
                <label htmlFor="modelo">Modelo</label>
                <input type="text" placeholder="Modelo" id="modelo" name="modelo" autoComplete="off" value={formulario.modelo} onChange={(e) => { setFormulario({ ...formulario, modelo: e.target.value }) }} required/>

                <div className="form-active">
                    <input type="checkbox" id="ativo" checked={formulario.ativa} onChange={(e) => setFormulario({ ...formulario, ativa: e.target.checked })} />
                    <label htmlFor="ativo">Ativo</label>
                </div>
                <div className="form-active">
                    <Button className='button blue' type='submit'>Salvar</Button>
                    <Button className='button danger' onClick={() => setOpenForm(false)}>Fechar</Button>
                </div>
            </form>
        </section>
    )
}