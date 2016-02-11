'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as mainControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('testing fattestPet', function(){
        var data = [{text:'dog', weight:500},{text:'cat', weight: 5000}];
        expect(scope.mainControl.fattestPet(data)).toEqual({text:'cat', weight: 5000});
    });

});
