MovieApp.controller('MovieController', ['$scope', '$routeParams', '$http', 'MovieService', function ($scope, $routeParams, $http, MovieService) {
	
	var msgMovieNotFound = "Not Results";
	var msgMovieError = "Error, Movie not found";
	$scope.movieList = [];
	$scope.movieCredits = [];
	$scope.movieResult = '';

	$scope.getMoviesByName = function (movieName) 
	{

		MovieService.getMovieByNameService(movieName)
		.success(function (data, status, headers, config) 
		{

			if (status == 200) 
			{
				$scope.movieList = data.results;

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

	$scope.getInfoMovie = function (id) {

		MovieService.getInfoMovieService(id)
		.success(function (data, status, headers, config) 
		{

			if (status == 200) 
			{
				$scope.movieInfo = data;
				
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
	
	$scope.getCreditsMovie = function (id) {

		MovieService.getCreditsMovieService(id)
		.success(function (data, status, headers, config) 
		{

			if (status == 200) 
			{
				$scope.movieCredits = data.cast;
				
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

	if($routeParams.id)
	{
		$scope.getInfoMovie($routeParams.id);
		$scope.getCreditsMovie($routeParams.id);
	}

}]);