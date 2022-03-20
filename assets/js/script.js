var incomingArray = [];
var myQuotes = [];
var ronQuotes = [];
/****** Make sure to have an ID of btn in HTML.. ********/
/****** Make sure to have an ID of btn in HTML.. ********/
/****** Make sure to have an ID of btn in HTML.. ********/
/****** Make sure to have an ID of btn in HTML.. ********/
/****** Make sure to have an ID of btn in HTML.. ********/
var myBtn = document.querySelector("#btn");
var containerEl = document.querySelector("#container");


var getQuotes = function () {
  var apiUrl = "https://movie-quote-api.herokuapp.com/v1/quote/"
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        myQuotes.push(data);

      })
    }
  })

}

var ronSwanson = function () {
  var apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        ronQuotes.push(data);
      })
    }
  })
}


displayQuote = function () {
  //console.log(ronQuotes[0]);
  var fiftyfifty = getRandomInt(2);
  if (fiftyfifty == 0) {
    containerEl.innerHTML = "<p>" + myQuotes[0].quote + "</p>"
  }
  else {
    containerEl.innerHTML = "<p>" + ronQuotes[0] + "</p>"
  }


};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



getQuotes();
ronSwanson();
document.getElementById("btn").addEventListener("click", displayQuote);