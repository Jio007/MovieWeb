'use strict';

// Define Actor Service
MovieApp.factory('ActorService', function($http) {

   return {
        // Service to get the actor information 
        getActorInfoService: function(id) {

            // url of themoviedb.org that provide the actor information
        	var url = getUrl("person/"+id, '');

             //return the result
             return $http({
				method: 'GET',
				url: url,
				headers: { 'Content-Type' : 'application/json' }
			});
        },
        // Service to get the actor movies information 
        getActorMoviesService: function(id) {

            // url of themoviedb.org that provide the actor movies
            var url = getUrl("person/"+id+'/movie_credits', '');

             //return the result
             return $http({
                method: 'GET',
                url: url,
                headers: { 'Content-Type' : 'application/json' }
            });
        }
   }
});