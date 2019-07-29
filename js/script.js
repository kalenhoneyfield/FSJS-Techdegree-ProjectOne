/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
      quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
      source: "Harold Abelson",
      citation: "Structure and Interpretation of Computer Programs",
      year: "1996",
      tagcloud: ["programming", "book", "verified"]
  },
  {
      quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      source: "John Woods",
      citation: "",
      year: "1991",
      tagcloud: ["programming", "humor", "usenet", "verified"]
  },
  {
      quote: "if you can write \"hello world\" you can change the world",
      source: "Raghu Venkatesh",
      citation: "",
      year: "",
      tagcloud: ["programming","unverified"]
  },
  {
      quote: "If you don't know where you're going, any road'll take you there",
      source: "George Harrison",
      citation: "Any Road, Brainwashed",
      year: "2003",
      tagcloud: ["music", "philosophy", "verified"]
  },
  {
      quote: "Those people who think they know everything are a great annoyance to those of us who do.",
      source: "Isaac Asimov",
      citation: "The Mammoth Book of Zingers, Quips, and One-Liners",
      year: "2004",
      tagcloud: ["book", "philosophy", "verified"]
  },
  {
      quote: "Life is so short. Why waste a single day of it doing something that doesn't matter, that doesn't try to do something big?",
      source: "Dean Kamen",
      citation: "Iconoclasts: Isabella Rosselini & Dean Kamen",
      year: "2006",
      tagcloud: ["tv", "philosophy", "verified"]
  },
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(){
  var rando = Math.floor(Math.random() * quotes.length);;
  return quotes[rando];
}

function getRandomColorCode(){
  var rando = Math.floor(Math.random() * 255);;
  return rando;
}

function backgroundRGBValue(){
  var r = getRandomColorCode();
  var g = getRandomColorCode();
  var b = getRandomColorCode();
  return "rgb(" + [r,g,b].join(',') + ")";
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote(){
  var quoteObject = getRandomQuote();
  var quoteWithHTMLtags = "";

  quoteWithHTMLtags += "<p class=\"quote\">" + quoteObject.quote + "</p>";
  quoteWithHTMLtags += "<p class=\"source\">" + quoteObject.source ;
  if (quoteObject.citation){
    quoteWithHTMLtags += "<span class=\"citation\">" + quoteObject.citation;
  }
  if (quoteObject.year){
    quoteWithHTMLtags += "<span class=\"citation\">" + quoteObject.year;
  }
  quoteWithHTMLtags += "</p>";
  //if the tagcloud has stuff in it, lets display it 
  //as it is an array, we wneed to join the items together to output a string
  if (quoteObject.tagcloud.length > 0){
    quoteWithHTMLtags += "<p class=\"tags\">" + quoteObject.tagcloud.join(', ') + "</p>";
  }
  //place the quote into the div for display
  var el = document.getElementById("quote-box");
  el.innerHTML = quoteWithHTMLtags;

  //get a color for the background
  //we will set both the background of the page and the background of the button to the same color
  var color = backgroundRGBValue();

  document.body.style.backgroundColor = color;
  var button = document.getElementById("loadQuote");
  button.style.backgroundColor = color;
}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*

*/
setInterval(function() {
  printQuote();
}, 10000 );

// Remember to delete the comments that came with this file, and replace them with your own code comments.