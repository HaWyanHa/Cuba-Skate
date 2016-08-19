(function () {
	"use strict";

	angular.module('cuba')
        .controller('MenuController', MenuController);
	

	function MenuController() {
	    this.showMenu = true;
    }

    function SelectedToggle(){
    	this.selectedToggle = true;
    }

})();