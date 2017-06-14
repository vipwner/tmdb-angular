/**
 * HomeController provides controller support for loading the main page with Search and Popular Movies
 *
 * @module tmdb.partials.home.HomeController
 *
 * @requires angular
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the HomeController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config ,TMDBAPIService) {
        "use strict";

        var HomeController = function($scope, TMDBAPIService ) {
            
            $scope.view   = {
                movies: [],
            };

            var api = TMDBAPIService.Discover();
            api.discover.movies().then(function ( response ) {
                console.log(response.data);
                $scope.view.movies = response.data;
                $scope.view.images = config.apiImg;
            });
            
        };

        HomeController.$inject = [ '$scope' , 'TMDBAPIService'];

        return HomeController;
    }
);