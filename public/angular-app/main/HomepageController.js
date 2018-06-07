/* global angular $ key*/
angular.module('cdfinance').controller('HomepageController', HomepageController);

    function HomepageController($http) {
        var vm = this;
        console.log("vm = ",vm);
        var key = "53858d4a98684eababb6df2b285aa621";
        console.log(key);
        vm.title = 'meanfinance app';
        var url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+ key; 
        $http({
            method: "GET",
            url : url,
        }).then(function(response) {
        console.log(response);
        vm.stories = response.data.articles;
    });
    }