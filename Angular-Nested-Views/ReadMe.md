### **_My 'SelfEd' Code Diaries_**
#**AngularJS - _Nested Views_**
Run in Plunker | Citation / Note
----------------------------------------------------------------------------|--------------------------------------------------------
[:small_blue_diamond:**callback_Exp0.html**](https://plnkr.co/edit/9kyuMzqQtq3Q3MP8mjGC?p=preview) | [Citation AAA - Author credit for basic code structure](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/blob/master/SelfEd-Javascript-Functions-Asynchronous-Calls/References.md)
[:small_blue_diamond:**callback_Exp1.html**](https://plnkr.co/edit/WbKJVIO7N85KcxFPkhtS?p=preview) | [Citation AAA - Author credit for basic code structure](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/blob/master/SelfEd-Javascript-Functions-Asynchronous-Calls/References.md)
[:small_blue_diamond:**callback_Exp2.html**](https://plnkr.co/edit/7n4uamnMBGll6IP1MyJm?p=preview) | [Citation AAA - Author credit for basic code structure](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/blob/master/SelfEd-Javascript-Functions-Asynchronous-Calls/References.md)

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Metadata**
**SelfEd**          |  **Info** 
------------------- | ------------------------------------------------------------------------
**Date:**           | 11/27/2016
                    | 01/27/2017 (Update)
**Archive_Title:**  | SelfEd-Javascript-Functions-Asynchronous-Calls
**Objective:**      | To better understand asynchronous functions (calls) to better understand things like 'promises'
**Catalyst 1:**     | Was reviewing node.js, namely these links:                                                                       **[https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm](https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm) ,   [SelfEd-Javascript-Functions-Closures](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/tree/master/SelfEd-Javascript-Functions-Closures) ,  [SelfEd-NodeJS-Server-Creating-Of-B](https://github.com/BrianHCombes/SelfEd-Tutorials-NodeJS/tree/master/SelfEd-NodeJS-Server-Creating-Of-B)** and still felt unsatisfied about the underlying mechanism that makes a function asynchronous. Explanations seemed lacking and examples seemed overly complicated. But I have a hunch and am developing that hunch in this SelfEd. 
**Catalyst 2:**     | Also was having trouble moving the RESTful call **_$http.get_** from a controller to a service method in Angular. 

:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Tutorial Links**
**Citation / Note**   | **Links learned from....**                                                
----------------------|-----------------------
[AAA](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/blob/master/SelfEd-Javascript-Functions-Asynchronous-Calls/References.md)  | Primary tutorial credit goes to: **Christopher Buecheler**. His tutorial that helped me the most is here:   http://cwbuecheler.com/web/tutorials/2013/javascript-callbacks/
                      | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function
                      | https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/
                      | http://callbackhell.com/ (Lots of good explanation in this one)
                      | http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write
                      | http://stackoverflow.com/questions/6921895/synchronous-delay-in-code-execution
                      | https://www.impressivewebs.com/callback-functions-javascript/
                      | http://softwareengineering.stackexchange.com/questions/194580/how-does-javascript-code-become-asynchronous-when-using-callbacks
                      | https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm
                      | [SelfEd-Javascript-Functions-Closures](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/tree/master/SelfEd-Javascript-Functions-Closures) 
                      | [SelfEd-NodeJS-Server-Creating-Of-B](https://github.com/BrianHCombes/SelfEd-Tutorials-NodeJS/tree/master/SelfEd-NodeJS-Server-Creating-Of-B)
                      
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Learn Process:**

  - 11/27/2016     
    First Approach: call setTimeout() functions within defined functions

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
