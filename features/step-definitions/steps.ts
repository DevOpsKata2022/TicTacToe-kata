import { Given, When, Then,  } from '@wdio/cucumber-framework';

import TicTacToePage from '../pageobjects/ticTacToe.page';

const pages = {
    TicTacToe: TicTacToePage
}


Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I should see TicTacToe empty grid$/, async () => {
    await expect(TicTacToePage.getGridContain()).not.toHaveTextContaining('O')
    await expect(TicTacToePage.getGridContain()).not.toHaveTextContaining('X')
});

When(/^I tap on square (\d+)$/,async (squareID: string) => {
    TicTacToePage.getCellId(squareID).click()
})

Then(/^I got a "(\w+)" in square (\d+)$/, async (iconeType: string, squareID: string) => {
    const letter = iconeType == 'cirle' ? 'O' : 'X'
    await expect(TicTacToePage.getCellId(squareID)).toHaveTextContaining(letter)
});