import Elementos from './elementos.js';

export function mostraValores(menorValor, maiorValor) {
  const valorStringMaior = maiorValor.toString();
  const valorStringMenor = menorValor.toString();
  Elementos.maiorValor.innerHTML = valorStringMaior;
  Elementos.menorValor.innerHTML = valorStringMenor;
}

export function mostraPalpite(palpite) {
  Elementos.elementoChute.innerHTML = `<div>Você disse:</div>
  <span class="box">${palpite}</span>`;
}

export function mostraAcertou(numeroSecreto) {
  Elementos.conteudoContainer.innerHTML = `<h2>Você Acertou !!</h2>
  <h3> O número secreto era ${numeroSecreto}</h3>
  <div class="botao-container">
  <button id="jogar-novamente" class="btn-jogar" data-reiniciar>Jogar Novamente</button>
  <div>`;
}

export function mostraValorInvalido() {
  Elementos.elementoChute.innerHTML += `<div> Valor Inválido</div>`;
}

export function mostraMensagemForaDoRange(menorValor, maiorValor) {
  Elementos.elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`;
}

export function mostraTelaGameOver() {
  Elementos.conteudoContainer.innerHTML = `
          <h2>Game Over!!!</h2>
          <h3>Pressione o botão para jogar novamente</h3>
          <div class="botao-container">
          <button id="jogar-novamente" class="btn-jogar" data-reiniciar>Jogar Novamente</button>
          <div>
          `;
}
