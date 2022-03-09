import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";




const cliente1 = new Cliente("Olifrans", 77187558418);

const contaCorente = new ContaCorrente(cliente1, 101);
contaCorente.depositar(500);
contaCorente.sacar(100);

const contaPopanca = new ContaPoupanca(50, cliente1, 101);
contaPopanca.depositar(500);
contaPopanca.sacar(100);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(500);
// contaSalario.sacar(100);

//const conta = new Conta(0, cliente1, 101);


console.log(contaCorente);
console.log(contaPopanca);

//console.log(conta);

//console.log(ContaCorrente.numeroDeContas);
