class TicTacToeGame {
  __hasStarted = false
  __grid = [
    '', '', '',
    '', '', '',
    '', '', '',
  ]
  __players = ['X', 'O']
  __currentPlayer = 0

  constructor() {
    return {
      start: this.start.bind(this)
    }
  }

  __handleClickGrid(index) {
    if (this.__grid[index] !== '') return

    this.__grid[index] = this.__players[this.__currentPlayer]
    this.__currentPlayer = (this.__currentPlayer === 0) ? 1 : 0
    this.__render()
  }

  __render() {
    const gridContainer = document.createElement('div')
    const gameContainer = document.getElementById('game')

    gameContainer.innerHTML = ''
    gridContainer.classList.add('grid')

    this.__grid.forEach((item, index) => {
      const button = document.createElement('button')
      button.innerText = item
      button.addEventListener('click', () => this.__handleClickGrid(index))
      gridContainer.appendChild(button)
    })

    gameContainer.appendChild(gridContainer)
  }

  start() {
    if (this.__hasStarted) return
    
    this.__render()
    this.__hasStarted = true
  }
}


function createGame() {
  const game = new TicTacToeGame()
  game.start()
}

createGame()
