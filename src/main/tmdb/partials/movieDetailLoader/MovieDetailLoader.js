/**
 * MovieDetailLoader provides support for getting a remote image URL base path to the directives
 *
 * @module tmdb.partials.movieDetailLoader.MovieDetailLoader
 *
 * @requires angular
 * @requires config
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 * 
 * @returns instance of the MovieDetailLoader
 *
 * @copyright Alert Logic - Univalle's course, Inc 2017
 *
 */

define(['angular',
        'config/config'
    ],
    function(angular, config) {
        "use strict";

        var MovieDetailLoader = function($scope) {

            var config = angular.module("config");
            $scope.view = {
                images: config.apiImg
            };
            console.log($scope.view.url);


        };

        MovieDetailLoader.$inject = ['$scope'];

        return MovieDetailLoader;
    }
);
