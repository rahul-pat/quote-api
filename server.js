const express = require('express');
const app = express();

const quotes = require('./data');
const { getRandomQuote, getAllQuotes, getSpecificQuotes, addQuote } = require('./functions');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//Create a router
const quoteRouter = express.Router()
app.use('/api/quotes', quoteRouter)

//GET Route for /api/quotes/random
quoteRouter.get('/random', (req, res) => {
    res.send(getRandomQuote(quotes));
});

//GET Route for /api/quotes or /api/quotes?person=
quoteRouter.get('/', (req, res) => {
    if (req.query.person == undefined) {
        res.send(getAllQuotes(quotes));
    } else if (req.query.person) {
        res.send(getSpecificQuotes(quotes, req.query.person));
    } else {
        res.send([]);
    }
});

//POST route for /api/quotes
quoteRouter.post('/', (req, res) => {
    if (req.query.quote && req.query.person) {
        res.send(addQuote({
            quote: req.query.quote, 
            person: req.query.person
        }, quotes));   
    } else {
        res.status(400).send('Bad request');
    }
});


//Starting server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});