(function () {
	"use strict";

	angular.module("cuba")
        .controller("TeamController", TeamController);
	
	TeamController.$inject = ["TeamService"];

	function TeamController(TeamService) {
		this.teamInterval = 3000;
		this.team = TeamService.getTeam;
		this.about = TeamService.getAbout;
		this.partner = TeamService.getPartner;
		this.familia = TeamService.getFamilia;
		this.skatespots = TeamService.getSkatespots;
		this.skateInterval = 5000;
	}

})();