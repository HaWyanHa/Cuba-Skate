(function () {
	"use strict";

	angular.module('cuba')
        .controller('MenuController', MenuController);
	
	MenuController.$inject = ["$state", "$scope"];

	function MenuController($state, $scope) {
	    var that = this;
	    that.showMenu = true;

	    that.getState = function getState() {
	    	return $state.current.name;
	    };

	    $scope.$on('$stateChangeStart', function() {
    		$scope.stateChange();
		});

		$scope.stateChange = function() {
			console.log("state has changed");
		    that.showMenu = true;
		    console.log("show menu is false");
	    	}
    }


})();

