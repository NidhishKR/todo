angular.module('todoService', [])
  $scope.baseUrl = "http://api.nestoria.co.uk/api?action=echo&encoding=json&foo=bar";
	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get(baseUrl + '/api/todos');
			},
			create : function(todoData) {
				return $http.post(baseUrl + '/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete(baseUrl + '/api/todos/' + id);
			}
		}
	}]);
