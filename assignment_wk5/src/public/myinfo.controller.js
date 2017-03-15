
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['UserPreference'];
function myInfoController(UserPreference) {
  var $ctrl = this;
  $ctrl.userData= UserPreference.getUserData();
  //console.log($ctrl.userData[0].firstname);
  //$ctrl.userData=[];
  
  $ctrl.checkRegisteredUser = function checkRegistered(){
    return $ctrl.userData.length;
  }
};

