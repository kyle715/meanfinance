/*global angular */
angular.module('cdfinance').controller("profileController", profileController);

<<<<<<< HEAD
function profileController($http) {
  var vm = this;
  console.log("profileController");
  vm.find = function() {
    var symbol = vm.symbol;
    console.log(symbol);
  };
}
=======
function profileController($http, $window, AuthFactory, jwtHelper, $location) {
  var vm = this;
  console.log("profileController");
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
    }).catch(function(error) {
      console.log(error);
    });
    $http.get('/api/users/' + username).then(function(response) {
      vm.balance = response.data;
    });
  }
>>>>>>> b9224a8c1fd99fa03596b6a9ab8bda31577a7fea
