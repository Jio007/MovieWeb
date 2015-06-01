'use strict';

// Define Movie Service
MovieApp.factory('MovieService', function($http) {

   return {

        // Service to search the movies by one name or the popular movies
        getMovieByNameService: function(movieName) {

            // url of themoviedb.org that provide the popular movie list 
        	var url = getUrl("discover/movie", '');

            // Validate if movieName is empty
        	if(movieName != '')
        	{
                 // url of themoviedb.org that provide the movie list
        		url = getUrl("search/movie",'&query='+movieName);
        	}

             //return the result
             return $http({
				method: 'GET',
				url: url,
				headers: { 'Content-Type' : 'application/json' }
			});
        },
        // Service to get the movie information
        getInfoMovieService: function(id) {

            // url of themoviedb.org that provide the movie information
        	var url = getUrl("movie/"+id, '');

             //return the result
             return $http({
				method: 'GET',
				url: url,
				headers: { 'Content-Type' : 'application/json' }
			});
        },
        // Service to get the credits list
        getCreditsMovieService: function(id) {

            // url of themoviedb.org that provide the credits information
        	var url = getUrl("movie/"+id+'/credits', '');

             //return the result
             return $http({
				method: 'GET',
				url: url,
				headers: { 'Content-Type' : 'application/json' }
			});
        }
   }
});