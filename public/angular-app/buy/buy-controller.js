angular.module('cdfinance').controller("BuyController", BuyController);

function BuyController($http, $window, AuthFactory, jwtHelper, $location) {
  var vm = this;
  
  // This function updates the user balance by removing the funds used to purchase stocks
  // Had to write separate function in order to get data from HTTP requests which are ASYNC
  function updateUserAccountBalance(currentStockPrice, user, amountPurchased) {
        // Cannot send a var of type number, must create an object to send to database
        var newData = {"amount" : currentStockPrice * amountPurchased * -1}
        // The put request will access the user account and change the balance
        $http.put('/api/users/'+ user +"/deposit", newData).then(function(response) {
        if (response.status == 200) {
          console.log("SUCCESS")
        }
      }).catch(function(error) {
        console.log(error);
      })
      }
  
  vm.buy = function() {
    if ($window.sessionStorage.token && AuthFactory.isLoggedIn) {
      var token = $window.sessionStorage.token;
      var decodedToken = jwtHelper.decodeToken(token);
      var username = decodedToken.username;
      
      var data = {"symbol" : vm.symbol, "amount": vm.amount};

      // Post purchased stock to user's portfolio
      $http.post('/api/users/'+ username +"/stocks", data).then(function(response) {
        //check the responses
      }).catch(function(error) {
        console.log(error);
      })
      
      // Get stock price, taken from find-controller.js
      $http.get("/api/stocks/" + vm.symbol).then(function(response) {
      console.log("found stock")
      
      console.log(data)
      var stockprice = response.data.price
      vm.stockprice = stockprice;
      // Once stockprice is found, make call to update user balance  
      updateUserAccountBalance(stockprice, username, vm.amount);
      
      }).catch(function(error) {
        if (error) {
          vm.error = error;
        }
      })
    
    } else {
      $location.path('/');
    }
  }
  vm.capitalize = function() {
  vm.symbol = vm.symbol.toUpperCase();
  };
}