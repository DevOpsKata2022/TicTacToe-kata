import { Given, When, Then,  } from '@wdio/cucumber-framework';

import TicTacToePage from '../pageobjects/ticTacToe.page';

const pages = {
    TicTacToe: TicTacToePage
}


Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I should see TicTacToe empty grid$/, async () => {
    return "pending"
});

When(/^I tap on square (\d+)$/,async (squareID: number) => {
    console.log(squareID)
    return "pending"
})

Then(/^I got a "(\w+)" in square (\d+)$/, async (iconeType: string, squareID: number) => {
    return "pending"
});