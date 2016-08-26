(function () {
	"use strict";

	angular.module("cuba")
		.factory("TeamService", TeamService);

		

	var teamMembers = [
			{"image": "images/team/members/miles.png", "name": "Miles", "title": "Executive Director"},
			{"image": "images/team/members/miles.png", "name": "Ryan", "title": "Executive Director"},
			{"image": "images/team/members/miles.png", "name": "Elliot", "title": "Executive Director"}
		];

		function TeamService (){
			return {
				getTeam: teamMembers
			};
		}


})();