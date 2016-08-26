(function () {
	"use strict";

	angular.module("cuba")
        .controller("TeamController", TeamController);
	
	TeamController.$inject = ["TeamService"];

	function TeamController(TeamService) {
		this.teamInterval = 3000;
		this.team = TeamService.getTeam;
	}

})();