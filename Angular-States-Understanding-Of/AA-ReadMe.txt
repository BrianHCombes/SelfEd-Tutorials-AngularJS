SelfEd Date: 	10/19/2016

SelfEd Title:           SelfEd-Angular-States-Understanding-Of

SelfEd Objective:       To better understand routes (states) and the differences
                        between ngRoute and ui-router

SelfEd Catalyst:        To better know an important component of Angular.     

SelfEd References:
            https://leanpub.com/router
            https://medium.com/@vsavkin
            https://ui-router.github.io/ng1/
            https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router
            http://ngmodules.org/modules/ui-router
            http://joelhooks.com/blog/2013/07/22/the-basics-of-using-ui-router-with-angularjs/   (Give Joel credit for this SelfEd code configuration)
            http://stackoverflow.com/questions/20482051/how-to-set-a-default-state-with-angular-ui-router
            http://stackoverflow.com/questions/21023763/angularjs-difference-between-angular-route-and-angular-ui-router

Process:

    02/16/2017:
    Although I started this SelfEd in Oct 2016, I am back to prep for 
    presentation on my GitHub account. It's a challenge to determine where
    to begin this discussion. At this moment I'd been asking what is the 
    difference between < $routeProvider > and < $stateProvider > when setting
    up routes in the config module. 

    http://stackoverflow.com/questions/33144690/what-is-diff-between-routeprovider-stateprovider-in-angularjs

    Per the above link, the most glaring difference is < $routeProvider > only
    allows one view using < ng-view > but < $stateProvider > allows multiple
    views and nested views using < ui-view >.

    My favorite tutorial book: < AngularJS Up and Running > starts off with
    < ngRoute> with < $routeProvider > and makes mention there are alternatives.
    In fact, on page 141, it mentions ngRoute is no longer part of the core
    AngularJS library because there are so many routing alternatives available.
    It then discusses the ui-router alternative on page 165.

    Since this SelfEd is about < states > I'll stick with the < ui-router >
    dependency which is an alternative to < ngRoute >. However, this SelfEd uses
    only a single view in the examples so it is likely I could also use 
    < ngRoute > to do the same thing. For practice I used < ngRoute > just now! 
    Rather, I added < ngRoute > along side < ui.router > and it works. See file:
    
                < Basic-States_Exp0a.html > 

    It has a bit of funny behavior: 
    when you click on a < ui.router > button it displays its view but it
    takes away the < ngRoute > view that was showing, But not the other way
    around. Otherwise, it shows you can use < ngRoute > and < ui.router >
    in the same config module. Until I know more, < I don't like the feel of
    using both together so I'll will avoid it >.
            
    I've separated the two into separate files. They are:
                
                < Basic-States_Exp0b.html > (ngRoute Example) 
                < Basic-States_Exp0c.html > (ui-router Example) 
    
    The outcomes appear identical but I recommend using ui-router for
    development because it has many more options and capabilites.

            
