'use strict';

var app_categories_items = angular.module('data');


app_categories_items.controller('ItemsListController',ItemsListController);
app_categories_items.component('itemsList',{
	templateUrl: 'items.html',
	controller: ItemsListController,
	bindings:{
		items:'<'
	}

});


ItemsListController.$inject = ['MenuDataService','items','$scope','$stateParams'];
function ItemsListController(MenuDataService,items,$scope,$stateParams){
	var items_list = this;

	items_list.items = items;

	$scope.getalpha = function(alpha){
		return get_alpha(alpha);	
	}
/*
    var promise = MenuDataService.getItemsForCategory();
	
	promise.then(function (response) {
		items_list.items = response.data;
		
  	})
	.catch(function (error) {
		console.log("Something went terribly wrong.");
  	});
  	*/

};

function get_alpha(alpha){
		return  alpha.replace(/[^a-zA-Z]/g, '');
}