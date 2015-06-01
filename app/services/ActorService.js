MovieApp.factory('ActorService', function($http) {

   return {

        getActorInfoService: function(id) {

        	var url = getUrl("person/"+id, '');

             //return the result
             return $http({
				method: 'GET',
				url: url,
				headers: { 'Content-Type' : 'application/json' }
			});
        },
        getActorMoviesService: function(id) {

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