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
  
  test("when click on cell 1 display O", () => {
    const ticTacToeGrig = new TicTacToeGrig()
    const parent = document.createElement('div')
    ticTacToeGrig.initialise(parent)
    parent.querySelector('.cell')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(parent.textContent?.trim()).toEqual('O')
    expect(parent.querySelector('.cell')?.textContent?.trim()).toEqual('O')
  })
    
  test("when click on cell 1 and cell 2 display O X", () => {
    const ticTacToeGrig = new TicTacToeGrig()
    const parent = document.createElement('div')
    ticTacToeGrig.initialise(parent)
    const cells = parent.querySelectorAll('.cell')
    cells[0]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    cells[1]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(parent.textContent?.trim()).toEqual('O\n  X')
    expect(parent.querySelector('.cell')?.textContent?.trim()).toEqual('O')
  })

  test("when click on cell 1, 2, 3 display O X O", () => {
    const ticTacToeGrig = new TicTacToeGrig()
    const parent = document.createElement('div')
    ticTacToeGrig.initialise(parent)
    const cells = parent.querySelectorAll('.cell')
    cells[0]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    cells[1]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    cells[2]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(parent.textContent?.trim()).toEqual('O\n  X\n  O')
    expect(parent.querySelector('.cell')?.textContent?.trim()).toEqual('O')
  })

  test("when click on cell 1, 1, 3 display O   X", () => {
    const ticTacToeGrig = new TicTacToeGrig()
    const parent = document.createElement('div')
    ticTacToeGrig.initialise(parent)
    const cells = parent.querySelectorAll('.cell')
    cells[0]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    cells[0]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    cells[2]?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(parent.textContent?.trim()).toEqual('O\n  \n  X')
    expect(parent.querySelector('.cell')?.textContent?.trim()).toEqual('O')
  })