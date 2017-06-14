/**
* the controller needs to be loaded explicitly with requireJS as the normal application only registers the
* controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
*/
define([ 'angular',
         'config/config',
         'tmdb/partials/movieStars/movieStarsController'
         ], 
    function( angular, config, movieStarsController ) {
        "use strict";
        describe("movieStarsController's test file", function () {
            var movieStarsController_i, scope;

            beforeEach(function () {
                /**
                * Load the required modules
                */
                module("config");

                /**
                * Injection
                */
                inject(["$rootScope", "$controller", function ($rootScope, $controller) {
                    //instantiate the controller with a newly created scope
                    scope       = $rootScope.$new();
                    movieStarsController_i = $controller(movieStarsController, {$scope: scope}
                                     );
                }]);
            });

            /*
            * Test default initialization variables
            */
            it("It should contain an image", function () {
                expect(scope.view.images).toEqual(config.apiImg);
            });

            /*
            * Test base functionality
            */

        });
    }
);