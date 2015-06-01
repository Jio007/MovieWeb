'use strict';

// Define Actor Controller
MovieApp.controller('ActorController', ['$scope', '$routeParams', '$http', 'ActorService', function ($scope, $routeParams, $http, ActorService) {
	
	var msgActorNotFound = "Not Results";
	var msgActorMovieNotFound = "Not Movie Results";
	var msgActorError = "Error, Actor not found";
	$scope.movieList = [];
	$scope.actorResult = '';
	$scope.actorResult = '';

	// Function to get the actor information
	$scope.getInfoActor = function (id) {
		
		ActorService.getActorInfoService(id)
		.success(function (data, status, headers, config) {
		
			// Validate Status
			if (status == 200) {

				// Set data results
				$scope.actorInfo =  data; 
				
				// Validate data
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
	// Function to get the list actor movies
	$scope.getActorMovies = function (id) {
		
		ActorService.getActorMoviesService(id)
		.success(function (data, status, headers, config) {
		
			// Validate Status
			if (status == 200) {

				// Set data results
				$scope.movieList =  data.cast; 
				
				// Validate data
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
	// Function to get the list of movies
	$scope.getActorsByName = function (actorName) 
	{

		ActorService.getActorListService(actorName)
		.success(function (data, status, headers, config) 
		{

			// Validate status
			if (status == 200) 
			{
				// Set data results
				$scope.actorList = data.results;

				// Validate tota results
				if(data.total_results == 0)
				{
					console.log(msgMovieNotFound);
					$scope.actorResult = msgActorNotFound;  
				}
			} 
			else 
			{
				$scope.actorResult = msgActorError;
			}

    	})
		.error(function (data, status, headers, config) 
		{
			$scope.actorResult = msgActorError;
		});

	}

	// Validate if searchMovieName is empty
	if($routeParams.searchActorName)
	{
		$scope.getActorsByName($routeParams.searchActorName);
	}
	
	// Validate if actor id is empty
	if($routeParams.id)
	{
		$scope.getInfoActor($routeParams.id);
		$scope.getActorMovies($routeParams.id);
	}

}]);