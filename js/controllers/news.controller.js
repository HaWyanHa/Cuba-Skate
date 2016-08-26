(function () {
	"use strict";

	angular.module('cuba')
        .controller('NewsController', NewsController);
	
	NewsController.$inject = ["NewsService"];

	function NewsController(NewsService) {
		this.news = NewsService.getNews;
	}

})();