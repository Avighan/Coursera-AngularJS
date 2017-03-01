'use strict';


var app_route = angular.module('MenuApp');
app_route.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){
	

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/home',
    templateUrl: 'home.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.html',
    controller: 'CategoryListController as $ctrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        var getvalue = MenuDataService.getAllCategories();

        var output = [];
		getvalue.then(function (response) {
			for (var i = 0; i < response.data.length; i++){
				output.push(response.data[i]);
			}
	  	})
		.catch(function (error) {
			console.log("Something went terribly wrong.");
	  	});
	 
	  	return output;
      }]   
      
    }
  	})
  			
  .state('items', {
    url: '/items/{category_id}',
    templateUrl: 'items.html',
    controller: 'ItemsListController as $ctrl',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        
        var getvalue = MenuDataService.getItemsForCategory();
      	console.log($stateParams.category_id);
        var output = [];
		getvalue.then(function (response) {
			 
			for (var i = 0; i < response.data.length; i++){
				if( $stateParams.category_id == response.data[i].category_id){
					output.push(response.data[i]);	
				}
				else if ($stateParams.category_id == ''){
					output.push(response.data[i]);
				}
				
			}
	  	})
		.catch(function (error) {
			console.log("Something went terribly wrong.");
	  	});
	  	
	  	return output;
      }]   
      
    }
  });

  // Redirect to home page if no other URL matches
	//$urlRouterProvider.otherwise('/home');
/*
  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getItems();
      }]
    }
  })

  // Item detail
  .state('mainList.itemDetail', {
    // url: '/item-detail/{itemId}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    }
    });
*/

}


