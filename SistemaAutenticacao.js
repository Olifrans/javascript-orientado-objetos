/*

Duck typing é um estilo de codificação de linguagens dinamicamente tipadas onde o tipo de uma 
variável não importa, contanto que seu comportamento seja o desejado. O nome "tipagem de pato" vem da 
expressão "se anda como pato, nada como um pato e faz quack como um pato, então provavelmente é um pato".


Duck typing
Origem: Wikipédia, a enciclopédia livre.
Em programação de computadores com linguagens de programação orientadas a objetos, 
duck typing (em português literal tipagem pato) é um estilo de tipagem em que os métodos e 
ropriedades de um objeto determinam a semântica válida, em vez de sua herança de uma classe 
particular ou implementação de uma interface explicita.[1] O nome do conceito refere-se ao teste do pato, 
atribuído à James Whitcomb Riley (ver a história abaixo), que pode ser expressa como se segue:

Quando eu vejo um pássaro que caminha como um pato, nada como um pato e grasna como um pato, 
eu chamo aquele pássaro de pato.[2]
*/
export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
