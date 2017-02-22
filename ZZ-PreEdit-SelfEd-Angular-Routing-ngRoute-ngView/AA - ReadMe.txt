SelfEd Date: 		09/09/2016
                        12/31/2016
                        (This is a revisit and update on 12/31/2016 because 
                        I needed to reference this SelfEd while doing another 
                        lesson. See SelfEd Catalyst for the other lesson)

SelfEd Title:           SelfEd-Angular-Routing-ngRoute-ng-view

SelfEd Objective:       To learn Angular Routing

SelfEd Catalyst:        This SelfEd was part of my normal learning process. 
                        I had to return to it on 12/31/2016 because I was 
                        having trouble with a routing example from the book:

                        < AngularJS Up and Running - Ch 10 - page 142 >

                        It turned out to be a really stupid problem (syntax).
                        But it brought me to this lesson and deepened my
                        understanding never-the-less.

SelfEd References:      
                        http://www.w3schools.com/angular/angular_routing.asp
                        Book: AngularJS Up and Running - Chapter10
                        SelfEd-AngularJS-UpAndRunning/Ch10-Page139_Routing-Using-ngRoute



Process:

    This is a working routing example. Most of it is self explanatory. 
    But note the url path formats on the templateUrl lines and the folders 
    containing the called upon html files.

    Also note the page links like #red have no name convention relation 
    with the templateUrl path. You can name them independently.

    02/21/2017
    When publishing this to Plunker it would not work. Have learned it was a 
    problem with the libraries. Found an example online and used the following
    libraries to get everything working.

    <script src="//code.angularjs.org/1.2.26/angular.js"></script> 
    <script src="https://code.angularjs.org/1.2.26/angular-route.min.js"></script>

    Suspect it has to do with ngRoute. The libraries I use here work just fine.
    So I need to get a better feel for the available libraries and who is the
    go to source for those libraries.

    Whoa Whoa, I think I found the go to library. It's from the horses mouth
    itself and is:

    https://code.angularjs.org/ 

    And stumbled into the development process which is a great resource for 
    understanding the development environment.

    https://angular.io/news.html 
