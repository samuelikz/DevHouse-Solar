import { useEffect, useState } from "react";
import Button from "../../atomos/Button/Button";
import './CadastroMensal.css'

export default function CadastroMensal() {
    const [unidades, setUnidades] = useState([])

    const [formValues, setFormValues] = useState({
        apelido: '',
        data: '',
        totalKwGerado: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const { apelido, data, totalKwGerado } = formValues;
        const body = JSON.stringify({ apelido, data, totalKwGerado })

        fetch('http://localhost:3000/gerados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));

        setFormValues({
            apelido: '',
            data: '',
            totalKwGerado: '',
        });
    };

    const getData = () => {
        fetch("http://localhost:3000/unidades", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section>
            <form className="form-g-cadastro" onSubmit={handleSubmit}>

                <label htmlFor="unidade">Unidade Geradora</label>
                <select id="unidade" name="unidade" autoComplete="off" required onChange={(e) => setFormValues({ ...formValues, apelido: e.target.value })}>
                    <option value="" disabled selected>Selecione uma unidade</option>
                    {unidades.map((unidade) => (
                        <option value={unidade.apelido} key={unidade.id}>{unidade.apelido}</option>
                    ))}
                </select>

                <label htmlFor="data">Dia/Mês/ano</label>
                <input type="date" id="data" name="data" min="1780-01-01" max="2080-01-01" value={formValues.data}
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            data: e.target.value,
                        })
                    } required />


                <label htmlFor="gerado">Total kw gerado</label>
                <input type="number" placeholder="00 kw" id="gerado" name="gerado" autoComplete="off" value={formValues.totalKwGerado}
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            totalKwGerado: parseInt(e.target.value),
                        })
                    } required />

                <div className="form-g-active">
                    <Button className='button blue' type='submit'>Cadastrar</Button>
                </div>
            </form>
        </section>
    )
}