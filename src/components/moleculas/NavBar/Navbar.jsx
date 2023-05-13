import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import imgDashboard from '../../../assets/dashboard.svg';
import imgUnidadeConsumidora from '../../../assets/unidade-consumidora.svg';
import imgSair from '../../../assets/sai2.png';
import imgEnegiaGerada from '../../../assets/cadastro-energia-gerada.svg';
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import './Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useContext(AuthContext);

    const isSelected = (pathname) => {
        return location.pathname === pathname ? "selected" : "";
    };

    const handleClick = (pathname) => {
        navigate(pathname);
    };

    const handleLogout = () => {
        logout();
      };

    return (
        <nav className="Navbar">
            <img src={logo} alt="Solar Energia Logo" onClick={() => navigate('/')} />

            <button className={isSelected("/")} onClick={() => handleClick("/")}>
                <img src={imgDashboard} alt="Icone do Dashboard" />
                <span>Dashboard</span>
            </button>

            <button className={isSelected("/unidades-consulmidora")} onClick={() => handleClick("/unidades-consulmidora")}>
                <img src={imgUnidadeConsumidora} alt="Icone da Unidade Consumidora" />
                <span>Unidade consumidora</span>
            </button>

            <button className={isSelected("/cadastro-energia-gerada")} onClick={() => handleClick("/cadastro-energia-gerada")}>
                <img src={imgEnegiaGerada} alt="Icone de Cadastro de Energia Gerada" />
                <span>Cadastro de energia gerada</span>
            </button>

            <button className="isSelected" onClick={handleLogout}>
                <img src={imgSair} alt="Icone Sair" />
                <span>Logout</span>
            </button>

        </nav>
    )
}