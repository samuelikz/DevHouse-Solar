# DevHouse Solar ☀️🏠

## 📝 Descrição do Projeto

![recording](https://netlify-cocoon.netlify.app/.netlify/functions/fetch?code=307&path=eyJzaXRlX2lkIjoiMGE1NmVhZWUtY2FhNC00ZTY2LWE0ZWQtM2FlMTEwZmY5MzA4IiwiZGVwbG95X2lkIjoiNjQ2MTFhY2NlZTUwY2UwMDA4ZWVlZmQ2IiwiaWQiOiJjODE3ZDdiMy05Zjg4LTQ1MzMtYjA1ZC00MmUzMzIwZjY2MDYifQ==)

[Open Deploy Preview](https://deploy-preview-17--solar-new-energy.netlify.app/) · [Mark as Resolved](https://app.netlify.com/cdp/resolve?deployID=64611accee50ce0008eeefd6&commentID=64611ba022a1e12cd2ab9255&resolution=resolved)
DevHouse Solar é uma aplicação web desenvolvida para gerenciar e facilitar a reserva de casas solares, oferecendo uma solução moderna para locação de imóveis com foco em sustentabilidade e energia renovável.

## 🚀 Funcionalidades Principais

- **Gerenciamento de Casas**
  - Cadastro de novas casas solares
  - Listagem de casas disponíveis
  - Detalhes completos de cada imóvel

- **Sistema de Reservas**
  - Reserva de casas
  - Verificação de disponibilidade
  - Gestão de datas de ocupação

- **Autenticação de Usuários**
  - Registro de novos usuários
  - Login e logout
  - Perfil do usuário

- **Recursos Sustentáveis**
  - Informações sobre eficiência energética
  - Destaque para características solares dos imóveis

## 🛠️ Tecnologias Utilizadas

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Multer (upload de imagens)

- **Frontend**
  - HTML5
  - CSS3
  - JavaScript
  - Possibly React.js ou template engine

- **Ferramentas de Desenvolvimento**
  - Nodemon
  - Mongoose
  - Insomnia/Postman (testes de API)
  - Git

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- MongoDB
- npm ou Yarn
- Postman ou Insomnia (opcional, para testes de API)

## 🔧 Instalação

### Clone o Repositório
```bash
git clone https://github.com/samuelikz/DevHouse-Solar.git
cd DevHouse-Solar
```

### Instale as Dependências
```bash
npm install
```

### Configuração do Ambiente
1. Crie um arquivo `.env` na raiz do projeto
2. Adicione as seguintes variáveis:
```
MONGODB_URI=sua_conexão_mongodb
PORT=3333
SECRET_KEY=sua_chave_secreta
```

### Inicie o Servidor
```bash
npm start
# ou
npm run dev
```

## 🧪 Testes

### Executar Testes
```bash
npm test
```

## 📖 Rotas Principais da API

- `POST /users` - Registro de usuário
- `POST /login` - Autenticação
- `GET /houses` - Listar casas solares
- `POST /houses` - Cadastrar nova casa
- `POST /reservas` - Fazer reserva
- `GET /reservas` - Listar reservas

## 🐳 Docker (Opcional)

### Construir Imagem
```bash
docker build -t devhouse-solar .
```

### Executar Container
```bash
docker run -p 3333:3333 devhouse-solar
```

## 🚀 Deploy

Plataformas recomendadas:
- Heroku
- DigitalOcean
- AWS
- Railway

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## ⚠️ Considerações de Segurança

- Utilize senhas fortes
- Proteja suas credenciais de banco de dados
- Mantenha as dependências atualizadas
- Implemente autenticação robusta

## ⚖️ Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Samuel Nunes da Silva
- GitHub: [samuelikz](https://github.com/samuelikz)
- LinkedIn: [Samuel Nunes da Silva](https://www.linkedin.com/in/samuel-nunes-da-silva-057899133/)

---

**Desenvolvido com ❤️ por Samuel Nunes da Silva**

**Nota:** Este README foi gerado com base nas informações disponíveis no repositório. Ajustes podem ser necessários para refletir precisamente o estado atual do projeto.

