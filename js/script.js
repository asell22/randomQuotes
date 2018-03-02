// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// printQuote function will be called every ten seconds
setInterval(printQuote, 10000)

// data structure containing quotes
var quotes = [
  { quote: 'Ignorance is the softest pillow on which a man can rest his head.',
    source: 'Michel de Montaigne',
    tags: ['philosophy', 'French', '16th Century']
  },
  { quote: 'The truth does not change according to our ability to stomach it.',
    source: 'Flannery O\'Connor',
    tags: ['literature', 'American']
  },
  { quote: 'To enjoy freedom we have to control ourselves.',
    source: 'Virginia Woolf',
    tags: ['literature', 'British']
  },
  {
    quote: 'The soul should always stand ajar, ready to welcome the ecstatic experience.',
    source: 'Emily Dickinson',
    tags: ['literature', 'spiritual', 'American']
  },
  {
    quote: 'The unfed mind devours itself',
    source: 'Gore Vidal',
    tags: ['literature', 'American']
  },
  {
    quote: 'Confine yourself to the present.',
    source: 'Marcus Aurelius',
    tags: ['philosophy', 'Ancient Rome']
  },
  {
    quote: 'Admiration and familiarity are strangers.',
    source: 'George Sand',
    tags: ['literature', 'French', '19th century']
  },
  {
    quote: 'Anything worth doing is worth doing slowly.',
    source: 'Mae West',
    tags: ['film', 'American']
  },
  {
    quote: 'Judge a man by his questions rather than his answers.',
    source: 'Voltaire',
    tags: ['literature', 'philosophy', 'French', '18th Century']
  },
  {
    quote: 'A lover always thinks of his mistress first and himself second; with a husband it runs the other way.',
    source: 'Honore de Balzac',
    tags: ['literature', 'humor', 'French', '19th century']
  },
  {
    quote: 'Happiness is beneficial for the body, but it is grief that develops the powers of the mind.',
    source: 'Marcel Proust',
    tags: ['literature', 'French']
  },
  {
    quote: 'I used to be psychic, but I drank my way out of it.',
    source: 'Mark E. Smith',
    tags: ['music', 'British']
  },
  {
    quote: 'Experience is simply the name we give our mistakes.',
    source: 'Oscar Wilde',
    tags: ['literature', 'Irish']
  },
  {
    quote: 'Necessity is the mother of taking chances.',
    source: 'Mark Twain',
    tags: ['literature', 'American']
  },
  {
    quote: 'Without music, life would be a mistake.',
    source: 'Friedrich Nietszche',
    tags: ['philosophy', 'music', 'German']
  },
  {
    quote: 'Politeness is to human nature what warmth is to wax.',
    source: 'Arthur Schopenhauer',
    tags: ['philosophy', 'German']
  },
  {
    quote: 'If man makes himself a worm he must not complain when he is trodden on',
    source: 'Immanuel Kant',
    tags: ['philosophy', 'German']
  },
  {
    quote: 'It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning.',
    source: 'H.G. Wells',
    citation: 'The Time Machine',
    year: '1895',
    tags: ['literature', 'British', 'science fiction']
  },
  {
    quote: 'We need never be ashamed of our tears.',
    source: 'Charles Dickens',
    citation: 'Great Expectations',
    year: '1890',
    tags: ['literature', 'British', '19th century']
  },
  {
    quote: 'It is sometimes an appropriate response to reality to go insane.',
    source: 'Philip K. Dick',
    citation: 'Valis',
    year: '1981',
    tags: ['science fiction', 'American']
  },
  {
    quote: 'The only lies for which we are truly punished are those we tell ourselves.',
    source: 'V.S. Naipaul',
    citation: 'In a Free State',
    year: '1971',
    tags: ['literature', 'British', 'Trinidadian']
  }
];

// function returns random rgb color value
function getRandomColor() {
  return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256)+')';
}

// function sets the document body's background color to a random color
function setRandomBackgroundColor() {
  var backgroundColor = getRandomColor();
  document.body.style.backgroundColor = backgroundColor;
}

// function plucks a random quote from the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// function returns a stringified html tag
function constructHtmlString(randomQuote) {
  var htmlString = '';
  htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
  htmlString += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }
  htmlString += '</p>';
  return htmlString;
}

/*
  function invokes the setRandomBackgroundColor function and sets a random quote to be the textual content of the div with the id of 'quote-box'
*/
function printQuote() {
  setRandomBackgroundColor();
  var randomQuote = getRandomQuote();
  var htmlString = constructHtmlString(randomQuote);
  document.getElementById('quote-box').innerHTML = htmlString;
}
