define( [ 'angular',
          'config/config'
          ],
    function( angular, config ) {
        "use strict";

        var movieStarsController = function($scope) {

            $scope.view   = {
                images: config.apiImg
            };
           
        };

        movieStarsController.$inject = [ '$scope' ];

        return movieStarsController;
    }
);define( [ 'angular',
          'config/config'
          ],
    function( angular, config ) {
        "use strict";

        var movieStarsController = function($scope) {

            $scope.view   = {
                images: config.apiImg
            };
           
        };

        movieStarsController.$inject = [ '$scope' ];

        return movieStarsController;
    }
);