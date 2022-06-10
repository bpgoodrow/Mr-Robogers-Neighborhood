# Mr Robogers Neighborhoood
By Ben Goodrow

This is a html/css/javascript web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with certain substitutions. Numbers that contain 1 all digits are replaced with "Beep!". Numbers that contain 2 all digits are replaced with "Boop!". Numbers taht contain a 3 all digits are replaced with "Won't you be my neighbor?".

## Link to GitHubPages
[https://bpgoodrow.github.io/mr-robogers-neighborhood/](https://wwww.bpgoodrow.github.io/mr-robogers-neighborhood/)

## Technololgies Used
* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description
This web application with gather number input from the user and return substitutions: "Beep!", "Boop!", or "Won't you be my neighbor?" based on whether the number contains 1, 2, or 3.

## Setup/Installation Requirements
* Clone this repository to your desktop.
* Navigate to the top level of the portfolio-landing-page-directory.
* Open index.html in your browser.
* Additionally open [https://bpgoodrow.github.io/mr-robogers-neighborhood/](https://wwww.bpgoodrow.github.io/mr-robogers-neighborhood/) in your web browser.

## Known Bugs
* N/A

## License
MIT

Copyright <2022> <Benjamin Goodrow>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Tests

Describe: beepBoop()

Test:"It should return an array of numbers from 0 to the users inputted number"
Code: beepBoop(5)
Expected Output: [0, 1, 2, 3, 4, 5]