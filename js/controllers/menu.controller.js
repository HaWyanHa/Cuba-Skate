(function () {
	"use strict";

	angular.module('cuba')
        .controller('MenuController', MenuController);
	
	MenuController.$inject = ["$state", "$scope"];

	function MenuController($state, $scope) {
	    var that = this;
	    that.menuColor = false;

	   

	    that.getState = function getState() {
	    	return $state.current.name;
	    };

	    $scope.$on('$stateChangeStart', function() {
    		$scope.stateChange();
		});

		$scope.stateChange = function() {
		    that.showMenu = true;
		    that.menuColor = false;
	    };
    }


})();

