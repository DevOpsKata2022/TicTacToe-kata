/**
 * @jest-environment jsdom
 */

import { TicTacToeGrig } from "../helpers/TicTacToeGrig";

test("should be initialise without error", () => {
    const ticTacToeGrig = new TicTacToeGrig()
    const parent = document.createElement('div')
    ticTacToeGrig.initialise(parent)
  });
  test("should be initialise and contains 9 empty cell ", () => {
    const ticTacToeGrig = new TicTacToeGrig()
    const parent = document.createElement('div')
    ticTacToeGrig.initialise(parent)
    expect(parent.querySelectorAll('.cell').length).toEqual(9)
    expect(parent.textContent?.trim()).toEqual('')
  });
  