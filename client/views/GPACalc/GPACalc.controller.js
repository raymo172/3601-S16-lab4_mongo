'use strict';

angular.module("appModule")
    .controller('GPACtrl', function($http){
        console.log("GPA controller loaded!");

        var self = this;

        self.courseField = "";
        self.creditField = "";
        self.gradeField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];





        self.getGrades = function(){
            $http.get('api/grades').success(function(grades) {
                self.data = grades;
            });
        };

        self.getGrades();

        self.addData = function(){
            if(self.courseField.length >= 1 && self.gradeField.length >= 1 && self.creditField.length >= 1) {
                $http.post('api/grades', {course: self.courseField, credit: self.creditField, grade: self.gradeField}).success(function(){
                    self.getGrades();
                });
                self.courseField = "";
                self.creditField = "";
                self.gradeField = "";
            }
        };




        self.removeData = function(index){
            $http.delete('/api/grades/' + self.data[index]._id).success(function(){
                self.getGrades();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };

        self.gradeConversion=function(grade){
            if (grade == "A" || grade == "a") {
                return 4;
            }
            else if (grade == "B"|| grade == "b") {
                return 3;
            }
            else if (grade == "C"|| grade == "c") {
                return 2;
            }
            else if (grade == "D"|| grade == "d") {
                return 1;
            }
            else if (grade == "F"|| grade == "f") {
                return 0;
            }
            else{
                return "ERROR Enter a real grade."
            }
        };



        self.calculator = function(dataArray) {
            if (dataArray.length >= 1) {
                var i;
                var gpa = 0;
                var totalCredits = 0;
                for (i = 0; i < dataArray.length; i++) {
                    if(self.gradeConversion(dataArray[i].grade) == "ERROR Enter a real grade."){
                        return self.gradeConversion(dataArray[i].grade);
                    }
                    gpa += self.gradeConversion(dataArray[i].grade) *parseInt(dataArray[i].credit);
                    totalCredits += parseInt(dataArray[i].credit);
                }
                return parseInt((gpa/totalCredits).toFixed(2));
            }
            else {
                return ""
            }
        }

    });