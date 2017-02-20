 angular.module('inputTest', ['ui.router', 'ui-view-module'])
        
/*        
            .config([
            '$stateProvider' , '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('whateggly', {
                    url: '/',
                    views: {
                        'view1': { templateUrl: './tmplTest.tmpl1.html'},
                        
                        'view2': { templateUrl: './tmplTest.tmpl2.html',
                                   controller:  'view2Ctrl'},
                               
                        'view3': { templateUrl: './tmplTest.tmpl3.html'}       
                        
                    }
                        //controller: 'secondCtrl'
                })
                
            }])
*/        
        
            .controller('inputCtrl', ['$log', '$scope', function($log, $scope) {
               
                var receive = this;
                receive.submit = function(){
                    $log.log('The first input is: ' + receive.inputA + " and the second input is: " + receive.inputB);
                    receive.inputC = "These are the submitted values: " + receive.inputA + " and " + receive.inputB;
                    
                    receive.inputCCSS = function(){
                        return "inputCC";
                };
                    
                };
                
                receive.inputACSS = function(){
                    return "inputA";
                };
                
                receive.inputBCSS = function(){
                    return "inputB";
                };
                
               
                
                
            }])
        
        
            .controller('secondCtrl', [function() {
                var secondVar = this;
                secondVar.secondCtrlValue = "Yes! this is from the second controller";
            }])


             .controller('view2Ctrl', [ '$scope', function($scope){
                $scope.view2Var = 'This is from the view2Ctrl controller which is a third controller but is accessed via the view called \"view2\"';
             }])
         
 
            .controller('view3Ctrl', ['$scope', function($scope) {
                $scope.view3Var =  'This is the view3Var $scope variable';
             }])
 
;