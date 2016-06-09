var lyrric = angular.module('lyrric',['ngResource', 'ngRoute']);

lyrric.factory("Statement", function($resource) {
  return $resource("statements/:id", { id: '@id' }, {
    index:  { method: 'GET', isArray: true, responseType: 'json' },
    update: { method: 'PUT', responseType: 'json' }
  });
});


// lyrric.config(function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: '/statements',
//       controller: 'statementsController'
//     })
//     .when('/statements/:id', {
//       templateUrl: '/',
//       controller: 'statementsController2'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
//   });

  lyrric.controller("statementsController", function($scope, Statement){
    $scope.statements = Statement.index()

    $scope.addStatement = function(){
      statement = Statement.save($scope.newStatement)

      $scope.statements.push(statement)
      $scope.newStatement = {}
    }
  })

  lyrric.controller("statementsController2", function($scope, Statement){
    $scope.statements = Statement.index()

    $scope.username = 'World'
    $scope.addStatement = function(){
      statement = Statement.save($scope.newStatement)

      $scope.statements.push(statement)
      $scope.newStatement = {}
    }
  })
