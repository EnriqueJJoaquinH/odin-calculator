# The Odin Project's Page Project

## Description

This is the final project of the **Foundations Course** of **The Odin Project** curriculum. The final result of this project is a webpage that works as a calculator of basic operations such as addition, subtraction, multiplication and division, with integers and floating numbers.

## Preview

Open in browser: [odin-calculator-page site](https://enriquejjoaquinh.github.io/odin-calculator/)

- The webpage contains a calculator which has a display and multiple buttons

- The user can click the buttons on the webpage to introduce the operations the calculator will obtain. Alternatively they can use the computer keyboard to type the operation for the calculator to evaluate

- As the user introduces their input, it is shown on the calculator display

- In addition to the number and symbol buttons, there are four buttons for additional features:

  - The *point* button allows the user to introduce floating point numbers. Numbers can have just one floating point, so the button is locked once the user has added a floating point to the current number

  - The *Ans* button lets the user access the result of the last operation calculated. It cannot be pressed more than once before pressing a symbol button, and the user should not combine it with numbers, otherwise the operation will result in 'NaN'

  - The *AC* button wipes out the screen, both the input and the result sections. It can be pressed with the Delete button on the computer keyboard

  - The *DEL* button works as a backspace. In fact, it can be pressed with the Backspace button on the computer keyboard

- The calculation is made once the user presses the equal button, or types '=' or presses the Enter button on the computer keyboard

- If the user tries to type two consecutive symbols, just the last typed remains. Inputs just admit inputs where numbers and symbols are intercalated

- The calculator can compute operations with more than two operands. However, it does not follow the order of operations, and just computes the input sequentially. For example, the input '2 + 3 × 4' will return 20 since the addition was introduced first and is calculated before the multiplication, and not 24 as the order of operations would dictate, that is, calculating first the multiplication and only then the addition

## What did I learn?

- How to use advanced string and array methods to solve problems in a project

- How to handle keyboard events

- How to use CSS variables to guarantee consistency across the styles sheet

- How to use and add style to scroll bars in case that the content of a container overflows
