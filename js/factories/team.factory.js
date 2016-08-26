(function () {
	"use strict";

	angular.module("cuba")
		.factory("TeamService", TeamService);

		

	var teamMembers = [
			{"image": "images/team/members/miles.png", "name": "Miles", "title": "Executive Director"},
			{"image": "images/team/members/ryan.png", "name": "Ryan", "title": "Media Director"},
			{"image": "images/team/members/lauren.png", "name": "Lauren", "title": "CEO Director"},
			{"image": "images/team/members/willem.png", "name": "Willem", "title": "Vice Director"}
		];

		function TeamService (){
			return {
				getTeam: teamMembers
			};
		}


})();