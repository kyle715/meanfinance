/* global angular $ APIKEY key*/
angular.module('cdfinance').controller('HomepageController', HomepageController);

    function HomepageController($http, key) {
        console.log("HomepageController");
        var vm = this;
        vm.title = 'meanfinance app';
        var url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+ "&apikey="+ key;
        console.log(url);
        console.log(vm.title);
        return $http({
            method: "GET",
            url : url
        });
        
    }
