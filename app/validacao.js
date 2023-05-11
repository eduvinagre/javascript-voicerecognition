function validaChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`;
  }

  if (valorMaiorMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: diga um número entre ${menorValor} e ${maiorValor}</div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número da sorte era ${numeroSecreto}
    `;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function valorMaiorMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}
