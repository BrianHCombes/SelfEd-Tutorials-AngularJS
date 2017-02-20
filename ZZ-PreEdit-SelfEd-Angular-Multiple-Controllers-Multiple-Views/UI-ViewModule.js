angular.module('ui-view-module', ['ui.router'])

        .config([
        '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');    
        $stateProvider
                .state('AdditionalState', {
                    url:'/',
            
                    views: {
                        'view1': { templateUrl: './tmplTest.tmpl1.html'},
                        
                        'view2': { templateUrl: './tmplTest.tmpl2.html',
                                   controller:  'view2Ctrl'},
                               
                        'view3': { templateUrl: './tmplTest.tmpl3.html',
                                   controller:  'view3Ctrl'}       
                        
                    }
                });    
            
            
        }]);


