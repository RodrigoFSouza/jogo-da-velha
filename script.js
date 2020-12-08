const btnJogar = document.getElementById('btn-jogar');
const pontuacaoJogador1 = 0;
const pontuacaoJogador2 = 0;

const currentPlayer = '';

const board = [[],[],[]];

btnJogar.addEventListener('click', (event) => {
  mostraEscondeFomulario();
  
  const jogador1 = document.getElementById('jogador1').value;
  const jogador2 = document.getElementById('jogador2').value;

  localStorage.setItem('jogador1', jogador1);
  localStorage.setItem('jogador2', jogador2);
  if (localStorage.getItem('currentPlayer')) {
    if (localStorage.getItem('currentPlayer') === jogador1) {
      currentPlayer = jogador2;
      localStorage.setItem('currentPlayer', jogador2);
    } else {
      currentPlayer = jogador1;
      localStorage.setItem('currentPlayer', jogador1);
    }
  }

  const players = document.querySelector('.player');
  players.innerHTML = `
      <h2>Jogador 1: <strong>${jogador1}</strong> - ${pontuacaoJogador1}</h2>
      <h2 style="text-align: right;">${pontuacaoJogador2} - <strong>${jogador2}</strong>: Jogador 2</h2>
  `;


  criaTabuleiro();
});

const acao = () => {
  if (currentPlayer === jogador1) {
    
  }
}

const criaTabuleiro = () => {
  const tabuleiro = document.querySelector('.tabuleiro');
  tabuleiro.innerHTML = ` 
      <div class="linha">
        <div class="celula"><strong class="xo">${board[0][0]}</strong></div>
        <div class="celula"><strong class="xo">${board[0][1]}</strong></div>
        <div class="celula"><strong class="xo">${board[0][2]}</strong></div>
      </div>
      <div class="linha">
        <div class="celula"><strong class="xo">${board[1][0]}</strong></div>
        <div class="celula"><strong class="xo">${board[1][1]}</strong></div>
        <div class="celula"><strong class="xo">${board[1][2]}</strong></div>
      </div>
      <div class="linha">
        <div class="celula"><strong class="xo">${board[2][0]}</strong></div>
        <div class="celula"><strong class="xo">${board[2][1]}</strong></div>
        <div class="celula"><strong class="xo">${board[2][2]}</strong></div>
      </div>
  `;

  const celulas = document.querySelectorAll('.celula');

  celulas.forEach.addEventListener('click', (e) => {

  })
}



const mostraEscondeFomulario = () => {
  const formulario = document.getElementById('form');
  const jogo = document.getElementById('jogo');
  formulario.style.display = 'none';
  jogo.style.display = 'block';
}