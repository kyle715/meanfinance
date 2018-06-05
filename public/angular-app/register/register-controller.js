angular.module('cdfinance').controller('RegisterController', RegisterController);

function RegisterController($http) {
  var vm = this;

  vm.register = function() {
    var user = {
      username: vm.username,
      password: vm.password
    };
    
      if (vm.password !== vm.passwordRepeat) {
        vm.error = 'Please make sure the passwords match.';
      } if (vm.password.length <= 6 || vm.password.length > 14) { 
          vm.error = 'Password must be between 6 and 14 characters in length.' 
        } 
          var letters = /[a-z]/;
          // if there are no lowercase letters
          if (!letters.test(vm.password)) {
            vm.error = 'Password must contain at least one lowercase letter (a-z).';  
    }
    
    
  };  
}


// $http.post('/api/users/register', user).then(function(result) {
        //   console.log(result);
        //   vm.message = 'Successful registration, please login.';
        //   vm.error = '';
        // }).catch(function(error) {
        //   console.log(error);
        // });