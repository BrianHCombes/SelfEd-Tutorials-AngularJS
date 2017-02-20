SelfEd Date: 		01/04/2017

SelfEd Title:           SelfEd-Angular-ngRepeat-Creating-Button-Menu

SelfEd Objective:       To dynamically create a button menu from an array of
                        button names or objects.

SelfEd Catalyst:        As I was working on my practice project named:
                        < SelfEd-Angular-Practice-Project > I needed to set up
                        a drop down menu of buttons from an array that may vary
                        depending on the number of button names.

SelfEd References:
    SelfEd-Angular-Practice-ProjectA
    http://stackoverflow.com/questions/17891312/button-inside-ng-repeat-to-update-input-in-form
    http://stackoverflow.com/questions/34093819/angularjs-accessing-dom-element-by-id-inside-ng-repeat
    http://stackoverflow.com/questions/15527838/ng-show-for-a-specific-element-within-ng-repeat
    http://jsfiddle.net/odiseo/twSFK/7/
    http://stackoverflow.com/questions/30256703/angularjs-dom-manipulation-of-ng-repeat-elements-in-a-directive
    https://www.bennadel.com/blog/2443-rendering-dom-elements-with-ngrepeat-in-angularjs.htm
    http://stackoverflow.com/questions/23411015/how-to-manipulate-many-elements-inside-an-ng-repeat  // this might be the one, the next link is referenced in this, NOT!
    http://plnkr.co/edit/gYLH7Z4b03lS2gZBHceC?p=preview                                              // this is the next link and might be the one, NOT!
    https://github.com/angular/angular.js/issues/2500
    http://stackoverflow.com/questions/23655009/how-to-set-the-id-attribute-of-a-html-element-dynamically-with-angular-js

Process:
    This project is reasonably self explanatory assuming your brushed up on 
    Angular basics. The big challenge was how to know which button was 
    clicked. It was simple with < ng-click > I call a 
    function and send the button name, object id, < $index >, or whatever 
    you might choose to use as an argument.

    Please see < Button-Menu.html > for a working example.

    01/15/2017
    I'm  back to expand upon the use of ngRepeat. I will generate an array of
    buttons and when a button is clicked an exclusive piece of data will
    show next to that button. The challenge is not so much about displaying
    the data but locating the data next to the particular button.

    01/16/2017
    Still no luck figuring out how to show data next to the clicked button.
    However, it's very easy using traditional DOM manipulation. But I'm
    trying to do it using ngShow. So far when using ngShow the data for
    every button appears next to said buttons when just one of the buttons is 
    clicked. I want only data showing next to the clicked button.

    01/21/2017
    Maybe some luck:
    Refer to: < Code Block DDD >
    I added an extra property to the resident data array of objects.
    I called the property < show >. 
    initialize the property with the boolean value < false >. Then after the
    array is displayed using ngRepeat (which includes buttons) and upon 
    selecting a button I pass the < $index > of that button to the 
    code to change the boolean value of that button's < show > property
    to < true >. Then of course, since  a change has occurred Angular updates
    everything and ngRepeat picks up that property of that particular button.
    So if I apply that property to < ngShow > for any arbitrary information I
    want to show next to that button, it works great.

    Although I did it with pure Angular it still seems cheesy that I have
    to add the (created on my part) < show > property to each object in 
    the array, then set it accordingly. But it works good, for now.

    01/22/2017
    Dynamic addition of property to be used by ngShow:
    Refer to: < Code Block EEE >
    Now to improve upon what I did in < Code Block DDD > I will dynamically
    add a property to the resident data array of objects. The property will
    be called show (like before) and be used by < ngShow >. 

    Filter insight???
    This dynamic addition to the resident array may be 
    giving me an insight on how AngularJS filters work. 
    Conceivably, you could dynamically add a "show" property for use by 
    < ngShow >, then 
    search through the array for a match(s) and then set the "show" 
    property to true for each match and then display the array contents 
    whose objects have < true > as the show property value.
    I added a simple filter example to the book's filter example. 
    See: < SelfEd-AngularJS-UpAndRunning > 
    example: < Ch08-Page128_filter-arrays > for the filter example.

    I have succesfully added a the < show > property (the show property is
    of my creation) dynamically. Thus < Code Block EEE > has the same outcome
    as < Code Block DDD >. 

    It should be noted if the array is to be re-saved on a database then
    the < show > property needs to be stripped away prior to saving.
