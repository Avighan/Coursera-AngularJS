'use strict';
var app = angular.module('NarrowItDownApp',[]);

app.controller('NarrowItDownController',NarrowItDownController);
app.controller('CategoryController',CategoryController);

app.service('MenuSearchService',MenuSearchService);
app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
app.directive('foundItems', foundItems);




function foundItems() {
  var ddo = {
    restrict: "A",
    templateUrl: 'template.html',
    scope:{
    	found: '<',
    	onRemove:'&'	
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  	};

  return ddo;
}




CategoryController.$inject = ['MenuSearchService','$scope'];
function CategoryController(MenuSearchService,$scope){
	var category = this;
	category.search  = function(){ 
		
		 var promise = MenuSearchService.getCategoryItems();
		 promise.then(function (response) {
      		category_found.value = response;

    	})
    	.catch(function (error) {
      		console.log(error);
    	})
		
	};

}


NarrowItDownController.$inject = ['MenuSearchService','$scope'];
function NarrowItDownController(MenuSearchService,$scope){
	var menu = this;
	
	menu.search  = function(searchTerm){ 
		
		 var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
		 promise.then(function (response) {
      	 menu.found = response;

      	 

    	})
    	.catch(function (error) {
      		console.log(error);
    	})

		
	};
	
	menu.removeItem = function (itemIndex) {
    	
    	MenuSearchService.removeItem(itemIndex);
    	
    
  	};
	
  	menu.items_found = function(){
  		
  		if (MenuSearchService.getItems().length === 0){
  			return true;
  		}
  		else{
  			return false;
  		}
  	}
}

MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath){
	var service = this;

	function check_in_word(d,searchTerm){
		var words = searchTerm.split(" ");
		var count = 0;

		for (var i = 0; i < words.length; i++){
			
			
			if (d.toLowerCase().includes(words[i].toLowerCase())){
				count += 1;
			}
		}
		if(count == words.length){
			return true;
		}
		else{
			return false;
		}
	}
	

	function check_repeater(checkItems,results){
			if(checkItems.length > 0){
				
				for (var i =0; i < checkItems.length;i++){
				
					if(checkItems[i].description == results){
							return true;
					}
			
			}
		}
		return false;
	}
	var foundItems = [];
	service.getMatchedMenuItems = function (searchTerm) {
		
    	var response = $http({
      		method: "GET",
      		url: (ApiBasePath + "/menu_items.json")
    	}).then(function(result){
    		foundItems =[];
    		for (var i =0; i < result.data.menu_items.length; i++){
    			if(check_in_word(result.data.menu_items[i].description,searchTerm) && check_repeater(foundItems,result.data.menu_items[i].description) == false  && searchTerm != ''){
    				
    				foundItems.push(result.data.menu_items[i]);	
    				
    			}
    			else if (searchTerm == ''){
    				foundItems =[];
    			}
    			
    		}
    		return foundItems;
    		
    	}).catch(function (error) {
      		console.log(error);
    	});
    	
    	return response;
  		};

  		service.removeItem = function (itemIndex) {
  			
    		foundItems.splice(itemIndex, 1);
  		};
  		service.getItems = function () {
  			console.log(foundItems.length);
    		return foundItems;
  		};

}




