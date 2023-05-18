import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import fetchMock from "jest-fetch-mock";
import Unidades from "../../../pages/Unidades/Unidades";
import UnidadesList from "./UnidadesList"; // Importe o componente UnidadesList

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

  test("se a tabela é renderizada com o cabeçalho correto", () => {
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <UnidadesList />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const idHeader = screen.getByText("ID");
    const apelidoHeader = screen.getByText("Apelido");
    const localHeader = screen.getByText("Local");
    const marcaHeader = screen.getByText("Marca");
    const modeloHeader = screen.getByText("Modelo");

    expect(idHeader).toBeInTheDocument();
    expect(apelidoHeader).toBeInTheDocument();
    expect(localHeader).toBeInTheDocument();
    expect(marcaHeader).toBeInTheDocument();
    expect(modeloHeader).toBeInTheDocument();
  });

  test('renderização correta da primeira linha da tabela', async () => {
    const unidades = [
      { id: 1, apelido: 'Unidade 1', local: 'Local 1', marca: 'Marca 1', modelo: 'Modelo 1', ativa: true },
      { id: 2, apelido: 'Unidade 2', local: 'Local 2', marca: 'Marca 2', modelo: 'Modelo 2', ativa: false },
    ];
  
    fetchMock.mockResponseOnce(JSON.stringify(unidades));
  
    const { getByRole } = render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <UnidadesList />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  
  });

  test('se o botão "Nova Unidade" funciona corretamente', () => {
    const setOpenForm = jest.fn();
  
    render(
      <AuthContext.Provider value={{ logout }}>
        <MemoryRouter>
          <UnidadesList setOpenForm={setOpenForm} />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  
    const newUnitButton = screen.getByTestId('new-unit'); // Selecionar o botão pelo atributo data-testid
  
    fireEvent.click(newUnitButton);
  
    expect(setOpenForm).toHaveBeenCalledTimes(1);
    expect(setOpenForm).toHaveBeenCalledWith(true);
  });
  
});
