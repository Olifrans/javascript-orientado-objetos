export class Funcionario {
  constructor(nome, salario, cpf) {
    if (this.constructor == Funcionario) {
      throw new Error(
        "Não é possivél instaciar o objeto Funcionario Diretamente-->Class Abstrata"
      );
    }

    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this._senha;
  }

  autenticar(senha) {
    return senha == this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }
}
