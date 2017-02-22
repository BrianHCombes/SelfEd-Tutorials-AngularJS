angular.module('app', ['ui.router'])
  .config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    // The homepage name (which is considered a state) as part of the $stateProvider object (below)
    // is an arbitrary name and appears to glue all the views
    // together as listed in the views section below. All this is then presented
    // within the div element in the index.html file with the data-ui-view directive.     
    $stateProvider
    .state('homepage', {        
      url: '/',
      views: {
        '': {
          templateUrl: './templates/main.html'
        },
        'nav@homepage': {
          templateUrl: './templates/assets/nav.html'
        },
        'body@homepage': {
          templateUrl: './templates/body.html'
        },
        'footer@homepage': {
          templateUrl: './templates/assets/footer.html'
        }
      }
    });
  }]);
