import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Olifrans", 77187558418);


const contaCorente = new ContaCorrente(cliente1, 101);
contaCorente.depositar(500);
contaCorente.sacar(100);


const contaPopanca = new ContaPoupanca(50, cliente1, 101);
contaPopanca.depositar(500);
contaPopanca.sacar(100);


//console.log(contaCorente);
console.log(contaPopanca);

//console.log(ContaCorrente.numeroDeContas);

