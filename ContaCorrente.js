// import { Cliente } from "./Cliente";
// import React from "react";

//#saldo = 0; --> https://github.com/tc39/proposal-class-fields#private-fields
export class ContaCorrente {
  agencia;
  cliente;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
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




// export class ContaCorrente {
//   static numeroDeContas = 0;

//   set cliente(novoValor) {
//     if (novoValor instanceof Cliente) {
//       this.Cliente = novoValor;
//     }
//   }

//   get cliente() {
//     return this._cliente;
//   }

//   get saldo() {
//     return this.saldo;
//   }

//   constructor(agencia, cliente) {
//     this.agencia = agencia;
//     this.cliente = cliente;
//     ContaCorrente.numeroDeContas += 1;
//   }

//
//
// }
