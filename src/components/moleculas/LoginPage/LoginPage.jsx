import imgLogo2 from '../../../assets/logo2.svg';
import './LoginPage.css'

export default function LoginPagr(){
    return(
        <div className='container-log'>
            <div className='content-log fist-content'>
                <div className='fist-column'>
                    <h2>Bem Vindo</h2>
                    <span>Sistema de Gerenciamento de energia solar</span>
                </div>
            </div>
            <div className='content-log second-content'>
                <div className='second-column'>
                    <div className='form-content'>
                        <img src={imgLogo2} alt="Imagem da logo Painel Solar" />
                        <form className='form-log'>
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