'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: GPACtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var GPACtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPACtrl = $controller('GPACtrl as GPAControl', {
            $scope: scope
        });
    }));

    it('GPACalculator', function(){
        var data = [{course:'theClass', credit: 4, grade:"A"}]
        scope.GPAControl.calculator(data).toEqual(4.0);
    });

    it('GradeConversion', function(){
        scope.GPAControl.gradeConversion('A').toEqual(4.0);
    });


});
