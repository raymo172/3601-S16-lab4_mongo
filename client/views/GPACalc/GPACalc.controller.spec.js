'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: GPACtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var GPACtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPACtrl = $controller('GPACtrl as mainControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });


});
