(function()
{
	angular.module('WebApp')
			.controller('MainController', ['$scope', '$state', '$http', function($scope, $state, $http)
			{
				$scope.createUser = function()
				{
					document.getElementById("signupEmail").value = "";
					document.getElementById("signupPassword").value = "";

					console.log($scope.newUser);

					$http.post('api/user/signup', $scope.newUser).success(function(res)
					{
					
					})
					.error(function(error)
					{
						console.log(error);
					})
				}

				if(localStorage['User-Data'])
				{
					$scope.loggedIn = true;
				}

				else
				{
					$scope.loggedIn = false;
				}

				$scope.logUserIn = function()
				{

					document.getElementById("loginEmail").value = "";
					document.getElementById("loginPassword").value = "";

					$http.post('api/user/login', $scope.login).success(function(res)
					{
						localStorage.setItem('User-Data', JSON.stringify(res));
						$scope.loggedIn = true;
					})
					.error(function(error)
					{
						console.error(error);
					});
				}

				$scope.logOut = function()
				{
					localStorage.clear();
					$scope.loggedIn = false;
				}

			}]);
}());