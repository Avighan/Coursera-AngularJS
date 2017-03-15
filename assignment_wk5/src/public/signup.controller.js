
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['AllMenuItems','UserPreference'];
function SignUpController(AllMenuItems,UserPreference) {
  var $ctrl = this;
  $ctrl.form_submission_successful=false;
  $ctrl.AllMenuItems = AllMenuItems;

  $ctrl.setUserData =function(firstName,lastName,email,phoneNumber,favourite){
  	
  	UserPreference.setUserData(firstName,lastName,email,phoneNumber,favourite);
  	//console.log(favourite);
  	$ctrl.form_submission_successful=true;
  	//$ctrl.resetForm(user);
  }
  $ctrl.resetForm = function(user){
  	if($ctrl.form_submission_successful == true){
  		var defaultUser = {
			firstname : '',
			lastname : '',
			emails:'',
			phonenumber:'',
			short_name:[]
		}
		$ctrl.user = angular.copy(defaultUser);
  		//$ctrl.form_submission_successful=false;
  	}
  }
  $ctrl.checkform_submission = function(){
  	return $ctrl.form_submission_successful;
  }
  $ctrl.changedValue = function(item){       
    alert(item);
  }

};

