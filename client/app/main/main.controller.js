'use strict';

angular.module('dusktodawnApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.features = ["Weather",
                           "Forcast",
                           "Events",
                           "Light pollution",
                           "Money",
                           "Galaxies"];
        
    });
