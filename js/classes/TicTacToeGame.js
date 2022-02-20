export default class TicTacToeGame {
    __hasStarted = false
    __grid = [
      '', '', '',
      '', '', '',
      '', '', '',
    ]
    __players = ['X', 'O']
    __currentPlayer = 0
    __victory = false
  
    constructor(container) {
      this.__gameContainer = container
      this.__gameContainer.classList.add('game-container')
  
      return {
        start: this.start.bind(this)
      }
    }
  
    __verifyVictory() {
      return (this.__verifyRows() || this.__verifyColumns() || this.__verifyDiagonals())
    }
  
    __verifyRows() {
      return [0, 3, 6].some(index => (
        (this.__grid[index] !== '') &&
        (this.__grid[index] === this.__grid[index + 1]) &&
        (this.__grid[index] === this.__grid[index + 2])
      ))
    }
  
    __verifyColumns() {
      return [0, 1, 2].some(index => (
        (this.__grid[index] !== '') &&
        (this.__grid[index] === this.__grid[index + 3]) &&
        (this.__grid[index] === this.__grid[index + 6])
      ))
    }
  
    __verifyDiagonals() {
      return (
        ((this.__grid[0] !== '') && (this.__grid[0] === this.__grid[4]) && (this.__grid[0] === this.__grid[8])) ||
        ((this.__grid[2] !== '') && (this.__grid[2] === this.__grid[4]) && (this.__grid[2] === this.__grid[6]))
      )
    }
  
    __handleClickGrid(index) {
      if (this.__grid[index] !== '') return
  
      this.__grid[index] = this.__players[this.__currentPlayer]
      this.__currentPlayer = (this.__currentPlayer === 0) ? 1 : 0
      this.__victory = this.__verifyVictory()
      console.log(this.__victory)
      this.__render()
    }
  
    __render() {
      const gridContainer = document.createElement('div')
  
      this.__gameContainer.innerHTML = ''
      gridContainer.classList.add('grid')
  
      this.__grid.forEach((item, index) => {
        const button = document.createElement('button')
        button.innerText = item
        button.addEventListener('click', () => this.__handleClickGrid(index))
        gridContainer.appendChild(button)
      })

      const playerDisplay = this.__renderPlayerDisplay()
      
      this.__gameContainer.appendChild(playerDisplay)
      
      this.__gameContainer.appendChild(gridContainer)

    }

    __renderPlayerDisplay(){
      const displayPlayerContainer  = document.createElement('div')
      const span = document.createElement('span')
      span.classList.add('player-display')
      span.innerText = `Player: ${this.__players[this.__currentPlayer]}`

      displayPlayerContainer.appendChild(span)

      return displayPlayerContainer
    }
  
    start() {
      if (this.__hasStarted) return
  
      this.__render()
      this.__hasStarted = true
    }
  }