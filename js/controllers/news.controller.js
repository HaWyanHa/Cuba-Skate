(function () {
	"use strict";

	angular.module('cuba')
        .controller('NewsController', NewsController);
	
	NewsController.$inject = ["NewsService"];

	function NewsController(NewsService) {

		console.log("in the news controller/service");
		this.news = NewsService.getNews;
	}

})();