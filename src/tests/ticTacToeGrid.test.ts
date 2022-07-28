/**
 * @jest-environment jsdom
 */

import { TicTacToeGrig } from "../helpers/TicTacToeGrig";

test("should be initialise without error", () => {
    const ticTacToeGrig = new TicTacToeGrig()
    const parent = document.createElement('div')
    ticTacToeGrig.initialise(parent)
  });

  