'use strict';
var app_service = angular.module('data');
app_service.service('MenuDataService', MenuDataService);
app_service.constant('ApiBasePath', ".");


MenuDataService.$inject = ['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath){
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

	function get_alpha(alpha){
		console.log(alpha.replace(/[^a-zA-Z]/g, ''));
		return  alpha.replace(/[^a-zA-Z]/g, '');
	}


	service.getAllCategories = function(){
		var response = $http({
      		method: "GET",
      		url: (ApiBasePath + "/categories.json")
    	});
    	return response;
    	
    };

    service.getItemsForCategory = function () {
		//var search_word = categoryShortName;//get_alpha(categoryShortName);
    	var response = $http({
      		method: "GET",
      		url: (ApiBasePath + "/menu_items.json")
    	});
    	return response;
  	};

}

	/*
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
    		
    	})
    	.catch(function (error) {
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
  		*/

