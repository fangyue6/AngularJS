//模块
var myModule = angular.module("HelloAngular",[]);
myModule.controller("helloAngular",['$scope',
    function HelloAngular($scope){
	$scope.greeting={
		text:"Hello"
	};
}
]);
