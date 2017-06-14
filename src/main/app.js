/**
 * Creates the application root for an angular application at uri (/)
 *
 * @module app
 * 
 * @requires config/config
 * @requires ngRoute
 *
 * @param angular RequireJS inclusion of AngularJS library
 * @param config RequireJS inclusion of config/config
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the app
 *
 * @copyright Alert Logic, Inc 2014
 */

define([ 'angular',
         'config/config',
         'ngRoute', 'ngResource','LocalStorageModule',
         'tmdb/partials/home/HomeController',
         'tmdb/partials/movieDetailLoader/MovieDetailLoader',
         'tmdb/partials/movie/MovieController',
         'tmdb/services/TMDBAPIService',
         'tmdb/directives/movieStars',
         'tmdb/directives/score',
         'tmdb/directives/movieDetail',
         'scripts/Headroom'
         ], 
    function( angular, config, $resource, $location, LocalStorageModule, HomeController, MovieDetailLoader, MovieController, TMDBAPIService, movieStarsDirective, scoreDirective, movieDetailDirective, Headroom ) {
    	"use strict";

        /** @constructs app */
        var angularModules = config.standardAngularModules;

        /** @constructs app */
        var app = angular.module("app", angularModules );

        //  Configure $locationProvider and $routeProvider to allow top-level navigation within this route
    	app.config(['$locationProvider', function($locationProvider) {
                            
            $locationProvider.html5Mode(false);
            $locationProvider.hashPrefix('');
            
    	}]);
        app.service('TMDBAPIService',TMDBAPIService);
        app.controller( "HomeController", HomeController );
        app.controller("MovieDetailLoader", MovieDetailLoader);
        app.controller("MovieController", MovieController);
        app.directive("movieStars", movieStarsDirective);
        app.directive("score", scoreDirective);
        app.directive("movieDetail", movieDetailDirective);
        
        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when( '/', { templateUrl: '/tmdb/partials/home/home.html', controller: 'HomeController' } );
             $routeProvider.when( '/movie/:id', { templateUrl: '/tmdb/partials/movie/movie.html', controller: 'MovieController' } );
            $routeProvider.otherwise( {
                template: function() {
                    throw 'An internal error occurred because the given path does not resolve to a known route.';
                }
            });
        }]);
        
        app.config(['$sceDelegateProvider', function($sceDelegateProvider) {

           $sceDelegateProvider.resourceUrlWhitelist([

               // Allow same origin resource loads.

               'self',

               // Allow loading from our assets domain. 

              // Notice the difference between * and **.

               'https://www.youtube.com/**'

           ]);

       }]);

    	return app;
    }
);