MovieApp.controller('ActorController', ['$scope', '$routeParams', '$http', 'ActorService', function ($scope, $routeParams, $http, ActorService) {
	
	var msgActorNotFound = "Not Results";
	var msgActorMovieNotFound = "Not Movie Results";
	var msgActorError = "Error, Actor not found";
	$scope.movieList = [];
	$scope.actorResult = '';
	$scope.actorResult = '';

	$scope.getInfoActor = function (id) {
		
		ActorService.getActorInfoService(id)
		.success(function (data, status, headers, config) {
		
			if (status == 200) {

				$scope.actorInfo =  data; 
				
				if(data == null){
					$scope.actorResult = msgActorNotFound;  
				}
			} 
			else {

				$scope.actorResult = msgActorError;
			}

		})
		.error(function (data, status, headers, config) {
			$scope.actorResult = msgActorError;
		});

	}
	
	$scope.getActorMovies = function (id) {
		
		ActorService.getActorMoviesService(id)
		.success(function (data, status, headers, config) {
		
			if (status == 200) {

				$scope.movieList =  data.cast; 
				
				if(data == null){
					$scope.actorMovieResult = msgActorMovieNotFound;  
				}
			} 
			else {

				$scope.actorMovieResult = msgActorError;
			}

		})
		.error(function (data, status, headers, config) {
			$scope.actorMovieResult = msgActorError;
		});
	}

	if($routeParams.id)
	{
		$scope.getInfoActor($routeParams.id);
		$scope.getActorMovies($routeParams.id);
	}

}]);