(function()
{
	angular.module('WebApp', ['ui.router', 'ngFileUpload'])
			.config(function($stateProvider)
			{
				$stateProvider

				.state('main', 
				{
					url: '/',
					templateUrl: 'app/main/main-view.html',
					controller: 'MainController'
				})

				.state('home', 
				{
					url: '/home',
					templateUrl: 'app/home/home-view.html',
					controller: 'HomeController'
				})

				.state('editProfile',
				{
					url: '/editProfile',
					templateUrl: 'app/profile/edit-profile-view.html',
					controller: 'EditProfileController'
				})

				.state('follow',
				{
					url: '/follow',
					templateUrl: 'app/follow/follow-view.html',
					controller: 'FollowController'
				})

			})
}());