import TicTacToeGame from "./classes/TicTacToeGame.js"

function createGame(container) {
  const game = new TicTacToeGame(container)
  game.start()
}

createGame(document.querySelector('#game'))
