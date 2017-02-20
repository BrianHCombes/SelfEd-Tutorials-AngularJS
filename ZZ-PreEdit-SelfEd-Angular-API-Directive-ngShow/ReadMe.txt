SelfEd Date: 		01/12/2017
                        11/04/2017 (This is the original data I started this SelfEd.

SelfEd Title:           SelfEd-Angular-API-Directive-ngShow

SelfEd Objective:       Continue learning the nuances of ngShow

SelfEd Catalyst:        Been working on practice project:
                        < SelfEd-Angular-Practice-ProjectA-HTTP-Service >
                        I needed an element to not show till a button was 
                        clicked. Stumbled around for a while and decided I 
                        needed to do a SelfEd on ngShow. But I looked in my
                        SelfEd library and found I had done this SelfEd
                        already. But while working on the practice project
                        I did a side project which ended up emulating this
                        SelfEd without me recollecting this SelfEd. However,
                        this SelfEd is more sophisticated but I will expand
                        on it never-the-less.

SelfEd References:      https://docs.angularjs.org/api/ng/directive/ngShow 
                        https://scotch.io/tutorials/how-to-use-ngshow-and-nghide

Process: 
    This SelfEd is reasonably self evident in its workings. 
    The basic objective is to simply use < ng-show > to show and hide < HTML 
    elements >.
    
    01/12/2017
    Have added a toggle button to show and hide an < HTML element >.  
    The text and styling of said view toggles on and off via a directive 
    variable called "showText." 
    Amazingly, the variable is local only to the button element that activates 
    the toggling and the div showing the text. See < Code Block AAA > for 
    details.
    
    Have added an input box and when you type cat, dog, etc. the animal image 
    appears. 
    It's using < ngShow > to evaluate an expression as an if-then statement 
    would do.
    See: < Code Block CCC >. These examples are from the following
    tutorial: < https://scotch.io/tutorials/how-to-use-ngshow-and-nghide >
    So far the scotch.io tutorials are doing me well and show more than the
    API. But the API does have animation examples if I want to get fancy.

    01/14/2017
    After having trouble using < ngShow > with <ngRepeat > I finally figured out
    how to do "something" with < ngShow > in conjunction with < ngRepeat >. See
    < Code Block DDD > for details. Seems there are limitations without
    the involvement of a controller. The understanding is when using < ngShow >
    with < ngRepeat > and without a < controller > the scope of the 
    particular < ngShow > is local to it's HTML element where < ngRepeat > was
    declared and said HTML element's children. Check out the operations 
    of the buttons to see the action.
