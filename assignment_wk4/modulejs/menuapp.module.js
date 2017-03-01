'use strict';
var app = angular.module('MenuApp', ['ui.router','data']);
app.filter('get_alphabet', function() {
	return function(alpha){

		return alpha.replace(/[^a-zA-Z]/g, '');	
	}
	
});