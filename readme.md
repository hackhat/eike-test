## Setup

Run `npm install`.

To run in dev mode run the command `grunt serve`.


## Process:

 - Generated project with webapp generator: In this way everything is already setup
   and I can focus on the task instead of the setup of the project.
 - Created tests;
 - Implemented the logic code;
 - Implemented the user interface;




## Programming assignment:

The goal is to allow the user to type in a text area and display the following information about the text that is typed:
1) number of consonants that appear in the text
2) number of vowels that appear in the text
2) the top 3 consonants and top 3 vowels used and how many times they appear in the text.

This all has to update as the user is typing.

We'd like to see how you would handle this problem without using any MV* frameworks.
jQuery or utility libraries are okay if you feel like you need any.

Things we would like to see:

- Unit tests (testing framework of your choice, headless or in-browser doesn't matter)
- Efficient and fast. Typing shouldn't cause any freezing.
- Separation of concerns. The DOM updates should be handled separately from the other logic.
- It should also work in IE8+ (we'll have to support IE8 for the near future unfortunately).
