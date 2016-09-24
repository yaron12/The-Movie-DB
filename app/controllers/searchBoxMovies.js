(function() {

	var imdb = angular.module("imdb")
	imdb.controller("searchBox", searchBox);

	function searchBox($scope, $http, $timeout, message) {

		$scope.appName = "The Movie DB";
		$scope.searchName = ''
		var url = 'http://api.themoviedb.org/3/';
		var key = 'f24727bdb915ca05f7718876104b211d'		

		
}
})();