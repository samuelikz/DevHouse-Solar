import { useEffect, useState } from "react";
import { Button } from "../../index";
import './UnidadesList.css'

export default function UnidadesList({ setOpenForm, setUnidadeSelecionada }) {
    const [unidades, setUnidades] = useState([]);
    const [filtro, setFiltro] = useState("todos");

    const getData = () => {
        fetch("https://json-server-fe.vercel.app/unidades")
            .then((response) => response.json())
            .then((data) => setUnidades(data));
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id) => {
        fetch(`https://json-server-fe.vercel.app/unidades/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        getData();
    };

    const handleFiltroChange = (event) => {
        setFiltro(event.target.value);
    };

    const unidadesFiltradas = unidades.filter((unidade) => {
        if (filtro === "ativos") {
            return unidade.ativa === true;
        } else if (filtro === "inativos") {
            return unidade.ativa === false;
        } else {
            return true;
        }
    });

    return (
        <section className="unit-list" data-testid="unit-list">

            <h2 className="sub-title">Lista de unidades</h2>


            <div className="filtro-container">
                <label htmlFor="filtro">Filtrar </label>
                <select id="filtro" value={filtro} onChange={handleFiltroChange}>
                    <option value="todos">Todos</option>
                    <option value="ativos">Ativos</option>
                    <option value="inativos">Inativos</option>
                </select>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Apelido</th>
                        <th>Local</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {unidadesFiltradas.map((unidade) => (
                        <tr key={unidade.id}>
                            <td>{unidade.id}</td>
                            <td>{unidade.apelido}</td>
                            <td>{unidade.local}</td>
                            <td>{unidade.marca}</td>
                            <td>{unidade.modelo}</td>
                            <td>
                                <Button classStyle='green' data-testid="editar" onClick={() => { setUnidadeSelecionada(unidade); setOpenForm(true); }}>
                                    Editar
                                </Button>
                            </td>
                            <td>
                                <Button classStyle='danger' onClick={() => handleDelete(unidade.id)}>Eliminar</Button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
            
            <Button id='new-unit' data-testid="new-unit" classStyle='secondary' onClick={() => setOpenForm(true)}>Nova Unidade</Button>
        </section>
    )
}