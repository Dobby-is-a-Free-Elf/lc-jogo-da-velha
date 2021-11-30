class TicTacToeGame {
  __hasStarted = false

  constructor() {
    return {
      start: this.start.bind(this)
    }
  }

  start() {
    if (!this.__hasStarted) {
      console.log('Começando o jogo!')
      this.__hasStarted = true
    }
  }
}

function createGame() {
  const game = new TicTacToeGame()
  game.start()
}

createGame()
