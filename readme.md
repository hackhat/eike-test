<p align="center">
  <img src ="./docs/repo-header.gif" />
</p>

**[Live example](https://rawgit.com/hackhat/eike-test/v0.0.2/dist/index.html)**

This is a project that will count the consonants and vowel in a certain text. You just have to write some text in the top text input and your character statistics will be updated as you are typing in real time without any lag. 
Below the number of consonants will be displayed the top 3 consonants and how many times they appeared in the text. The same happens for the vowels.


## Setup

**Install**: Clone and run `npm install`.

**Dev mode**: To run in dev mode run the command `grunt serve` (If no browser opens go to: [http://localhost:8000/](http://localhost:8000/)).

**Tests**: To run tests you need to run the command `mocha` (you have to install it previously globally).

**Build**: To build the application run the command `grunt build` and then check the [./dist](./dist)) folder.


## Process:

 - Generated project with webapp generator: In this way everything is already setup
   and I can focus on the task instead of the setup of the project.
 - Created tests;
 - Implemented the logic code;
 - Implemented the user interface;
 - Added compatibility with +IE8;


## Programming assignment:

The goal is to allow the user to type in a text area and display the following information about the text that is typed:
1) number of consonants that appear in the text
2) number of vowels that appear in the text
2) the top 3 consonants and top 3 vowels used and how many times they appear in the text.

This all has to update as the user is typing.

We'd like to see how you would handle this problem without using any MV* frameworks.
jQuery or utility libraries are okay if you feel like you need any.

### Things we would like to see:

**Unit tests** (testing framework of your choice, headless or in-browser doesn't matter)

The [logic](./src/components/TextAnalyzer.js) of the app has been tested [here](./test/TextAnalyzer.js).

**Efficient and fast.** Typing shouldn't cause any freezing.

Yes, you can test it [here](https://rawgit.com/hackhat/eike-test/v0.0.2/dist/index.html).
There was no need to use a webworker in this case ([IE8 also doesn't support them](http://caniuse.com/#search=webworker)).

**Separation of concerns.** The DOM updates should be handled separately from the other logic.

The logic of the app is in the [TextAnalyzer.js](./src/components/TextAnalyzer.js) class and the view part of the app is in the [EikeApp](./src/components/EikeApp.js) module.

**It should also work in IE8+** (we'll have to support IE8 for the near future unfortunately).

<p align="center">
  <img src ="./docs/ie8support.jpg" />
</p>

Yes, has been tested with [browserstack](https://www.browserstack.com) (Win7 @ IE8), but you can also test it by opening [this link](https://rawgit.com/hackhat/eike-test/v0.0.2/dist/index.html) on IE8 browser.
