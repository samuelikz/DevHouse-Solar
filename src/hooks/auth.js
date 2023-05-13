import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useAuth() {
    const { token, setToken } = useContext(AuthContext);
    
    // outras lógicas de autenticação, como verificação de expiração do token, podem ser adicionadas aqui
    
    return { token, setToken };
  }
  