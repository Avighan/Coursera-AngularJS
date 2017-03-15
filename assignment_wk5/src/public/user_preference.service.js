"use strict";

angular.module('common')
.service('UserPreference', UserPreference);

function UserPreference(){
	var service = this;
	var userData = [];
	service.setUserData = function (firstName,lastName,email,phoneNumber,favourite) {
		userData = [];
  	 	var item = {
	     	firstname: firstName,
	    	lastname: lastName,
	    	email: email,
	    	phonenumber:phoneNumber,
	    	favourites:favourite
    	};
	    userData.push(item);
	    //console.log(userData);
  	};
	service.getUserData = function(){
		//console.log(userData);
		return userData;
	};
}