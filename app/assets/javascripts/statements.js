var lyrric = angular.module('lyrric',['ngResource']);

lyrric.factory("Statement", function($resource) {
  return $resource("statements/:id", { id: '@id' }, {
    index:  { method: 'GET', isArray: true, responseType: 'json' },
    update: { method: 'PUT', responseType: 'json' }
  });
  return $resource("statements/new", {
    index:  { method: 'GET', isArray: true, responseType: 'html' },
    update: { method: 'PUT', responseType: 'html' }
  });
});

  lyrric.controller("statementsController", function($scope, Statement){
    $scope.statements = Statement.index()

    $scope.username = 'World'
    $scope.addStatement = function(){
      statement = Statement.save($scope.newStatement)

      $scope.statements.push(statement)
      $scope.newStatement = {}
    }
  })
