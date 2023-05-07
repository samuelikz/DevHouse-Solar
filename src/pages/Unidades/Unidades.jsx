import { useEffect, useState } from "react";
import { Container } from "../../components/index";

export default function Unidades() {
    const [unidades, setUnidades] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/unidades')
            .then((response) => response.json())
            .then((data) => setUnidades(data));
    }, [])

    return (
        <Container title='Unidades'>
            <h2>Lista de unidades</h2>

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
                                <button>Editar</button>
                            </td>
                            <td>
                                <button>Eliminar</button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
            <br />
            <br />
            <button>Nova Unidade</button>
        </Container>
    )
}