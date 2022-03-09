import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(cliente) {
    super(0, cliente, 100);
  }

  //sobreescrevendo sacar
  sacar(valor) {
    let taxa = 1.08;
    return this._sacar(valor, taxa);
  }
}
