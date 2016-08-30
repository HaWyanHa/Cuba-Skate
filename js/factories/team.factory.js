(function () {
	"use strict";

	angular.module("cuba")
		.factory("TeamService", TeamService);

		

	var teamMembers = [
			{"image": "images/team/members/miles.png", "name": "Miles", "title": "Executive"},
			{"image": "images/team/members/ryan.png", "name": "Ryan", "title": "Media Director"},
			{"image": "images/team/members/lauren.png", "name": "Lauren", "title": "CEO Director"},
			{"image": "images/team/members/willem.png", "name": "Willem", "title": "Vice Director"}
		];

	var about = "Cuba Skate is a nonprofit initiative based in Washington, D.C. Started in 2010, Cuba Skate’s aim is to support and grow the Cuban skateboarding community by providing access to skateboarding equipment that is otherwise unavailable on the island. In doing so, Cuba Skate hopes to foster a constructive environment for Cuban youth that will have a positive impact on the greater community. Cuba Skate expands the future for these skaters by creating a chance to continue skateboarding, and developing, year round.";

	var partners = [
			{"image": "images/team/partners/baker.jpg", "url": "www.google.com"},
			{"image": "images/team/partners/baker.jpg", "url": "www.google.com"},
			{"image": "images/team/partners/baker.jpg", "url": "www.google.com"},
			{"image": "images/team/partners/baker.jpg", "url": "www.google.com"},
			{"image": "images/team/partners/baker.jpg", "url": "www.google.com"},
			{"image": "images/team/partners/baker.jpg", "url": "www.google.com"},
			{"image": "images/team/partners/baker.jpg", "url": "www.google.com"}

		];

	function TeamService (){
			return {
				getTeam: teamMembers,
				getAbout: about,
				getPartner: partners
			};
		}
})();