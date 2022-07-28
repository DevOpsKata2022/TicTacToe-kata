Feature: TicTacToe basic usage

  Scenario: As a user, I can open TicTacToe page

    Given I am on the TicTacToe page
    Then I should see TicTacToe empty grid

  Scenario:  As a user, I can add cirle and cross
    Given I am on the TicTacToe page
    When I tap on square 1
    Then I got a "cirle" in square 1
    When I tap on square 2
    Then I got a "cross" in square 2
    When I tap on square 2
    Then I got a "cross" in square 2
    When I tap on square 3
    Then I got a "cirle" in square 3
    When I tap on square 4
    Then I got a "cross" in square 4
    When I tap on square 5
    Then I got a "cirle" in square 5
    When I tap on square 6
    Then I got a "cross" in square 6
    When I tap on square 7
    Then I got a "cirle" in square 7
    When I tap on square 8
    Then I got a "cross" in square 8
    When I tap on square 9
    Then I got a "cirle" in square 9


