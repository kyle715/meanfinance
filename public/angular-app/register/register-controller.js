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



(function(){
	var password = document.querySelector('.password');
	
	var helperText = {
		charLength: document.querySelector('.helper-text .length'),
		lowercase: document.querySelector('.helper-text .lowercase'),
		uppercase: document.querySelector('.helper-text .uppercase'),
		special: document.querySelector('.helper-text .special')
	};
	
	var pattern = {
		charLength: function() {
			if( password.value.length >= 8 ) {
				return true;
			}
		},
		lowercase: function() {
			var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

			if( regex.test(password.value) ) {
				return true;
			}
		},
		uppercase: function() {
			var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

			if( regex.test(password.value) ) {
				return true;
			}
		},
		special: function() {
			var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

			if( regex.test(password.value) ) {
				return true;
			}
		}   
	};
	
	// Listen for keyup action on password field
  password.addEventListener('keyup', function (){
		// Check that password is a minimum of 8 characters
		patternTest( pattern.charLength(), helperText.charLength );
		
		// Check that password contains a lowercase letter		
		patternTest( pattern.lowercase(), helperText.lowercase );
		
		// Check that password contains an uppercase letter
		patternTest( pattern.uppercase(), helperText.uppercase );
		
		// Check that password contains a number or special character
		patternTest( pattern.special(), helperText.special );
    
    // Check that all requirements are fulfilled
    if( hasClass(helperText.charLength, 'valid') &&
			  hasClass(helperText.lowercase, 'valid') && 
			 	hasClass(helperText.uppercase, 'valid') && 
			  hasClass(helperText.special, 'valid')
		) {
			addClass(password.parentElement, 'valid');
    }
    else {
      removeClass(password.parentElement, 'valid');
    }
	});
	
	function patternTest(pattern, response) {
		if(pattern) {
      addClass(response, 'valid');
    }
    else {
      removeClass(response, 'valid');
    }
	}
	
	function addClass(el, className) {
		if (el.classList) {
			el.classList.add(className);
		}
		else {
			el.className += ' ' + className;
		}
	}
	
	function removeClass(el, className) {
		if (el.classList)
				el.classList.remove(className);
			else
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
	
	function hasClass(el, className) {
		if (el.classList) {
			console.log(el.classList);
			return el.classList.contains(className);	
		}
		else {
			new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);	
		}
	}
	
})();
















// $http.post('/api/users/register', user).then(function(result) {
        //   console.log(result);
        //   vm.message = 'Successful registration, please login.';
        //   vm.error = '';
        // }).catch(function(error) {
        //   console.log(error);
        // });