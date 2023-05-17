import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import fetchMock from "jest-fetch-mock";
import Unidades from "../../../pages/Unidades/Unidades";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe("Unidades", () => {
  const navigate = jest.fn();
  const logout = jest.fn();

  const location = { pathname: "" };
  useNavigate.mockReturnValue(navigate);
  useLocation.mockReturnValue(location);

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("se o componente é renderizado corretamente: com título 'Unidades' e lista de unidades", () => {
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <Unidades />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const titulo = screen.getByText("Unidades");
    expect(titulo).toBeInTheDocument();

    const listaUnidades = screen.getByTestId("unit-list");
    expect(listaUnidades).toBeInTheDocument();
  });

  test("se o componente é renderizado corretamente: com título 'Unidades' e lista de unidades", () => {
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter initialEntries={["/unidades"]}>
          <Unidades />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  
    const titulo = screen.getByText("Unidades");
    expect(titulo).toBeInTheDocument();
  
    const listaUnidades = screen.getByTestId("unit-list");
    expect(listaUnidades).toBeInTheDocument();
  });

  test("ao clicar no botão 'Nova unidade', deve renderizar o cadastro de unidade", () => {
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter initialEntries={["/unidades"]}>
          <Unidades />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  
    const botaoNovaUnidade = screen.getByTestId("new-unit");
    fireEvent.click(botaoNovaUnidade);
  
    const cadastroUnidades = screen.getByTestId("cadastro-unidades");
    expect(cadastroUnidades).toBeInTheDocument();
  });
  
  
});
