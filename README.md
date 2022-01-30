# Wordle Open Source

🔗 http://wordleos.herokuapp.com/

Heavily inspired by [Wordle](https://www.powerlanguage.co.uk/wordle/), I developed Wordle Open Source over the weekend to play it anytime and brush up my front end skills.

Design Decisions: I used a combination of React, Typescript, and Tailwind to build this game. For getting new word each day or finding a word in dictionary, no external API calls are being made. I made this decision after investigating on how the original game is based on. The word match functionality is simple: the word array index increments each day from a fixed game epoch timestamp (only one puzzle per day!) roughly like so

I had wanted to learn TailwindCSS for quite sometime now, so used this in this application. 
## Rules

You have 6 guesses to guess the correct word.
Each guess can be any valid word.

After submitting a guess, the letters will turn gray, green, or yellow.

- Green: The letter is correct, in the correct position.
- Yellow: The letter is correct, but in the wrong position.
- Gray: The letter is incorrect.

## Contributing

Feel free to open an issue for any bugs or feature requests.
