import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Olifrans", 15874, 77187558418);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Frans", 10874, 5451487815);
gerente.cadastrarSenha("123");


const cliente = new Cliente("Fransol", 5451487815, "321");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "321");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
