angular.module('app1', ['ui.router'])


    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
  
            var home = {
                name: 'home',
                url: '/',
                templateUrl: 'content.html'
            },
            red = {
                name: 'red',
                url: '/red',
                parent: home,
                templateUrl: 'content.red.html'
            },
            blue = {
                name: 'blue',
                url: '/blue',
                parent: home,
                templateUrl: 'content.blue.html'
            },
            yellow = {
                name: 'yellow',
                url: '/yellow',
                parent: home,
                templateUrl: 'content.yellow.html'
            },
            green = {
                name: 'green',
                url: '/green',
                parent: home,
                templateUrl: 'content.green.html'
            };
    
        $stateProvider.state(home);
        $stateProvider.state(red);
        $stateProvider.state(green);
        $stateProvider.state(blue);
        $stateProvider.state(yellow);
        
        $stateProvider.state({
            name:   'purple',
            url:    '/purple',
            parent: home,
            templateUrl: 'content.purple.html'
        });
   
/*            
        $stateProvider
            .state('testView', {
                url: '/',
                views: {
                    'view2': {templateUrl: './view1.tmpl1.html'} 
                }
        })
*/  

        $stateProvider
            .state({
                name:'testView',
                url: '/',
                parent: home,
                templateUrl: './view1.tmpl1.html' 
        });



    }])

/*
    .run(['$state', function ($state) {
      $state.transitionTo('home'); 
    }])
*/

    .controller('SidebarCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.content = ['red', 'green', 'blue', 'yellow', 'purple', 'testView'];

    $scope.setPage = function (page) {
        $state.transitionTo(page);
    };
}])


;


