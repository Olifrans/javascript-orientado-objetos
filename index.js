import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Olifrans", 77187558418);
const cliente2 = new Cliente("Jack", 7715445418);



const conta1 = new ContaCorrente(101, cliente1);
conta1.depositar(500);
conta1.sacar(250);

const conta2 = new ContaCorrente(102, cliente2);
conta1.transferir(150, conta2);
conta1.depositar(500);
conta2.sacar(300);

//console.log(conta1);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);

