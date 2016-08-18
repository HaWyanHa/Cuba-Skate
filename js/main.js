(function () {
	"use strict";

	angular.module('cuba', ['ui.router']).config(cubaConfig);

	cubaConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function cubaConfig($stateProvider, $urlRouterProvider){

		 $urlRouterProvider.otherwise('/');

		 $stateProvider
		 	.state('home', {
                url: '/',
                templateUrl: 'html/home.html'
            })
		 	.state("news", {
		 		url:"/news",
		 		templateUrl: "html/news.html"
		 	});
	}

	
})();