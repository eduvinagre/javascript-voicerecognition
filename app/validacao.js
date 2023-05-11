function validaChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`;
  }

  if (valorMaiorMenor(numero)) {
    console.log(
      `Valor inválido: o número precisar estar entre ${menorValor} e ${maiorValor}`
    );
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function valorMaiorMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}
