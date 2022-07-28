import {TicTacToeGrig} from "./helpers/TicTacToeGrig"

const tttGameElem = document.getElementById('tictacToe-game')
const ticTacToeGrig = new TicTacToeGrig()
if(tttGameElem){
  ticTacToeGrig.initialise(tttGameElem)
}

