/* global angular $ key*/
angular.module('cdfinance').controller('HomepageController', HomepageController);

    function HomepageController($http) {
        var vm = this;
        var key = "53858d4a98684eababb6df2b285aa621";
        vm.title = 'meanfinance app';
        var url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+ key; 
        $http({
            method: "GET",
            url : url,
        }).then(function(response) {
            vm.stories = response.data.articles
               .filter(function(obj) {
                    if (obj.urlToImage == null) {
                        return false;
                    }
                    return true;
                })
                .map(function(obj) {
                    var newObj = {};
                    var title = obj.title;
                    var url = obj.url;
                    var urlToImage = obj.urlToImage;
                    var imgUrl = obj.urlToImage;
                    var imgUrlArr = imgUrl.split(":");
                    //console.log(imgUrlArr);
                    if (imgUrlArr[0] == "http") {
                        imgUrlArr[0] = "https";
                    }
                    urlToImage = imgUrlArr.join(":");
                    newObj.title = title;
                    newObj.url = url;
                    newObj.urlToImage = urlToImage;
                    return newObj;
            });
        }).catch(function(error) {
            if (error) {
                vm.error = error;
            }
        });
      }
    