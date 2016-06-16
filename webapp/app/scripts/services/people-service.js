angular.module("webapp").service("PeopleService", ['$http', function($http) {
	var service = this;

	service.list = function() {
		return $http.get("http://0.0.0.0:8081/listPeople").success(function(data, status, headers, config){
	        //console.log("Data : ", data);
	    }).error(function(){
	        console.log("Error");
	    })
	};
		
}]);
	