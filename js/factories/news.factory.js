(function () {
	"use strict";

	angular.module("cuba")
		.factory("NewsService", NewsService);

	var newsStories = [
			{"image": "images/news/vice.png", "date": "some date", "header": "some header", "story": "some info", "url": "www.google.com"},
			{"image": "images/news/vice.png", "date": "some date2", "header": "some header2", "story": "some info2", "url": "www.google.com"},
			{"image": "images/news/vice.png", "date": "some date3", "header": "some header3", "story": "some info3", "url": "www.google.com"},
			{"image": "images/news/vice.png", "date": "some date4", "header": "some header4", "story": "some info4", "url": "www.google.com"},
			{"image": "images/news/vice.png", "date": "some date5", "header": "some header5", "story": "some info5", "url": "www.google.com"}
		];

		function NewsService (){
			return {
				getNews: newsStories
			};
		}


})();