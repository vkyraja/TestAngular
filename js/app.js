var mainApp = angular.module("myapp", []);

mainApp.controller("StudentController", function($scope, $http, MathService, CalcService) {
  var url = 'assets/data.txt';
  $scope.student = {
    firstName: 'Guest', lastName: 'User', country: 'United Kingdom', clickCounter: 0,
    value1: 0, value2: 0, result: 0,
    countries: [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}],
    fullName: function() {
      var stdObj = $scope.student;
      return stdObj.firstName + ' ' + stdObj.lastName;
    },
    countClick:function() {
      var stdObj = $scope.student;
      stdObj.clickCounter = stdObj.clickCounter + 1;
    },
    calculate: function() {
      var stdObj = $scope.student;
      var sqrVal = stdObj.calcSquare(stdObj.value1);
      stdObj.result = MathService.multiply(sqrVal, stdObj.value2);
    },
    calcSquare: function(val) {
      var stdObj = $scope.student;
      return CalcService.square(val);
    }
  };
  $http.get(url).success(function(resp) {
    $scope.students = resp;
  });
});

// Factory
mainApp.factory('MathService', function() {
  var factory =  {};

  factory.multiply = function(a, b) {
    return a * b;
  };

  return factory;
});

// Service
mainApp.service('CalcService',function(MathService) {
  this.square = function(a) {
    return MathService.multiply(a, a);
  };
});
