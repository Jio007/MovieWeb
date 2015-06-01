'use strict';

// Define Module app
var MovieApp = angular.module("app", ["ngRoute", "ngResource"]);

// Config App
MovieApp.config(function($routeProvider){

	$routeProvider.when('/searchMovie', {
		templateUrl: 'views/listMovies.html',
		controller: 'MovieController'
	})
	.when('/searchMovie/:searchMovieName', {
		templateUrl: 'views/listMovies.html',
		controller: 'MovieController'
	})
	.when('/movie/:id', {
		templateUrl: 'views/infoMovie.html',
		controller: 'MovieController'
	})
	.when('/actor/:id', {
		templateUrl: 'views/actorInfo.html',
		controller: 'ActorController'
	})
	.otherwise({ redirectTo: '/searchMovie' })
});

// Function that provide the specified url
function getUrl(action,options)
{
	var key = "089dde2396217b62fb377d77459dbfa9";
	var api = "https://api.themoviedb.org/3/";
	
	return api + action + '?' + '&api_key=' + key + options;
}