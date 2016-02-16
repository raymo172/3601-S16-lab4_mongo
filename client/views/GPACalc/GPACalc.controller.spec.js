'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: GPACtrl', function(){

    // load the controller's module
    beforeEach(module("appModule"));

    var GPACtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPACtrl = $controller('GPACtrl as GPAControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('GradeConversion', function(){
        expect(scope.GPAControl.gradeConversion('A')).toEqual(4);
    });

    it('GradeConversion', function(){
        expect(scope.GPAControl.gradeConversion('B')).toEqual(3);
    });

    it('GradeConversion', function(){
        expect(scope.GPAControl.gradeConversion('F')).toEqual(0);
    });

    it('GradeConversion', function(){
        expect(scope.GPAControl.gradeConversion('sdhfkdjfle')).toEqual('ERROR Enter a real grade.');
    });

    it('GPACalculator', function(){
        var data = [{course:'theClass', credit: 4, grade:"A"}];
        expect(scope.GPAControl.calculator(data)).toEqual('4.00');
    });

    it('GPACalculator', function(){
        var data = [{course:'theClass', credit: 4, grade:"G"}];
        expect(scope.GPAControl.calculator(data)).toEqual('ERROR Enter a real grade and remove non-real grade.');
    });

    it('GPACalculator', function(){
        var data = [{course:'theClass', credit: 4, grade:"A"},{course:'theClass', credit: 4, grade:"b"}];
        expect(scope.GPAControl.calculator(data)).toEqual('3.50');
    });




});
