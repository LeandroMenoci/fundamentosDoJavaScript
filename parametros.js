function soma(numero1, numero2) {
  return numero1 + numero2
}

// console.log(soma(2, 10))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade('Leandro', 29))

function multiplica(numero1 = 2, numero2 = 1) {
  return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))