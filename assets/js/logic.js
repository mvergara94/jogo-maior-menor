import { geraNumeroAleatorio } from './helpers.js';
import {
  mostraValores,
  mostraPalpite,
  mostraAcertou,
  mostraValorInvalido,
  mostraMensagemForaDoRange,
  mostraTelaGameOver,
} from './display.js';
import Elementos from './elementos.js';

const menorValor = 1;
const maiorValor = 1000;
let numeroSecreto = geraNumeroAleatorio(maiorValor);
comecaJogo();
console.log(numeroSecreto);

// CONTROLE DE VOZ
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript;
  mostraPalpite(chute);
  verificaSeChutePossuiValorValido(chute, numeroSecreto);
}
recognition.addEventListener('end', () => recognition.start());

// Lógica do Jogo
export function comecaJogo() {
  mostraValores(menorValor, maiorValor);
}

function verificaSeChutePossuiValorValido(chute, numeroSecreto) {
  const numero = +chute;

  if (chuteinvalido(numero)) {
    if (chute.toUpperCase() === 'GAME OVER') {
      recognition.removeEventListener('end', () => recognition.start());
      mostraTelaGameOver();
      criaBotaoReset();
      document.body.style.backgroundColor = 'black';
    } else {
      mostraValorInvalido();
    }
    return;
  }
  if (numeroForMaiorOuMenorQueOvalorPermitido(numero)) {
    mostraMensagemForaDoRange(menorValor, maiorValor);
    return;
  }

  if (numero === numeroSecreto) {
    recognition.removeEventListener('end', () => recognition.start());
    mostraAcertou(numeroSecreto);
    criaBotaoReset();
  } else if (numero > numeroSecreto) {
    Elementos.elementoChute.innerHTML += `<div class="dica">
    O número secreto é menor <i class="fa-solid fa-arrow-down"></i>
  </div>`;
  } else {
    Elementos.elementoChute.innerHTML += `<div class="dica">
    O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
  </div>`;
  }
}

function criaBotaoReset() {
  const reiniciarBtn = document.querySelector('[data-reiniciar');
  reiniciarBtn.addEventListener('click', () => {
    window.location.reload();
  });
}

function chuteinvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOvalorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
