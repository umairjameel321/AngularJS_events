/// <reference path="angular.min.js" />

// steps
// create a module
var theModule = angular
    .module("myModule", [])
    .controller("myController", function($scope){

        var langs = [
            {name: "c#", likes: 0, dislikes: 0},
            {name: "java", likes: 0, dislikes: 0},
            {name: "python", likes: 0, dislikes: 0},
        ];

        $scope.languages = langs;

        $scope.increment = function(lang)
        {
              lang.likes++;
        };
        $scope.decrement = function(lang)
        {
            lang.dislikes++;
        };

    });

