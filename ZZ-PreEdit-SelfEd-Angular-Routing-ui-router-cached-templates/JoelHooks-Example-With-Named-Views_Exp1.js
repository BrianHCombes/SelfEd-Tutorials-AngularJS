angular.module('app1', ['ui.router'])


    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');

            var home = {
                name: 'home',
                url: '/',
                templateUrl: 'content.html'
            };
            var red = {                             // red, blue, yellow, green, purple, and templateView are all nested views of the home view.
                name: 'red',
                url: '/red',
                parent: home,
                templateUrl: 'content.red.html'
            };
            var blue = {
                name: 'blue',
                url: '/blue',
                //parent: home,
                templateUrl: 'content.blue.html'
            };
            var yellow = {
                name: 'yellow',
                url: '/yellow',
                parent: home,
                templateUrl: 'content.yellow.html'
            };
            var green = {
                name: 'green',
                //url: home + '.green',                 // Note the dot operator serves the same as the parent specification but the content part of the page is not displayed
                parent: home,
                url: '/green',
                //parent: home,
                templateUrl: 'content.green.html'
            };
            
        $stateProvider.state(home);
        $stateProvider.state(red);
        $stateProvider.state(blue);
        $stateProvider.state(yellow);
        $stateProvider.state(green);
        
        $stateProvider.state('purple', {            // Note where the name is specified
            //name:   'purple',
            url:    '/purple',
            parent: home,
            templateUrl: 'content.purple.html'
        });
   
        $stateProvider
            .state({
                name:'templateView',
                url: '/',
                parent: home,
                templateUrl: './view1.tmpl1.html' 
        });
    }])

        
        
    .controller('SidebarCtrl', ['$scope', '$state', function ($scope, $state) {

        $scope.content = ['red', 'green', 'blue', 'yellow', 'purple', 'templateView'];

        $scope.setPage = function (page) {
            // alert();
            $state.transitionTo(page);
        };
    }])
;


