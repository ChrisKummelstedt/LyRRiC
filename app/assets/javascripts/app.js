var lyrric = angular.module('lyrric',['ngResource', 'ngRoute', 'ngTouch']);

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

lyrric.factory("Votes", function($resource) {
  return $resource("/statements/1/votes", { }, {
    vindex:  { method: 'GET', isArray: true },
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
    .when('/votes', {
      templateUrl: '/templates/votes/index.html',
      controller: 'voteController'
    })
    .otherwise({
      redirectTo: '/'
    })
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
    var stopActions = function ($event) {
        if ($event.stopPropagation) {
            $event.stopPropagation();
        }
        if ($event.preventDefault) {
            $event.preventDefault();
        }
        $event.cancelBubble = true;
        $event.returnValue = false;
    };

    // Carousel thing
    $scope.index = 0;
    // Hide menu
    $scope.showMenu = false;
    // Links
    $scope.navigation = [{
        title: "Satements",
        href: "#/statements"
    }, {
        title: "Votes",
        href: "#/votes"
    }];
    // Increment carousel thing
    $scope.next = function ($event) {
        stopActions($event);
        $scope.index++;
    };
    // Decrement carousel thing
    $scope.prev = function ($event) {
        stopActions($event);
        $scope.index--;
    };
  })

  lyrric.controller("voteController", function($scope, Votes){
    $scope.votes = Votes.vindex()

  })
