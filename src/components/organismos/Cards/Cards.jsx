import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Cards.css';

export default function Cards() {
  const [totalUnidades, setTotalUnidades] = useState(0);
  const [unidadesAtivas, setUnidadesAtivas] = useState(0);
  const [unidadesInativas, setUnidadesInativas] = useState(0);
  const [totalGerado, setTotalGerado] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/unidades')
      .then(response => response.json())
      .then(data => {
        setTotalUnidades(data.length);
        setUnidadesAtivas(data.filter(unidade => unidade.ativa).length);
        setUnidadesInativas(data.filter(unidade => !unidade.ativa).length);
      })
      .catch(error => console.error(error));

    fetch("http://localhost:3000/gerados")
        .then((response) => response.json())
        .then((data) => {
            const total = data.reduce((acc, item) => acc + item.totalKwGerado, 0);
            setTotalGerado(total);
        })
        .catch(error => console.error(error));

  }, []);

  return (
    <div>
      <section className='lista-card'>
        <Link to='/unidades-consulmidora' className='lista-item'>
          <h4 className='lista-title'>Total de Unidades</h4>
          <span>{totalUnidades}</span>
        </Link>
        <Link to='/unidades-consulmidora' className='lista-item selected'>
          <h4 className='lista-title'>Unidades Ativas</h4>
          <span>{unidadesAtivas}</span>
        </Link>
        <Link to='/unidades-consulmidora' className='lista-item '>
          <h4 className='lista-title'>Unidades Inativas</h4>
          <span>{unidadesInativas}</span>
        </Link>
        <Link to='/cadastro-energia-gerada' className='lista-item '>
          <h4 className='lista-title'>Medida de Energia</h4>
          <span>{totalGerado} kw</span>
        </Link>
      </section>
    </div>
  );
}
