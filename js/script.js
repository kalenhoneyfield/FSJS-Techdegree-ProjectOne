/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//an array of objects to hold the quotes, we will need a quote, a source, a citation of some sort, a date, and a tag of some type.
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



/*
  a function to grab a random quote from the quotes array
*/
function getRandomQuote(){
  var rando = Math.floor(Math.random() * quotes.length);;
  return quotes[rando];
}

/*
  rgb values are from 0 to 255. This function generates a random number in that range.
*/
function getRandomColorCode(){
  var rando = Math.floor(Math.random() * 255);;
  return rando;
}

/*
  in order to change the color values for the background of the page, 
  we will use a formated string to supply to the later portions of the background code.
*/
function backgroundRGBValue(){
  var r = getRandomColorCode();
  var g = getRandomColorCode();
  var b = getRandomColorCode();
  return "rgb(" + [r,g,b].join(',') + ")";
}

/*
  Step 1: Get the quote object from the quotes array
  Step 2: Wrap html tags around the pieces of the quote that exist
  Step 3: Set the div to the value of the formated quote
  Step 4: Get a formatted RBG string
  Step 5: Set the background of the page ad the background of the button to the formatted RGB string
*/
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
  every 20 seconds after the page has loaded, the printQuote function should be fired
  This may result in wonky quote loading if the user clicks the button above at or near the time the interval is set for
*/
setInterval(function() {
  printQuote();
}, 20000 );

// Remember to delete the comments that came with this file, and replace them with your own code comments.