 (function () {
	'use strict'
	var lunches = angular.module("LunchCheck",[])
	lunch.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope','$filter'];

	function LunchCheckController($scope,$filter){
		$scope.lunch="";
	};

})();