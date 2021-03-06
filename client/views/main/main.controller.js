'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.textField = "";
        self.weightField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.maxData = [];


        self.fattestPet = function(dataArray) {
            if(dataArray.length ==0){
                return {text:'No Pets', weight:'No Weights'}
            }
            else {
                var maxWeight = 0;
                var indexValue = 0;
                var i;
                for (i = 0; i < dataArray.length; i++) {
                    if (dataArray[i].weight > maxWeight) {
                        maxWeight = dataArray[i].weight;
                        indexValue = i;
                    }
                }
                return dataArray[indexValue];
            }
        };

        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
                self.maxData = self.fattestPet(self.data);
            });
        };

        self.getPets();

        self.addData = function(){
            if(self.textField.length >= 1 && self.weightField.length >= 1) {
                $http.post('api/pets', {text: self.textField, weight: self.weightField}).success(function(){
                    self.getPets();
                });
                self.textField = "";
                self.weightField = "";
            }
        };



        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getPets();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };

    });