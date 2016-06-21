
angular.module('webapp').controller('PeopleCtrl', ['$scope', 'PeopleService', function($scope, PeopleService) {		
	
	$scope.people = [{}];

	$scope.getPeople = function(){
		PeopleService.list().then(function(data){
			$scope.people = data.data;
			console.log($scope.people);
		});
	};

	$scope.getPeople();

} ]);