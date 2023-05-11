function validaChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`;
    return;
  }

  if (valorMaiorMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: diga um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número da sorte era ${numeroSecreto}

    <div><button id=novamente class=jogar>Jogar novamente</button></div>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>
        O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>
      </div>`;
  } else {
    elementoChute.innerHTML += `<div>
        O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>
      </div>`;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function valorMaiorMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "novamente") {
    window.location.reload();
  }
});
