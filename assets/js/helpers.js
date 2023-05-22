export function geraNumeroAleatorio(max) {
  const numero = Math.floor(Math.random() * max + 1);

  return numero;
}
