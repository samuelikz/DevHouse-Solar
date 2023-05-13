import { Link } from 'react-router-dom';
import './Cards.css'

export default function Cards() {
    return (
        <div>
            <section className='lista-card'>

                <Link to='/unidades-consulmidora' className='lista-item'>
                    <h4 className='lista-title'>Total de Unidades</h4>
                    <span>0</span>
                </Link>
                <Link to='/unidades-consulmidora' className='lista-item selected'>
                    <h4 className='lista-title'>Unidades Ativas</h4>
                    <span>0</span>
                </Link>
                <Link to='/unidades-consulmidora' className='lista-item '>
                    <h4 className='lista-title'>Unidades Inativas</h4>
                    <span>0</span>
                </Link>
                <Link to='/' className='lista-item '>
                    <h4 className='lista-title'>Medida de Energia</h4>
                    <span>0 kw</span>
                </Link>

            </section>
        </div>
    );
}