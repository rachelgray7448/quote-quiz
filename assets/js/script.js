var quotes = [];
var time = 60;



var getQuotes = function() {
    var apiUrl = "https://movie-quote-api.herokuapp.com/v1/quote/"
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // pass response
                displayQuote(data);
                console.log(data);
            })
        }
    })
}

var ronSwanson = function() {
    var apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
}

// display the quote/question
displayQuote = function () {

};

// timer function
setInterval(function () {
    time --
}1000;)



getQuotes();
ronSwanson();