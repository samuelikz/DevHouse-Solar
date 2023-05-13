import React, { useState, useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import imgLogo2 from '../../../assets/logo2.svg';
import './LoginPage.css';
import { useAuth } from '../../../hooks/auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true }); // redireciona para a página inicial
    }
  }, [token, navigate]);

  const authenticate = async (username, password) => {
    // const response = await fetch('AQUI SERIA UMA API QUE REALIZA A AUTENTICAÇÃO', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: username,
    //     password: password
    //   })
    // });

    // if (!response.ok) {
    //   throw new Error('Usuário ou senha inválidos');
    // }

    // const data = await response.json();

    const data = { token: 'seu-token-aqui' };
    return data.token;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await authenticate(username, password);
      login(token);
      localStorage.setItem('token', token);
      navigate('/'); // redireciona para a página inicial após o login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    token ? <Navigate to="/" replace /> : // redireciona para a página inicial se já estiver autenticado
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
            <form className='form-log' onSubmit={handleSubmit}>
              <input type="text" placeholder='User Name' value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              {error && <p className="error-message">{error}</p>}
              <div className='actions'>
                <button className='btn' type="submit">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
