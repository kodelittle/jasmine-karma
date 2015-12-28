var myAngularApp = angular.module("myAngularApp", []);

myAngularApp.controller('UserListCtrl', function($scope) {
	$scope.users = [ {
		"fname" : "partha",
		"lname" : "bhattacharjee"
	}, {
		"fname" : "pratim",
		"lname" : "narottam"
	} ];
});