
angular.module('webapp').controller('PeopleCtrl', ['$scope', 'PeopleService', '$window', function($scope, PeopleService, $window) {		
	
	$scope.people = [{}];
	$scope.screenWidth = null;
	$scope.screenHeigth = null;

	$scope.getPeople = function(){
		PeopleService.list().then(function(data){
			$scope.people = data.data;
			console.log($scope.people);
		});
	};

	angular.element($window).bind('resize', function () {
	    //console.log("Width : ", $window.innerWidth);
	    verifyWidth();
	    $scope.$apply();
	});

	angular.element($window).bind('resize', function () {
	    //console.log("Heigth : ", $window.innerHeight);
	    verifyHeigth();
	    $scope.$apply();
	});

	function verifyWidth(){
	    if($window.innerWidth >= 800)
	    	$scope.screenWidth = true;	    
	    else
	    	$scope.screenWidth = false;
	};	

	function verifyHeigth(){
	    if($window.innerHeight >= 480)
	    	$scope.screenHeigth = true;	    
	    else
	    	$scope.screenHeigth = false;
	};

	$scope.getPeople();

	verifyWidth();
	verifyHeigth();

} ]);