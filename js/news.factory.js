(function () {
	"use strict";

	angular.module("cuba")
		.factory("NewsService", NewsService);

	var newsStories = [
			{"img": "images/news/vice.png", "date": "some date", "story": "some info"},
			{"img": "url", "date": "some date", "story": "some info"},
			{"img": "url", "date": "some date", "story": "some info"},
			{"img": "url", "date": "some date", "story": "some info"},
			{"img": "url", "date": "some date", "story": "some info"}
		];

		function NewsService (){
			return {
				getNews: newsStories
			};
		}


})();