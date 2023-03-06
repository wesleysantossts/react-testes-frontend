import SignUp from './index'
import { render, screen } from '@testing-library/react' // testing-library - lib nativa de teste do React, que tem como base o Jest. Já vem instalada por padrão

describe('Sign Up', () => { // describe(nome, callback) - usado para criar grupos de testes (aparece o nome do grupo no cmd quando roda os testes)
  describe('Layout', () => {
    
    it('has header', () => {
      render(<SignUp />); // renderiza o componente
      const header = screen.queryByRole("heading", { name: "Sign Up" }); // queryByRole(elemento, atributos) - usado para pegar um elemento da tela que contenha algum atributo;  aponta que no cabeçalho (h1) tem um "Sign Up". Ver mais em: https://bit.ly/3Zv8hho
    
      expect(header).toBeInTheDocument() // expect(elemento) - usado para colocar o elemento no qual quer testar; toBeInTheDocument() - aponta que o elemento está na página 
    });
    it('has a username input', () => {
      // const { container } = render(<SignUp />); // render - renderiza a página; container - acessa os elementos do DOM
      // const input = container.querySelector('input'); // pega o input que tem na página
      render(<SignUp />);
      // const input = screen.getByPlaceholderText('username'); // screen - pega a tela atual; getByPlaceholderText - pega o placeholder que tiver esse texto
      const input = screen.getByLabelText('Username'); // getByLabelText - pega a label que tiver esse texto dentro
      expect(input).toBeInTheDocument();
    });
    it('has email input', () => {
      // const { container } = render(<SignUp />);
      // const input = container.querySelectorAll('input');
      // expect(input.length).toBe(2); // toBe(valor) - ser igual ao valor que eu apontar
      render(<SignUp />)
      // const input = screen.getByPlaceholderText('email');
      const input = screen.getByLabelText('Email');

      expect(input).toBeInTheDocument();
    });
    it('has password input', () => {
      render(<SignUp />);
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument();
    });
    it('has password type for password input', () => {
      render(<SignUp />);
      const input = screen.getByLabelText('Password');
      expect(input.type).toBe('password'); // input.type - usado para descobrir o tipo do input
    });
    it('has password repeat input', () => {
      render(<SignUp />);
      const input = screen.getByLabelText('Password Repeat');
      expect(input).toBeInTheDocument();
    });
    it('has password type for password repeat input', () => {
      render(<SignUp />);
      const input = screen.getByLabelText('Password Repeat');
      expect(input.type).toBe('password'); // input.type - usado para descobrir o tipo do input
    });
    it('has SignUp button header', () => {
      render(<SignUp />);
      const button = screen.queryByRole("button", { name: "Sign Up" });
    
      expect(button).toBeInTheDocument();
    });
    it('disables the button initially', () => {
      render(<SignUp />);
      const button = screen.queryByRole("button", { name: "Sign Up" });
    
      expect(button).toBeDisabled(); // toBeDisabled() - que inicia desabilitado
    });

  });
  describe('Interation', () => {
    
  })

});