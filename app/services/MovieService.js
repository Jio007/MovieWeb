MovieApp.factory('MovieService', function($http) {

   return {

        getMovieByNameService: function(movieName) {

        	var url = getUrl("discover/movie", '');

        	if(movieName != '')
        	{
        		url = getUrl("search/movie",'&query='+movieName);
        	}

             //return the result
             return $http({
				method: 'GET',
				url: url,
				headers: { 'Content-Type' : 'application/json' }
			});
        },
        getInfoMovieService: function(id) {

        	var url = getUrl("movie/"+id, '');

             //return the result
             return $http({
				method: 'GET',
				url: url,
				headers: { 'Content-Type' : 'application/json' }
			});
        },
        getCreditsMovieService: function(id) {

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