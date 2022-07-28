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
    playerID: number = 0
    playerMarks = ['O', 'X']

    generateEventHandler(cell: Element){
        return () => {
            if(cell.textContent == ''){
                cell.innerHTML = this.playerMarks[this.playerID]
                this.playerID = (this.playerID + 1) % 2
            }
        }
    }
    initialise(parentElement: HTMLElement){
        this.parentElement = parentElement
        this.parentElement.innerHTML = htmlGrid
        this.parentElement
            .querySelectorAll('.cell')
            .forEach(cell => cell.addEventListener('click', this.generateEventHandler(cell)));
    }
}
