### **_My 'SelfEd' Code Diaries_**
#**AngularJS - _Nested Views_**
Run in Plunker | Citation / Note
----------------------------------------------------------------------------|--------------------------------------------------------
[:small_blue_diamond:**Nested views using ui-router** - _Nested-Views_Exp0.html_](https://plnkr.co/edit/x8zGrkmMuajZerl8pS8u?p=preview) | :computer:run program for instructional content


:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :red_circle: **To Do Updates**
**Date Posted**     |  **Description of Updates To Do** 
------------------- | ------------------------------------------------------------------------
03-30-2017          | :heavy_exclamation_mark: I figured it out. Use the **restrict** keyword with the value of **E** to designate a directive as an HTML element and then you can nest another directive into it.    While studying custom directives, see book **AngularJS Up and Running - Chapter 11 - Page 176** I realized this is way to display HTML templates and snippets as well. However, I was not able nest these templates. I did not spend much time on it but it's worthy to dig deeper on this. 
03-25-2017          | Found where the **'data'** word in **'data-ui-view'** comes from. See: **https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes**
02/23/2017          | Need to add the dot operator as another way to nest views. An example: $stateProvider.state("home.newest", {}); See the end of this page at this link [**Nesting with dot operator**](https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$stateProvider)


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
----------------------|-------------------------------------------------------------------
Learned from:         | https://ui-router.github.io/ng1/docs/0.3.1/index.html#/api/ui.router.state.$stateProvider
Learned from:         | https://github.com/angular-ui/ui-router/wiki/quick-reference#stateproviderstatestatename-stateconfig
Learned from:         | https://github.com/angular-ui/ui-router/wiki/quick-reference
Learned from:         | https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
Learned from:         | http://codereview.stackexchange.com/questions/69266/json-conversion-to-single-quotes
Learned from:         | https://github.com/angular-ui/ui-router/wiki/Nested-States-&-Nested-Views
          
          
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

### :arrow_down_small: **Learn Process:**

- 11/01/2016    
  Had finished this but have returned on 11/16/2017 to tidy it up for GitHub
    
  In the process of posting SelfEd: [:small_blue_diamond:**SelfEd-Angular-States-Understanding-Of**](https://github.com/BrianHCombes/SelfEd-Tutorials-AngularJS/tree/master/Angular-States-Understanding-Of) on GitHub I picked up additional understandings of states. 

  At first glance it must be noted:

  **"The default view chain"**   
  About what I call the **"default view "chain":** In this example there are multiple nested views that all appear as default views upon page load. All the default view(s) up the sibling chain will show until the first defined url with a backslash is encountered. So if a view has a backslash for its url and that view is a child of a child of a root view, then all the views from the child through the root will show.
       

  **Various Template Source Techniques**   
  I like knowing all the possible ways to achieve the same thing. So aside from nesting the views, I have sourced the HTML templates in three different ways via **cached template, separate file template, and by direct template.** 
 
  **Various Controller Instantiations**   
  I have also successfully declared a controller instance in three different ways for the various views. Notably, the two controller instances declared in the view configuration objects as defined in the configuration module and the one controller instance declared in one of the views itself.
  
- 02/19/2017   
    There is notable mention when you run the program. View 3 has a button to click so you can see the template contents of view 3. To make this work I had to create a fourth view because I needed a background to put the html text of view 3's template onto. Prior, I tried to use ng-show but that involved using a child scope to set a parent scope which doesn't work. So watch out for this trap.
