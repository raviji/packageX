var App = angular.module("GPApp", []);

App.controller("mainCtrl", function($scope) {


    var polygon = $("svg polygon");

    var i = polygon.length;
    while (i--) {
        $(polygon).mouseenter(function(e) {
            $(e.target).parent().append(e.target);
        });
    }

});