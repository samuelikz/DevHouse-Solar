import { useEffect, useState } from "react";
import { Button } from "../../index";
import './UnidadesList.css'

export default function UnidadesList({ setOpenForm, setUnidadeSelecionada }) {
    const [unidades, setUnidades] = useState([]);

    const getData = () => {
        fetch('http://localhost:3000/unidades')
            .then((response) => response.json())
            .then((data) => setUnidades(data));
    }

    useEffect(() => {
        getData();
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/unidades/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        getData();
    }

    return (
        <section className="unit-list">

            <h2 className="sub-title">Lista de unidades</h2>
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
                    {unidades.map((unidade) => (
                        <tr key={unidade.id}>
                            <td>{unidade.id}</td>
                            <td>{unidade.apelido}</td>
                            <td>{unidade.local}</td>
                            <td>{unidade.marca}</td>
                            <td>{unidade.modelo}</td>
                            <td>
                                <Button classStyle='green' onClick={() => {setUnidadeSelecionada(unidade); setOpenForm(true);}}>
                                    Editar
                                </Button>
                            </td>
                            <td>
                                <Button classStyle='danger' onClick={() => handleDelete(unidade.id)}>Eliminar</Button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
            <br />
            <br />
            <Button id='new-unit' classStyle='secondary' onClick={() => setOpenForm(true)}>Nova Unidade</Button>
        </section>
    )
}