//This function returns a random quote object
const getRandomQuote = arr => {
  const max = arr.length;
  const randomInt = Math.floor(Math.random() * max);
  const quoteObject = arr[randomInt]
  return {
    quote: quoteObject,
  }
};

//This function returns all the quotes
const getAllQuotes = arr => {
  return {quotes: arr}
};

//This function returns all the quotes from a specific person
const getSpecificQuotes = (arr, name) => {
  let filteredQuotes = [];
  for (let item of arr) {
    if (item.person === name) {
      filteredQuotes.push(item);
    };
  };
  return {
    quotes: filteredQuotes
  }
};

//This functions adds a new quote to the data
const addQuote = (quoteObject, arr) => {
  arr.push(quoteObject);
  return {quote: quoteObject}
}

module.exports = { getRandomQuote, getAllQuotes, getSpecificQuotes, addQuote };