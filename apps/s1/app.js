var app = angular.module("app", []);

app.controller('FirstCtrl', function FirstCtrl($scope) {
   
    $scope.message = "dynamic content from controller";

    $scope.headder = "Employee List";
    $scope.employeedata = {"employees":[
						    {"firstName":"fname1", "lastName":"lname1"},
						    {"firstName":"fname2", "lastName":"lname2"},
						    {"firstName":"fname3", "lastName":"lname3"}
								]};

  })