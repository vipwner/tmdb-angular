/**
 * Provides a movie-detail element
 *
 * @module tmdb.directives.movieDetail
 *
 * @requires angular
 * @requires movieDetailController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} RemoteImageLoader - An instance of RemoteImageLoader 
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 * @copyright Alert Logic - Univalle's course, Inc 2017
 *
 */



define( [ 'angular',
          'tmdb/partials/movieDetailLoader/MovieDetailLoader' ], 
    function( angular, MovieDetailLoader ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MovieDetailLoader,
                templateUrl: '/tmdb/partials/movie/detail.html',
                restrict: 'E',
                scope: {
                    detail: '=ngModel'
                    
                }
            };
        };
    }
);