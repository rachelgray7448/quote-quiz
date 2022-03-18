var quotes = [];
var ronQuotes = [];
var time = 60;


var getQuotes = function() {
    var apiUrl = "https://movie-quote-api.herokuapp.com/v1/quote/"
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // pass response
                console.log(data);
                quotes.push(data);
                console.log(quotes);
                console.log(data.quote)
                console.log(data.role);
                console.log(data.show);
            })
        }
    })
}

var ronSwanson = function() {
    var apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                ronQuotes.push(data);
                console.log(ronQuotes);
        })
     }
    })
}

// display the quote/question
displayQuote = function () {

};

// timer function
setInterval(function () {
    time --;
    console.log(time);
}(1000))



getQuotes();
ronSwanson();