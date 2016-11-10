var express = require('express');
var app = express();
var port = 8080;

var quotes = [
    { author : 'Marilyn Monroe', text : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."},
    { author : 'Oscar Wilde', text : "Be yourself; everyone else is already taken."},
    { author : 'Albert Einstein', text : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
    { author : 'Bernard M. Baruch', text : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
    { author : 'Frank Zappa', text : "So many books, so little time."},
    { author : 'Marcus Tullius Cicero', text : "A room without books is like a body without a soul."},
    { author : 'Dr. Seuss', text : "You know you're in love when you can't fall asleep because reality is finally better than your dreams."},
];

app.get('/', function(req, res) {
    res.json(quotes);
});

app.get('/quote/random', function(req, res) {
    var id = Math.floor(Math.random() * quotes.length);
    var q = quotes[id];
    res.json(q);
});

app.get('/quote/:id', function(req, res) {
    if(quotes.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    } else if(req.params.id >= 0) {
        var q = quotes[req.params.id];
        res.json(q);
    } else {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }
});

app.listen(port, function () {
    console.log('server is running on ' + port);
});