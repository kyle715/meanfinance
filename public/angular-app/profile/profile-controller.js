/*global angular */
angular.module('cdfinance').controller("profileController", profileController);

function profileController($http, $window, AuthFactory, jwtHelper, $location) {
  var vm = this;
  vm.find = function() {
    var symbol = vm.symbol
    console.log(symbol)
  }
  
  
   var token = $window.sessionStorage.token;
    var decodedToken = jwtHelper.decodeToken(token);
    var username = decodedToken.username;
    
    $http.get('/api/users/'+ username +"/stocks").then(function(response) {
      vm.stocks = response.data.stocks;
      vm.prices = response.data.prices;
      vm.username = username;
    }).catch(function(error) {
      console.log(error);
    });
    $http.get('/api/users/' + username).then(function(response) {
      vm.balance = response.data;
    });
    
  }