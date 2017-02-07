# Template / Example Only
### **_My 'SelfEd' Code Diaries_**
#**Javascript - _Tutorial Name Here_**
Run in Plunker | Citation / Note
----------------------------------------------------------------------------|--------------------------------------------------------
[:small_blue_diamond:**callback_Exp0.html**](https://plnkr.co/edit/QdQFfdurycvpxEiNCOtB?p=preview) | [Citation AAA - Author credit for basic code structure](https://github.com/BrianHCombes/SelfEd-Tutorials-Javascript/blob/master/SelfEd-Javascript-Functions-Asynchronous-Calls/References.md)
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

  
