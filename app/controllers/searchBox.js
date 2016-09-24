(function() {

	var imdb = angular.module("imdb")
	imdb.controller("searchBox", searchBox);

	function searchBox($scope, $http, $timeout, message) {

		$scope.appName = "The Movie DB";
		$scope.searchName = ''
		var url = 'http://api.themoviedb.org/3/';
		var key = '?api_key=f24727bdb915ca05f7718876104b211d';
		$scope.moviesLoaded = false;
		$scope.actorLoaded  = false;
		$scope.getActors = function() {
			if ($scope.searchName != '') {
				var promise = $http.get(url + 'search/person' + key + '&query=' + $scope.searchName);
				promise.then(successCallback, errorCallback);
			} else {
				$scope.results = [{
					name : "no results!"
				}];
			}

			function successCallback(response) {
				$scope.results = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}

		};

		$scope.getMovies = function() {
			if ($scope.searchName != '') {
				var promise = $http.get(url + 'search/movie' + key + '&query=' + $scope.searchName);
				promise.then(successCallback, errorCallback);
			} else {

				$scope.results = [{
					name : "no results!"
				}];
			}
			function successCallback(response) {
				$scope.results = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}

		};

		$scope.getActorsMovie = function(id) {
			var ID = "/" + id + "/";
			var promise = $http.get(url + 'person' + ID + 'movie_credits' + key);
			promise.then(successCallback, errorCallback);

			function successCallback(response) {
				$scope.cast = response.data.cast;
				console.log("success", response.data.cast)
				$scope.moviesLoaded = true;
			}

			function errorCallback(response) {
				console.log("error", response)
			}

		}


		$scope.getMovieActors = function(id) {
			var ID = "/" + id + "/";
			var promise = $http.get(url + 'movie' + ID + 'credits' + key);
			promise.then(successCallback, errorCallback);

			function successCallback(response) {
				$scope.cast = response.data.cast;
				console.log("success", response.data.cast)
				$scope.actorLoaded = true;
			}

			function errorCallback(response) {
				console.log("error", response)
			}

		}
	}

})();

