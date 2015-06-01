'use strict';

// Define Movie Controller
MovieApp.controller('MovieController', ['$scope', '$routeParams', '$http', 'MovieService', function ($scope, $routeParams, $http, MovieService) {
	
	var msgMovieNotFound = "Not Results";
	var msgMovieError = "Error, Movie not found";
	$scope.movieList = [];
	$scope.movieCredits = [];
	$scope.movieResult = '';

	// Function to get the list of movies
	$scope.getMoviesByName = function (movieName) 
	{

		MovieService.getMovieByNameService(movieName)
		.success(function (data, status, headers, config) 
		{

			// Validate status
			if (status == 200) 
			{
				// Set data results
				$scope.movieList = data.results;

				// Validate tota results
				if(data.total_results == 0)
				{
					console.log(msgMovieNotFound);
					$scope.movieResult = msgMovieNotFound;  
				}
			} 
			else 
			{
				$scope.movieResult = msgMovieError;
			}

    	})
		.error(function (data, status, headers, config) 
		{
			$scope.movieResult = msgMovieError;
		});

	}

	// Function to get the movie information
	$scope.getInfoMovie = function (id) {

		MovieService.getInfoMovieService(id)
		.success(function (data, status, headers, config) 
		{

			// Validate status
			if (status == 200) 
			{
				// Set data results
				$scope.movieInfo = data;
				
				// Validate tota results
				if(data.total_results == 0)
				{
					$scope.movieResult = msgMovieNotFound;  
				}
			} 
			else 
			{
				$scope.movieResult = msgMovieError;
			}

    	})
		.error(function (data, status, headers, config) 
		{
			$scope.movieResult = msgMovieError;
		});
	}
	
	// Function to get the credist list
	$scope.getCreditsMovie = function (id) {

		MovieService.getCreditsMovieService(id)
		.success(function (data, status, headers, config) 
		{

			// Validate status
			if (status == 200) 
			{
				// Set data results
				$scope.movieCredits = data.cast;
				
				// Validate tota results
				if(data.total_results == 0)
				{
					$scope.movieResult = msgMovieNotFound;  
				}
			} 
			else 
			{
				$scope.movieResult = msgMovieError;
			}

    	})
		.error(function (data, status, headers, config) 
		{
			$scope.movieResult = msgMovieError;
		});
		
	}

	// Validate if searchMovieName is empty
	if($routeParams.searchMovieName)
	{
		$scope.getMoviesByName($routeParams.searchMovieName);
		$scope.searchMovie = $routeParams.searchMovieName;
	}
	else
	{
		$scope.getMoviesByName('');
		$scope.searchMovie = null;
	}

	// Validate if id movie is empty
	if($routeParams.id)
	{
		$scope.getInfoMovie($routeParams.id);
		$scope.getCreditsMovie($routeParams.id);
	}

}]);