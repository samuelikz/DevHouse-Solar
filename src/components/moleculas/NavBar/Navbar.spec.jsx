import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Navbar from "./Navbar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe("Navbar", () => {
  const logout = jest.fn();

  test("se o componente é renderizado corretamente: com logo e 4 botões 3 links", () => {
    const navigate = jest.fn();
    const location = { pathname: "" };
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue(location);

    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    //capturar logo
    const solarLogo = screen.getByAltText("Solar Energia Logo");
    expect(solarLogo).toBeInTheDocument();

    //capturar numero de botões
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);

    //simular click na rota '/' para verificar a rota
    const buttonDashboard = screen.getByRole("button", { name: /Dashboard/i });
    fireEvent.click(buttonDashboard);
    expect(navigate).toHaveBeenCalledWith("/");

    //simular click na rota '/unidades-consulmidora' para verificar a rota
    const buttonUnidadeConsumidora = screen.getByRole("button", {
      name: /Unidade consumidora/i,
    });

    fireEvent.click(buttonUnidadeConsumidora);
    expect(navigate).toHaveBeenCalledWith("/unidades-consulmidora");

    //simular click na rota '/cadastro-energia-gerada' para verificar a rota
    const buttonCadastroEnergiaGerada = screen.getByRole("button", {
      name: /Cadastro de energia gerada/i,
    });

    fireEvent.click(buttonCadastroEnergiaGerada);
    expect(navigate).toHaveBeenCalledWith("/cadastro-energia-gerada");
  });

  test("se o botão da rota padrão inicia selecionado e os demais não estão selecionados", () => {
    const navigate = jest.fn();
    const location = { pathname: "/" };
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue(location);
  
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  
    const buttonDashboard = screen.getByRole("button", { name: /Dashboard/i });
    expect(buttonDashboard).toHaveClass("selected");
  
    const buttonUnidadeConsumidora = screen.getByRole("button", { name: /Unidade consumidora/i });
    expect(buttonUnidadeConsumidora).not.toHaveClass("selected");
  
    const buttonCadastroEnergiaGerada = screen.getByRole("button", { name: /Cadastro de energia gerada/i });
    expect(buttonCadastroEnergiaGerada).not.toHaveClass("selected");
  });

  test("se a página é alterada corretamente ao clicar em algum botão", () => {
    const navigate = jest.fn();
    const location = { pathname: "" };
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue(location);
  
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  
    const buttonDashboard = screen.getByRole("button", { name: /Dashboard/i });
    fireEvent.click(buttonDashboard);
    expect(navigate).toHaveBeenCalledWith("/");
  
    const buttonUnidadeConsumidora = screen.getByRole("button", { name: /Unidade consumidora/i });
    fireEvent.click(buttonUnidadeConsumidora);
    expect(navigate).toHaveBeenCalledWith("/unidades-consulmidora");
  
    const buttonCadastroEnergiaGerada = screen.getByRole("button", { name: /Cadastro de energia gerada/i });
    fireEvent.click(buttonCadastroEnergiaGerada);
    expect(navigate).toHaveBeenCalledWith("/cadastro-energia-gerada");
  });
  
  test("se a página é alterada corretamente para a rota padrão ao clicar no logo", () => {
    const navigate = jest.fn();
    const location = { pathname: "/unidades-consulmidora" }; // Define uma rota diferente da padrão
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue(location);
  
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  
    const logo = screen.getByAltText("Solar Energia Logo");
    fireEvent.click(logo);
    expect(navigate).toHaveBeenCalledWith("/"); // Verifica se a função navigate foi chamada com a rota padrão ("/")
  });
  
});
