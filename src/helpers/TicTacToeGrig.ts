const htmlGrid = `
<div class="tictactoe--container">
  <div id="ttt-cell-1" class="cell"></div>
  <div id="ttt-cell-2" class="cell"></div>
  <div id="ttt-cell-3" class="cell"></div>
  <div id="ttt-cell-4" class="cell"></div>
  <div id="ttt-cell-5" class="cell"></div>
  <div id="ttt-cell-6" class="cell"></div>
  <div id="ttt-cell-7" class="cell"></div>
  <div id="ttt-cell-8" class="cell"></div>
  <div id="ttt-cell-9" class="cell"></div>
</div>`

export class TicTacToeGrig {

    parentElement? : HTMLElement
    initialise(parentElement: HTMLElement){
        this.parentElement = parentElement
        this.parentElement.innerHTML = htmlGrid
    }
}
