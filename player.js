const imagemLadrao = new Image();
imagemLadrao.src = 'seu-personagem.png';

// E dentro do desenho():
ctx.drawImage(imagemLadrao, jogador.x, jogador.y, jogador.largura, jogador.altura);
