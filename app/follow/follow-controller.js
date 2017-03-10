(function()
{
	angular.module('WebApp')
			.controller('FollowController', ['$scope', '$http', function($scope, $http)
			{
				$scope.followPage = true;

				$scope.user = JSON.parse(localStorage['User-Data']);
				console.log($scope.user);

				$http.get('api/users/get').then(function(response)
				{
					$scope.users = response.data;
					console.log($scope.users);
				})

				$scope.follow = function(userId, expresserId)
				{
					request = 
					{
						userId: userId,
						expresserId: expresserId
					};

					$http.post('api/users/follow', request).then(function()
					{
						console.log('following ', expresserId);
					})

				}

				$scope.checkIsFollowing = function(expresserId)
				{
					var i = 0;
					var len = $scope.user.following.length;

					for(i=0; i<len; i++)
					{
						if($scope.user.following[i].userId === expresserId)
						{
							return true;
						}
					}
					return false;
				}

			}]);
}());