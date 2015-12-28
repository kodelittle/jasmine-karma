describe('User list controller.', function() {

	beforeEach(function() {
		module('myAngularApp'); 
	});

	it('should create 2 users', inject(function($controller) {
		var scope = {};
		var ctrl = $controller('UserListCtrl', { $scope: scope })

		expect(scope.users.length).toBe(2);
	}));

});