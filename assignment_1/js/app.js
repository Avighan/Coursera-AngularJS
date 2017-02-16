// Code goes here
'use strict'
 var app = angular.module('LunchCheck', []);
    app.controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunch = '';
      $scope.style = 'color:black; border-color: black';
      $scope.message = 'Please enter data first';
      $scope.show_or_hide = '';
      $scope.displayMessages = function(){
      		if (splitString($scope.lunch,',') == 0){
      			$scope.message =  'Please enter data first';
      			$scope.style ='color: green;';
      			

      		}else if (splitString($scope.lunch,',') <= 3) {
      			$scope.message =  'Enjoy!';
      			
      			$scope.style = 'border-color: green';
      		}else if (splitString($scope.lunch,',') > 3) {
      			$scope.message =  'Too much!';
      			$scope.style = 'border-color: red';
      			
      		}
      		if ($scope.lunch.length >= 1 && splitString($scope.lunch,',') == 0){
      			$scope.show_or_hide = '1';
      		}
      		else{
      			$scope.show_or_hide = '';
      		}
      		
      }
    function splitString(stringToSplit, separator) {
  		var arrayOfStrings = stringToSplit.split(separator);
  		return arrayOfStrings.filter(String).length;
  	}
};
    
    