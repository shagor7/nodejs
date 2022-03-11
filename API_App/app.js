//dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

//app object scaffoling
const app = {};

//configuration
app.config = {
    timeBetweenQuotes: 1000,
};
//function that prints a random quote
app.printAQuote = function printAQuote() {
    //Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    //get the lenght of the quotes
    const numberIfQuotes = allQuotes.length;

    //pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberIfQuotes);

    //get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    //print the quote to the console
    console.log(selectedQuote);
};

// funtion that loops indefinetely, calling the printaquote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    //create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

app.indefiniteLoop();