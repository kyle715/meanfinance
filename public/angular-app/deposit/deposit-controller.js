angular.module('cdfinance').controller('DepositController', DepositController);

function DepositController($http, $window, AuthFactory, jwtHelper, $location) {
  var vm = this;
  
  vm.deposit = function() {
    if ($window.sessionStorage.token && AuthFactory.isLoggedIn) {
      var token = $window.sessionStorage.token;
      var decodedToken = jwtHelper.decodeToken(token);
      var username = decodedToken.username;
      var data = {"amount" : vm.amount};
      var totalamount = $http.get('/api/users/' + username).then(function(response) {
      vm.balance = response.data;});
      
      
      $http.get('/api/users/' + username).then(function(response) {
      vm.balance = response.data;
      });
      
      $http.put('/api/users/'+ username +"/deposit", data).then(function(response) {
        if (response.status == 200) {
          vm.balance += vm.amount;
          vm.message = "$" + vm.amount + " added to account. Total Balance = " + vm.balance; 
        }
      }).catch(function(error) {
        console.log(error);
      })
    } else {
      $location.path('/');
    }
  }
}