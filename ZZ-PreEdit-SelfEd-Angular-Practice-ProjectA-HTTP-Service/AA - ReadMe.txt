SelfEd Date: 		01/02/2017

SelfEd Title:           SelfEd-Angular-Practice-ProjectA-HTTP-Service

SelfEd Objective:       To build a simple client-server app for practice.

SelfEd Catalyst:        I finished chapter 10 in the book:
                        < AngularJS Up and Running > and decided it was time
                        to do a simple client-server project. I comprehended 
                        Chapter 10 reasonably well but there was a lot of
                        "maze running" and decided I needed to "run in the
                        maze" myself to better know my way around

SelfEd References:      Book: <AngularJS Up and Running >


Process:
    I'll start the project with a basic description and objective.

    Project Objective:
    To access a list of images from a menu in a view. 

    Much ad-libbing will likely take place.  

    ****************************************************************************
    Objective 1: 
    Create a menu of buttons that access the images:
    (See file: < Client-Server_Exp1.html > ) for working example
    With the idea of selecting a list of images from a menu, I needed to
    create a menu of buttons. Each button would then query a different group
    of images.
    It took me an afternoon to figure out but the solution was very simple and
    straightforward. See file: < Client-Server_Exp1.html > for a working
    example using ng-repeat and see file: < Client-Server_Exp1_1.html > for a
    NON Angular example.

    ****************************************************************************

    Objective 2:
    Set up server communication using $http:
    I started by thinking I need to put the server request in a < service > as
    per < Best Practices > on < page 104 Chapter 6 > in the book < AngularJS
    up and Running >.

    So I went to my SelfEd: < SelfEd-Angular-Services-Factory-Creating-Of >
    to review and get back up to speed on services. 

    01/05/2017
    But first I want to establish server communication from the controller
    itself, then I'll work on putting it into a service.
    

    I'm now attempting to install nodeJS in the project folder where the 
    < server.js > file run. After entering < npm install > from project
    folder: < C:\School\SelfEd\SelfEd-Angular-Practice-ProjectA-HTTP-Service\public_html >
    I got a bunch of errors. Figures!!
    
    Fix 1:  Add the < package.json > file one of the errors mentioned was
            missing. Voila! suddenly nodeJS installed
            Note: I referred to SelfEd: < SelfEd-AngularJS-UpandRunning >
            in chapter exercise: < Ch06-Page089_http-service > and copied
            and pasted the < package.json > file into this project folder.
            I am using < Ch06-Page089_http-service > as my goto reference
            for all HTTP matters including the < server.js > file which I
            copied over and have stripped it down to only perform a 
            < GET > request.

    Have added the < package.json > file and re-entered < npm install > at
    the CLI and BOOM! got a successful install of node. You can tell because
    you get a CLI output like this:

    C:\School\SelfEd\SelfEd-Angular-Practice-ProjectA-HTTP-Service\public_html>npm install
    npm WARN package.json angularjs-chapter6-server@ No description
    npm WARN package.json angularjs-chapter6-server@ No repository field.
    npm WARN package.json angularjs-chapter6-server@ No README data
    npm WARN package.json angularjs-chapter6-server@ No license field.
    morgan@1.0.1 node_modules\morgan
    └── bytes@0.3.0

    method-override@1.0.2 node_modules\method-override
    └── methods@1.0.0

    body-parser@1.0.2 node_modules\body-parser
    ├── qs@0.6.6
    ├── raw-body@1.1.7 (string_decoder@0.10.31, bytes@1.0.0)
    └── type-is@1.1.0 (mime@1.2.11)

    express@4.0.0 node_modules\express
    ├── methods@0.1.0
    ├── qs@0.6.6
    ├── parseurl@1.0.1
    ├── merge-descriptors@0.0.2
    ├── utils-merge@1.0.0
    ├── debug@0.8.1
    ├── range-parser@1.0.0
    ├── fresh@0.2.2
    ├── escape-html@1.0.1
    ├── cookie-signature@1.0.3
    ├── path-to-regexp@0.1.2
    ├── buffer-crc32@0.2.1
    ├── cookie@0.1.0
    ├── type-is@1.0.0 (mime@1.2.11)
    ├── send@0.2.0 (mime@1.2.11)
    ├── serve-static@1.0.1 (send@0.1.4)
    └── accepts@1.0.0 (mime@1.2.11, negotiator@0.3.0)


    With that I then entered < node server.js > at the CLI and BANG!!
    I got the following response on the CLI: 
    < Open http://localhost:8000 to access the files now >

    So I went to my browser and entered: < http://localhost:8000 > at the
    URL line and...............
    OMG!! and BAM!!
    My bare bones client server works and displayed my < index.html > file!!

    OK, At this juncture, I'm using file: < server_Exp2.js > and file:
    < Client-Server_Exp2.html > to form the client server app. I do have to
    copy and paste the HTML file as < index.html > to get the server file to
    recognize requests coming through the port from the browser.
   
    Now I'm going to strip the < server_Exp2.js > file down even more to 
    see what I don't need for a simple < GET > request. OK, it's stripped
    to the bare essentials for a simple < GET > request.

    ****************************************************************************
    
    Objective 3:
    Send a parameter along with a get request:
    Have copied < server_Exp2.js > and pasted it as file: < server_Exp3.js > 
    for the first expansion.
    Now I'll start building it out. First up is querying for a single record
    from the < images > object array in the < server_Exp3.js > file. 
    Had a little trouble because I forgot the exact way your supposed to send
    a parameter with the URL. To figure this out I referred back to SelfEd:
    < SelfEd-NodeJS-RESTful-API > which has lots of working examples and
    explanations about passing parameters. Specifically, refer to:

    < code section DDD> in file: < server_Exp3.js > in SelfEd:
                < SelfEd-NodeJS-RESTful-API >

    for proper parameter passing.

    I now have proper parameter passing. BUT!! I do it from the < index.html >
    file which at this juncture is a copy and rename of 
    < Client-Server_Exp3.html> 

    ****************************************************************************

    Objective 4:
    Move the $http requests to a service method and out of the controller:
    Since this is a next step I've copied and pasted file:
    < Client-Server_Exp3.html > as < Client-Server_Exp4.html > for this next
    step.
    Per < Best Practices > on < p104 Chapter 6 > in Book: 
    < AngularJS Up and Running > it is a prudent time to move $http requests
    out of the controller and wrap the requests into a service method.
    The < index.html > is now a copy of < server_Exp4.js >

    Right now the problem is I'm receiving an empty object from < $http.get >. 
    I suspect the behavior is because the code
    is not behaving asynchronously. It's supposed to wait for the < $http.get >
    server call to return something. I think it's blazing right past the server
    call. This has lead me to < .then() > method and promises. These objects
    are also regular Javascript objects. The < .then() > method by itself may
    be only an Angular method but there a < .then > for regular Javascript also. 
    Yeah!
    Going to the < Promise > link below looks like good reading.

    < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then >
    < https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise >

    All this seems good for fully deciphering the nuances and management of
    asynchronous functions. 

    http://andyshora.com/promises-angularjs-explained-as-cartoon.html

    01/08/2017
    OK! OK! OK! I got something to work. It works just as the book recommends
    per < Best Practices > on < p104 Chapter 6 > in Book: 
    < AngularJS Up and Running > But I hate it! All I've done is move this
    little (but most important bit) of the code < $http.get(/api/image/4) > to
    the the factory module and stated it as such: 
        < return $http.get(/api/image/4); >
    Upon this query being returned (it's a promise) I then have to chain
    all the handlers accordingly to it in the controller. 
    I tried for over a day to do all this in 
    the factory service I named: < ImageService > but to no avail. At best
    all I get back is nothing or an empty object expresseed as: < {} >. I did
    lots of research but so far have come empty why it won't work when I put
    the handlers in the factory service. I added a couple extra tasks for the
    < ImageService > factory service to show data and objects can be 
    returned from from the service. They are < query1 >, <query2 > and the
    < $http.get > call is < query3 >. 

    Note: I still think this dilemma has something to do with asynchronous
    behavior of which I'm still pondering the technical aspects of.
    Below are some references I visited while doing this research.

    // http://stackoverflow.com/questions/24126088/angularjs-performing-http-request-inside-custom-service-and-returning-data
    // http://stackoverflow.com/questions/25440599/problems-using-http-inside-a-service
    // http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory
    // http://stackoverflow.com/questions/16336987/angularjs-factory-http-returns-empty
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    
    Before I move to the next objective, I will assign individual queries to 
    each button. OK, done that.

    ****************************************************************************
    
    Objective 5:
    01/09/2017
    Display information based on the clicked button next to said button that
    gets clicked.

    This objective was kind of an afterthought but I thought it good practice
    to do some DOM code. But low and behold I find you do DOM work in 
    Angular Directives. I broke from doing the book SelfEd: 
    < SelfEd-AngularJS-UpAndRunning > after chapter 10 to do this practice
    project. But since chapter 11 is about directives, I'm gonna go back to
    the book and do chapter 11 and the rest of the book because it's mostly
    about directives and testing all the way to the end.
 
    First off, I just want to get the information displayed. Before I 
    realized I needed to use directives I was going to create a service to 
    do it. So I'll do that first and then convert over. Refer to file:
    < Client-Server_Exp5.html > in this project of for this. 
        OK, mission accomplished, I have a service that does the DOM I 
    needed done. The service is named < DOMService > and it displays the data
    next to the button that was clicked. 
        Summary: This uses a service for doing DOM. I'm supposed to use
    directives so file: < Client-Server_Exp6.html > is where I'll work on 
    moving the button info and use directives.

    ****************************************************************************

    Objective 6:
    01/13/2017
    Use directives to accomplish what I did in objective 5.
    Refer to file: < Client-Server_Exp6.html > for objective six work.

    First up is to make sure the info next to the button doesn't show until 
    a button is clicked. In other words, nothing should show upon page load
    but should show after a button is clicked.
    To be sure, I want to use ngShow so I expanded upon my ngShow 
    SelfEd because using ngShow should be the way to go. The ngShow SelfEd
    I expanded on is: < SelfEd-Angular-API-Directive-ngShow >. 
    There is a weird shortcoming in that I can't seem to get the:
    < ng-model="true" > (for example) to work in the buttons generated by
    ng-repeat.




    http://api.jquery.com/offset/
    


    
   
