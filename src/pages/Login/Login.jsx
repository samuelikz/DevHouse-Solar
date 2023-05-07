import imgSolar from '../../assets/foto-painel.svg'
import imgLogo2 from '../../assets/logo2.svg'
import './Login.css'

export default function Login() {
    return (
        <div className='container'>
            <div className='content fist-content'>
                <div className='fist-column'>
                    <h2>Bem Vindo</h2>
                    <span>Sistema de Gerenciamento de energia solar</span>
                </div>
            </div>
            <div className='content second-content'>
                <div className='second-column'>
                    <div className='form-content'>
                        <img src={imgLogo2} alt="Imagem da logo Painel Solar" />
                        <form className='form'>
                            <input type="text" placeholder='User Name' required/>
                            <input type="password" placeholder='Password' required/>
                            <div className='actions'>
                                <button className='btn'>Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}