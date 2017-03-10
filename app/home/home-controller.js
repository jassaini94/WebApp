(function()
{
	angular.module('WebApp')
			.controller('HomeController', ['$scope','$http', '$interval', function($scope, $http, $interval)
			{
				$scope.homePage = true;

				if(localStorage['User-Data'] !== undefined)
				{
					$scope.user = JSON.parse(localStorage['User-Data']);
					console.log($scope.user);
				}

				$scope.sendExpression = function()
				{
						var request = 
						{
							user: $scope.user.username || $scope.user.email,
							userId: $scope.user._id,
							userImage: $scope.user.image,
							content: $scope.newExpression
						}

						$http.post('api/expression/post', request).success(function(response)
						{
							console.log(response);
							$scope.expressions = response;
							$interval(function()
							{
								window.location.reload();

							}, 1000)
						})
						.error(function(error)
						{
							console.error(error);
						})
				};

				function getExpressions(initial)
				{
					var data = {};

					if($scope.user)
					{
						data.following = angular.copy($scope.user.following);
						data.following.push({userId: $scope.user._id});

					}

					$http.post('api/expression/get', data).success(function(response)
					{
						if(initial)
						{
							$scope.expressions = response;
						}
						else
						{
							$scope.incomingExpressions = response;
						}
					})
				};

				//Init//
				getExpressions(true);

			}]);
}());