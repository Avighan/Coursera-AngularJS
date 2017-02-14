(function () {angular.module("LunchCheck",[])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['scope'];

	function LunchCheckController($scope){
		$scope.entered_word = $scope.lunch;
	}
})();