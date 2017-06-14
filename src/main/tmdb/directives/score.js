define( [ 'angular',
          'tmdb/partials/score/scoreController' ], 
    function( angular, scoreController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: scoreController,
                templateUrl: '/tmdb/partials/score/score.html',
                restrict: 'E',
                scope: {
                    val: '=',
                    
                }
            };
        };
    }
);