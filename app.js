myApp = angular.module('myApp', []);

myApp.controller('todoCtrl', function($scope) {

	$scope.todos = [
		{text: 'Learn angular', done: false},
		{text: 'Correct HW4', done: true},
	];

	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	}

	$scope.getRemainingTodos = function() {
		return $scope.todos.filter(function(todo) {
			return !todo.done;
		}).length;
	}

	$scope.addTodo = function() {
		var myTodo = $scope.newTodo;
		$scope.todos.push({text: myTodo, done: false});
		$scope.newTodo = "";
	}

	$scope.onClickClear = function() {
		$scope.todos = $scope.todos.filter(function(todo) {
			return !todo.done;
		});
	}

});