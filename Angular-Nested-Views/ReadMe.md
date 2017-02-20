### **_My 'SelfEd' Code Diaries_**
#**AngularJS - _Nested Views_**
Run in Plunker | Citation / Note
----------------------------------------------------------------------------|--------------------------------------------------------
[:small_blue_diamond:**Nested views using ui-router** - _Nested-Views_Exp0.html_](https://plnkr.co/edit/x8zGrkmMuajZerl8pS8u?p=preview) | :computer:run program for instructional content


:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Metadata**
**SelfEd**          |  **Info** 
------------------- | ------------------------------------------------------------------------
**Date:**           | 11/01/2017
**Archive_Title:**  | SelfEd-Angular-Nested-Views
**Objective:**      | To have ready examples of nested views using ui-router
**Catalyst:**       | After finishing Angular states tutorial wanted to work on states within states (nested views) to deepen the understanding 

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Tutorial Links**
**Citation / Note**   | **Links learned from....**                                                
----------------------|-----------------------
                      | https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$stateProvider
                      | https://github.com/angular-ui/ui-router/wiki/quick-reference#stateproviderstatestatename-stateconfig
                      | https://github.com/angular-ui/ui-router/wiki/quick-reference
                      | https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
                      | http://codereview.stackexchange.com/questions/69266/json-conversion-to-single-quotes
                      | https://github.com/angular-ui/ui-router/wiki/Nested-States-&-Nested-Views
           
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Learn Process:**

- 11/01/2016    
Had finished this but have returned on 11/16/2017 to tidy it up for GitHub
    
  In the process of posting SelfEd: [:small_blue_diamond:**SelfEd-Angular-States-Understanding-Of**](https://github.com/BrianHCombes/SelfEd-Tutorials-AngularJS/tree/master/Angular-States-Understanding-Of) on GitHub I picked up additional understandings of states. 

  At first glance it must be noted:

**"The default view chain"**   
  About what I call the **"default view "chain":** In this example there are multiple nested views that all appear as default views upon page load. All the default view(s) up the sibling chain will show until the first defined url with a backslash is encountered. So if a view has a backslash for its url and that view is a child of a child of a root view, then all the views from the child through the root will show.
       













I decided to set up three functions called time1, time2, time3. I installed the setTimeout() function in each one. I set them to 1000, 2000, 3000 milliseconds and called them upon page load. They executed accordingly. But now I wonder if the setTimeout() function is asynchronous itself. So I looked it up.

    Amazingly a couple of sites I found lay out an experiment very much like to my 
    approach. They are:

      **http://www.hiddenwebgenius.com/blog/guides/understanding-javascripts-asynchronous-code/**        
      **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function**

  - 12/3/2016   
    Note: My quest for asynchronous javascript without the help of NodeJS is not complete.            

  - 12/4/2016   
    Note: I'm back trying to better grasp how callback functions work. I'm fairly comfortable using them but I want to know how they work. Heres a hopeful link:

      **http://cwbuecheler.com/web/tutorials/2013/javascript-callbacks/**

    I decided to follow this guy's tutorials on callbacks. He seems to break it down nicely into progressively understandable     examples.

    Refer to file callback_Exp0.html where I started

    Got to creating callback_Exp2.html when: I wondered what makes javascript know it's encountered a function meant to be     asynchronous?

    I queried the question and found this link below: Seems the opening question is exactly what I'm thinking.

      **http://softwareengineering.stackexchange.com/questions/194580/how-does-javascript-code-become-asynchronous-when-using-callbacks**

  - 01/06/2017   
    This is a return visit. I'm working on a practice AngularJS project: **_[SelfEd-Angular-Practice-ProjectA-HTTP-Service](https://github.com/BrianHCombes/SelfEd-Tutorials-AngularJS/tree/master/SelfEd-Angular-Practice-ProjectA-HTTP-Service)_** See **_Code section AAA_** in practice project file: **_[Client-Server_Exp4.html](https://github.com/BrianHCombes/SelfEd-Tutorials-AngularJS/blob/master/SelfEd-Angular-Practice-ProjectA-HTTP-Service/Client-Server_Exp4.html)_** I have a working **_RESTful_** call ($http.get) in the practice project file: **_[Client-Server_Exp3.html](https://github.com/BrianHCombes/SelfEd-Tutorials-AngularJS/blob/master/SelfEd-Angular-Practice-ProjectA-HTTP-Service/Client-Server_Exp3.html)_** and have a problem where I'm receiving an empty object from a RESTful service, namely **_$http.get_**. I suspect the behavior is because the code is not behaving asynchronously. It's supposed to wait for the **_$http.get_** server call to return something. I think it's blazing right past the server call. This has lead me to the **_.then()_** method and **_promises_** (see below). These objects are Javascript objects and don't seem exclusive to Angular. Yeah!
    
    Going to the **_Promise_** links below looks like good reading.

    **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then**
    **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise**

    All this seems good for fully deciphering the nuances and management of asynchronous functions. 

    The catalyst for this quest is because I'm moving an **_$http.get_** service from a controller to a service method. And as usual it doesn't work which means I don't understand something.

    **http://andyshora.com/promises-angularjs-explained-as-cartoon.html**

  - 01/11/2017        
    I think I have a little more understanding of asynchronous functions. Refer to file: **_callback_Exp2.html_** of which I've done more work on. The setTimeout function is used for the asynchronous behavior. As it turns out, all functions outside the setTimeout function are executed right away. The setTimeout function and all functions within the setTimeout function are executed after the time out completes. It seems kinda obvious now. Load the page to see what's up.

   ## :red_circle: Maybe the most important thing !!!!!!!!!!!!!!!!!!!!!!!!!!!! 
    Asynchronous behavior appears exclusive to system or query level calls. The setTimeout() method is a call to the system. A query is a call to a server, etc. These are things outside of the javascript sandbox.
