angular.module('cdfinance').controller('RegisterController', RegisterController);

function RegisterController($http) {
  var vm = this;

  vm.register = function() {
    var user = {
      username: vm.username,
      password: vm.password
    };
	
	// using the required HTML tags, both username and password are required to submit
	// logic below checks if password and password repeat are the same
	// if they are the same, and password meets min requirements
	// the user is registered
    
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");  
    
if (vm.password !== vm.passwordRepeat) {
      vm.error = 'Please make sure the passwords match.';
      vm.error = '';
    } else {
    		if (letter.classList == "invalid" || capital.classList == "invalid" || number.classList == "invalid" || length.classList == "invalid") {
    			vm.error = 'Password must meet requirements';
    		} else {
		      $http.post('/api/users/register', user).then(function(result) {
		      console.log(result);
		      vm.message = 'Successful registration, please login.';
		      vm.error = '';
		      }).catch(function(error) {
		        console.log(error);
		      });
	  		}
  	}
	}; 
}