// import { Cliente } from "./Cliente";
// import React from "react";

// export class ContaCorrente {
//   static numeroDeContas = 0;
//   agencia;
//   _cliente;
//   saldo;

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

//   sacar(valor) {
//     if (this._saldo >= valor) {
//       this._saldo >= valor;
//       return valor;
//     }
//   }

//   depositar(valor) {
//     if (valor <= 0) {
//       return valor;
//     }
//     this._saldo += valor;
//   }

//   transferir(valor, conta) {
//     const valorSacado = this.sacar(valor);
//     conta.depositar(valorSacado);
//   }
// }
