### **_My 'SelfEd' Code Diaries_**
#**AngularJS - _Understanding States_**
Run in Plunker | Citation / Note
----------------------------------------------------------------------------|--------------------------------------------------------
[:small_blue_diamond:**ngRoute and ui-router in same config module** - _Basic-States_Exp0a.html_](https://plnkr.co/edit/tZ2xyi8Tn3vD7DauKpMN?p=preview)| **It can't be good!**       
[:small_blue_diamond:**Finite States using ngRoute** - _Basic-States_Exp0b.html_](https://plnkr.co/edit/L5PndkcloCtAPt9bln5o?p=preview) | 
[:small_blue_diamond:**Finite States using ui-router** - _Basic-States_Exp0c.html_](https://plnkr.co/edit/ngVu8z4eEdp2dqp7hzKS?p=preview) | [Citation AAC - Author credit for basic code structure](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/blob/master/SelfEd-Javascript-Functions-Asynchronous-Calls/References.md)
|
[:small_blue_diamond:**Understanding States using ui-router** - _Basic-States_Exp1.html_](https://plnkr.co/edit/910949PUN6V5uX5lswEa?p=preview) | :computer:run program for instructional content
|
[:small_blue_diamond:**Understanding States using ui-router - Other Default View Options** - _Basic-States_Exp2.html_](https://plnkr.co/edit/JBpCaIeV9BuyBtKYQCJt?p=preview) | :computer:run program for instructional content

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Metadata**
**SelfEd**          |  **Info** 
------------------- | ------------------------------------------------------------------------
**Date:**           | 10/19/2016
**Archive_Title:**  | SelfEd-Angular-States-Understanding-Of
**Objective:**      | To better understand routes (states) and the differences between ngRoute and ui-router.
**Catalyst:**      | To better know an important component of Angular.                                                                        
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Tutorial Links**
**Citation / Note**   | **Links learned from....**                                                
----------------------|-----------------------
[AAC](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/blob/master/SelfEd-Javascript-Functions-Asynchronous-Calls/References.md)  | Primary tutorial credit goes to: **Joel Hooks**. His tutorial that helped me the most is here:   http://joelhooks.com/blog/2013/07/22/the-basics-of-using-ui-router-with-angularjs/ 
                      | https://leanpub.com/router
                      | https://medium.com/@vsavkin
                      | https://ui-router.github.io/guide/states  (This is a great tutorial)
                      | https://ui-router.github.io/ng1/
                      | https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router
                      | http://ngmodules.org/modules/ui-router
                      | http://stackoverflow.com/questions/20482051/how-to-set-a-default-state-with-angular-ui-router
                      | http://stackoverflow.com/questions/21023763/angularjs-difference-between-angular-route-and-angular-ui-router                           | https://docs.angularjs.org/api/ng/directive/ngModel
                      | https://docs.angularjs.org/api/ng/directive/select
                      | https://docs.angularjs.org/api/ng/directive/ngOptions (go to the example at the end of this web page)
                      | http://stackoverflow.com/questions/24526801/difference-between-ui-sref-and-state-go-in-angularjs-ui-router
                      | https://www.oho.com/blog/explained-60-seconds-hash-symbols-urls-and-seo
                      | https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$state
                      | https://github.com/angular-ui/ui-router/wiki
                      | https://github.com/angular-ui/ui-router/wiki/Quick-Reference
                      | https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stategoto--toparams--options
                      | http://webdesign.about.com/od/beginningtutorials/a/aa040502a.htm                      
                      
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Learn Process:**

**02/06/2017:**    
Although I started this SelfEd in Oct 2016, I am back to prep for presentation on my GitHub account. It's a challenge to determine where to begin this discussion. At this moment I'd been asking what is the difference between **$routeProvider** and **$stateProvider** when setting up routes in the config module. 

[:small_blue_diamond: **Difference between ngRoute and ui-router**](http://stackoverflow.com/questions/33144690/what-is-diff-between-routeprovider-stateprovider-in-angularjs)

Per the above link, the most glaring difference is **$routeProvider** only allows one view using **ng-view** but **$stateProvider** allows multiple views and nested views using **ui-view**.

My favorite tutorial book: [:small_blue_diamond: **AngularJS Up and Running**](https://www.safaribooksonline.com/library/view/angularjs-up-and/9781491901939/)  starts off with **ngRoute** with **$routeProvider**and makes mention there are alternatives. In fact, on page 141, it mentions ngRoute is no longer part of the core AngularJS library because there are so many routing alternatives available. It then discusses the ui-router alternative on page 165.

Since this SelfEd is about **states** I'll stick with the **ui-router** dependency which is an alternative to **ngRoute**. However, this SelfEd uses only a single view in the examples so it is likely I could also use **ngRoute** to do the same thing. For practice I used ** ngRoute _JUST NOW!_**  Rather, I added **ngRoute** along side **ui.router** and it works. See SelfEd file:
    
[:small_blue_diamond: Basic-States_Exp0a.html ngRoute and ui-router in same config module](https://plnkr.co/edit/tZ2xyi8Tn3vD7DauKpMN?p=preview) (An Experiment - Avoid Otherwise) 

It has a bit of funny behavior: when you click on a **ui.router** button it displays its view but it takes away the **ngRoute** view that was showing, But not the other way around. Otherwise, it shows you can use **ngRoute** and **ui.router** in the same config module. Until I know more, **I don't like the feel of using both together so I'll will avoid it**.
            
I've separated the two into separate files. They are:
                
[:small_blue_diamond: Basic-States_Exp0b.html - Finite states using ngRoute](https://plnkr.co/edit/L5PndkcloCtAPt9bln5o?p=preview)    
[:small_blue_diamond: Basic-States_Exp0c.html - Finite states using ui-router](https://plnkr.co/edit/ngVu8z4eEdp2dqp7hzKS?p=preview) 
    
The outcomes appear identical but I recommend using ui-router for development because it has many more options and capabilites.

**02/10/2017:**   
Have moved on to my tutorial file **Basic-Sates_Exp1.html** which only uses the **ui-router** routing framework. See the code for the nuances and variances of using ** ui-router **.

I do use **ui-sref** in the  tags and use **$state.go** in the button tags. The outcomes are the same but each seems most appropriate  for the particular tag. Here's further discussion on the differences.  


:small_blue_diamond: http://stackoverflow.com/questions/24526801/difference-between-ui-sref-and-state-go-in-angularjs-ui-router

Meanwhile, I decided I want to add a form element with a select tag for a drop down list to look at the properties of each state. Turns out doing a drop down list in angular is different and appears to be like doing ngRepeat. I split the difference and added a traditional drop down list using select and incorporated **ng-model** to bind the user selection to the scope. The ng-model API is very helpful: 

[:small_blue_diamond: **ngModel API**](https://docs.angularjs.org/api/ng/directive/ngModel)    
    
Also very helpful:   

[:small_blue_diamond: **Angular select API**](https://docs.angularjs.org/api/ng/directive/select)    
[:small_blue_diamond: **ngOptions API**](https://docs.angularjs.org/api/ng/directive/ngOptions) (see the example at the end of this ngOptions web page)

  https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$state

**02/13/2017**   
I finished (it's never finished) the SelfEd file: **Basic-States_Exp1.html** Basically it covers four different state configurations using ui-router. A good chunk of the discussion is about the url parameter and how it affects browser behavior. Also worthy of mention is the hash symbol. It gets inserted into the url to separate the absolute url from the relative url or parameter. Here's a good discussion about the hash symbol:
    
[:small_blue_diamond: **The role of a Hash symbol in a url**](https://www.oho.com/blog/explained-60-seconds-hash-symbols-urls-and-seo)

And here's a couple of good explanations about what a url is:

[:small_blue_diamond: **Take 1 - What is a url?**](https://www.reference.com/technology/url-80ba1ae105569ffb?qo=contentSimilarQuestions#)
[:small_blue_diamond: **Take 2 - What is a url?**](http://webdesign.about.com/od/beginningtutorials/a/aa040502a.htm)
    
But beyond what I discuss I have not found much more about it. There must be more! Time will tell. Meanwhile run the file: 
[:small_blue_diamond:**Understanding States using ui-router** - _Basic-States_Exp1.html_](https://plnkr.co/edit/910949PUN6V5uX5lswEa?p=preview) for the instructional content.

In the next SelfEd file: < Basic-States_Exp2.html > I will discuss other ways to activate the default view without setting the url property to a simple backslash.   
**AH!!! There's a third way to default to a specified view** [:small_blue_diamond: **3 Default Ways**](https://github.com/angular-ui/ui-router/wiki)

**02/15/2017**   
I have finished the SelfEd file: < Basic-States_Exp2.html >. It is a simple example about using the < .run > method to initialize the default state. Here are good API docs about the run method:

    < https://docs.angularjs.org/guide/module > (about run blocks)
    < https://docs.angularjs.org/api/ng/type/angular.Module >

At the end of this particular SelfEd I have an example of a nested view and and a link to my SelfEd about nested views called:          < SelfEd-Angular-Nested-Views >. Run this app for the instructional content.

