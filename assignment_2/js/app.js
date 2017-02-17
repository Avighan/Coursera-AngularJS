'use strict';
var app = angular.module('ShoppingListCheckOff',[]);
app.controller('ToBuyController', ToBuyController);
app.controller('AlreadyBoughtController', AlreadyBoughtController);
app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService','$scope'];
function ToBuyController(ShoppingListCheckOffService,$scope){
	var showList = this;
	showList.items = ShoppingListCheckOffService.getItems();
	showList.update_record = function(itemIndex){
  		
  		ShoppingListCheckOffService.update_quantity(itemIndex,showList.items[itemIndex].name,showList.items[itemIndex].quantity);
  	}
	showList.removeItem = function (itemIndex) {
    	ShoppingListCheckOffService.removeItem(itemIndex,showList.items[itemIndex].name,showList.items[itemIndex].quantity);
  	};
  	showList.bought_or_not = function(){
	
		if (showList.items.length == 0){
			return true;
		}else{
			return false;
		}
	}
	/*
	var itemAdder = this;
	itemAdder.itemName = '';
	itemAdder.itemQuantity = '';
	itemAdder.addItem = function(){
		ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
	}
	*/
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService','$scope'];
function AlreadyBoughtController(ShoppingListCheckOffService,$scope){
	var showList = this;
	showList.items = ShoppingListCheckOffService.bought_getItems();
	showList.show_or_hide = function(){
	
		if (showList.items.length == 0){
			return true;
		}else{
			return false;
		}
	}
	
}

function ShoppingListCheckOffService() {
  var service = this;
  var bought_items= [];
  // List of shopping items
  var buy_items = [{
  	name: 'Apple',
    quantity: 1
  },
  {
  	name: 'Banana',
    quantity: 1
  },
  {
  	name: 'Orange',
    quantity: 1
  },
  {
  	name: 'Strawberry',
    quantity: 1
  },
  {
  	name: 'Grape',
    quantity: 1
  },
  {
  	name: 'Peach',
    quantity: 1
  },
  {
  	name: 'Cherry',
    quantity: 1
  },
  {
  	name: 'Pear',
    quantity: 1
  },
  {
  	name: 'Grapefruit',
    quantity: 1
  },
  {
  	name: 'Pineapple',
    quantity: 1
  },
  {
  	name: 'Mango',
    quantity: 1
  },
  {
  	name: 'Watermelon',
    quantity: 1
  },
  {
  	name: 'Avocado',
    quantity: 1
  }];

  service.removeItem = function (itemIndex,itemName,itemQuantity) {
		
		service.addItem(itemName,itemQuantity);
		buy_items.splice(itemIndex, 1);
		
  };

  service.addItem = function (itemName,quantity) {
  	 var item = {
      name: itemName,
      quantity: quantity
    };
    bought_items.push(item);
  };

  service.getItems = function () {
    return buy_items;
  };
  service.bought_getItems = function () {

    return bought_items;
  };

  service.update_quantity = function(itemIndex,itemName,itemQuantity){
  		buy_items[itemIndex].name = itemName;
  		buy_items[itemIndex].quantity = itemQuantity;
  };

  
}
