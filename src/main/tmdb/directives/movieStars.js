define( [ 'angular',
          'tmdb/partials/movieStars/movieStarsController' ], 
    function( angular, movieStarsController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: movieStarsController,
                templateUrl: '/tmdb/partials/movieStars/movieStars.html',
                restrict: 'E',
                scope: {
                    popMovies: '=ngModel'
                }
            };
        };
    }
);