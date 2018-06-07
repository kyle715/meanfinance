var https = require('https');
<<<<<<< HEAD
var _apiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=1PO9VNXTLC4Z3GJR&outputsize=compact"
=======
var _apiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=L87H46XYEIL1HK5O&outputsize=compact"
>>>>>>> 859a596a69ab4661c27ecfd766c859172bb5227a

module.exports.getPrice = function(req, res, symbol) {
  
  var url = _apiUrl + "&symbol=" + symbol
  
  console.log(url);

  var request = https.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
      data,
      route;

    response.on("data", function (chunk) {
      buffer += chunk;
    }); 

    response.on("end", function (err) {
      if (err) {
        res
          .status(500)
          .json(err)
      } else {
        // finished transferring data
        // dump the raw data
        data = JSON.parse(buffer);
        // console.log(data);
        var stockData = data['Time Series (Daily)']
        var keys = Object.keys(stockData);
        var price = parseFloat(stockData[keys[0]]['4. close']);
        res
          .status(200)
          .json({"price" : price});
      }
    }); 
  }); 
}

module.exports.returnPrice = function(symbol) {
  var url = _apiUrl + "&symbol=" + symbol
  console.log(url);
  var request = https.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
      data,
      route;

    response.on("data", function (chunk) {
      buffer += chunk;
    }); 

    response.on("end", function (err) {
      if (err) {
        return err
      } else {
        // finished transferring data
        // dump the raw data
        data = JSON.parse(buffer);
        // console.log(data);
        var stockData = data['Time Series (Daily)']
        var keys = Object.keys(stockData);
        return parseFloat(stockData[keys[0]]['4. close']);
      }
    }); 
  }); 
}