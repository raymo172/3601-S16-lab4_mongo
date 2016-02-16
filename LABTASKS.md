#Lab Tasks

## Part 1: Exploring the project

- Set up this project to use Travis CI, and add your build status icon to the README.

##### What are the differences between the folder structure of this project and the previous one? Note that api/pets is server-side routing specific to the database, and the client folder contains the client-side portion of the project.

-The last lab had the html stuff in one folder, the js in another, css in another, etc. In this lab, the folders corespond to each page and has all the files (html and js) in the folder.

##### How is app.js (at the project root) different from the ones in the previous two labs? Give examples of the kinds of urls that app.js handles, and describe where each case will be routed.

- This lab contacts the database using mongoose. It handles normal htmls such as index.html and also handles database htmls. There are API-routs and non API routes. Non API routes are routed to html pages and API routes route to the same page with the added stuff.

##### The project is connected to the database via mongoose. Where is this connection set?

-It is set in app.js "mongoose.connect('mongodb://127.0.0.1:27017/pets');"

##### Explain how api/pets/pets.controller.js gets added to app.js (remember this is all server-side).

- It gets added by using the line app.use - ('/api/pets', require('./api/pets'));

##### Study the file api/pets/pets.controller.js, answer the following questions:
-  What kind of documents would the database contain? What is the field in the model?
> The database contains strings, the field is 'Pet'.
-  What functions are defined in the controller? How do they change the database data?
> Functions defined: Pet.find, Pet.Create, Pet.findByID, (index, create, destroy) they change the database by finding it, creating it , or detroying it (it being pet values).
-  How does one get or delete elements in the database?
>  Use the destroy function

##### What is the purpose of index.js in the api/pets? Where is it referenced?

-This page routes functions of the controller to a module.

##### What views are used in the project?

-Views used are a 404 file, an about page, the main page and an index page

##### We've seen a few different ways to display HTML in the last couple labs (straight, individual HTML pages and components being added to HTML). How are HTML files combined and displayed in this lab? 

>Protip: main.html isn't a full HTML document, so how does it get displayed?

-Each html page is linked to the index page and the appModule controls which url to send.

##### Where is the code for the navigation bar located? How is it connected to the pages of the project?

-It is located in the navbar.controller.js file and the navbar html file. It lists the pages and the links to the htmls associated wtih them. Also main.html and about.html contains a div with ng-include for the navbar.

##### client/app.js performs client-side routing. How do you think it works?

- It works by using the function which takes diferent URLS and directs approptiatly to them.

## Part 2: Add another field to pet data.

- Add a numeric field to the pet model (say, for example, weight). Add a field to enter weight when a new pet document is created. Add a field in the main page to show the heaviest of all pets and its weight. Remember to practice TDD and perform frequent commits.

>Protip: Make sure to separate business logic functions from functions that make http calls. That is, don't have a function that performs both. This alows for optimal testing conditions.



## Part 3: Add a GPA calculator

- Add a view to enter courses and display the GPA. Add a link on the navigation bar that leads to it; add the corresponding route. Entered courses (name, credits, letter grade) must be stored in the database. Practice TDD and perform frequent commits. Don't forget to add new files to git before committing. Use the refactoring menu when renaming files (this will rename then in the git repo as well). Remember to check out you test coverage, and watch your build history on Travis-CI.
