(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://amajumder-course5.herokuapp.com')
.config(config)
.filter('get_alphabet', function() {
	return function(alpha){
		if (alpha != undefined){
			return alpha.replace(/[^a-zA-Z]/g, '');	
		}
	}
})
.filter('emptyFilter', function() {
  return function(array) {
    var filteredArray = [];
      angular.forEach(array, function(item) {
        if (item) filteredArray.push(item);
      });
    return filteredArray;  
  };
});

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
