'use strict';

var app_categories_component = angular.module('data');

app_categories_component.controller('CategoryListController',CategoryListController);

app_categories_component.component('categoriesList',{
	templateUrl: 'categories.html',

	bindings:{
		categories:'<'
	}

});

CategoryListController.$inject = ['MenuDataService','categories'];
function CategoryListController(MenuDataService,categories){
	var category_list = this;
	category_list.categories =  categories;
	/*
	var promise = MenuDataService.getAllCategories();

	promise.then(function (response) {
		category_list.categories = response.data;
		
  	})
	.catch(function (error) {
		console.log("Something went terribly wrong.");
  	});
  	*/

	
};