(function () {
	"use strict";

	angular.module('cuba')
        .controller('MenuController', MenuController);
	
	MenuController.$inject = ["$state"];

	function MenuController($state) {
	    this.showMenu = true;

	    this.getState = function getState() {
	    	return $state.current.name;
	    };
    }


})();