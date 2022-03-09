import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Olifrans";
cliente1.cpf = 77187558418;

const cliente2 = new Cliente();
cliente2.nome = "Jack";
cliente2.cpf = 7715445418;

const conta1 = new ContaCorrente();
conta1.agencia = 101;
conta1.cliente = cliente1;
conta1.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
conta2.depositar(500);

conta1.transferir(150, conta2);
conta2.sacar(250);
console.log(conta1);
console.log(conta2);
