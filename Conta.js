//#saldo, #cliente --> https://github.com/tc39/proposal-class-fields#private-fields

import { Cliente } from "./Cliente.js";

//Class Abstrata
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Por questão de segurança voce não deveria instaciar um objeto do tipo Conta Diretamente"
      );
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  //Método Acessor de atribuição Set
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  //Método Acessor de acesso Get
  get cliente() {
    return this._cliente;
  }

  //Método Acessor de acesso Get
  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    let taxa = 1;
    return this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
