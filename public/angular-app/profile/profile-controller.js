/*global angular */
angular.module('cdfinance').controller("profileController", profileController);

function profileController($http) {
  var vm = this;
  console.log("profileController");
  vm.find = function() {
    var symbol = vm.symbol;
    console.log(symbol);
  };
}