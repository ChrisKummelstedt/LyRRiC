var lyrric = angular.module('lyrric',['ngResource', 'ngRoute']);

lyrric.factory("Statement", function($resource) {
  return $resource("/statements/:id", { id: '@id' }, {
    show:  { method: 'GET', isArray: true  },
    add: { method: 'PUT', responseType: 'json' }
  });
});

lyrric.factory("Statements", function($resource) {
  return $resource("/statements", { }, {
    index:  { method: 'GET', isArray: true },
  });
});

lyrric.config(function ($routeProvider) {
  $routeProvider
    .when('/statements', {
      templateUrl: '/templates/statements/index.html',
      controller: 'statementsController'
    })
    .when('/statements/:id', {
      templateUrl: '/templates/statements/show.html',
      controller: 'statementController'
    })
    .otherwise({
      redirectTo: '/'
    });
  });

  lyrric.controller("statementsController", function($scope, Statements){
    $scope.statements = Statements.index()
  })

  lyrric.controller("statementController", function($scope, Statement){
    $scope.statements = Statement.show()

    $scope.addStatement = function(){
      statement = Statement.save($scope.newStatement)

      $scope.statements.push(statement)
      $scope.newStatement = {}
    }
  })

  lyrric.controller("mainController", function($scope){
    $scope.message = 'Home'
  })

  lyrric.controller("voteController", function($scope){
    $scope.init = function(id, user_id, verdict)
    {
      $scope.item = {id: id,
                   user_id: user_id,
                   verdict: verdict
                  }
    }
  })
