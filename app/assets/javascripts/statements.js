var lyrric = angular.module('lyrric',['ngResource']);

lyrric.factory("Statement", function($resource) {
  return $resource("statements/:id", { id: '@id' }, {
    index:  { method: 'GET', isArray: true, responseType: 'json' },
    update: { method: 'PUT', responseType: 'json' }
  });
});

  lyrric.controller("statementsController", function($scope, Statement){
    $scope.statements = Statement.index()

    $scope.addStatement = function(){
      statement = Statement.save($scope.newStatement)

      $scope.statements.push(statement)
      $scope.newStatement = {}
    }
  })
