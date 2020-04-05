# NextTrip Case Study

## Getting Started
This application will allow users to view upcoming departures in real time via the Minneapolis Metro Transit 
bus line depending on which route, direction or stop the user selects.

## Run and Build
* Fork and clone this repository
* `cd` into the project folder
* Run `npm install`
* Start the client by running `npm start`
* Build by running `npm run build`

## Testing
* Testing mainly consisted of using `console.log()` to view any sort of data to make sure it is what is expected
* Redux testing used the development tool of "logger" to view what was getting stored into the store whenever a reducer was used
* Testing also included manually testing the application as a user would use the application
    * This includes each component by itself and then together as a whole
* Attempted to use Test Driven Development testing via Jest and Enzyme
    * Run `npm test` 
    * Test files are located in the testing directory in the src directory
    
## Assumptions
* The user travels frequently via the Minneapolis Metro Transit 
* The user wants to know which route, direction and stop they had chosen when the departures are shown
* The user will probably want a "back" button if they made a mistake
* The user will probably want a step bar to see which step of the process they are currently in before they reach the final step
* The Minneapolis Metro Transit logo is free for usage within this application
* The application should be ADA compliant
* The application should be mobile friendly

## Possible Future Features
* Implement the search by "Stops" API
* Implement UI for when a departure is arriving soon (flashing bus icon?)
* Implement a better UI for displaying data instead of a table format
* Create testing files for every component to test via Enzyme & Jest

## Tasks
-[x] Create React App
-[x] Add Redux 
-[x] API Calls (GET)
    -[x] Get all routes
    -[x] Get all directions 
    -[x] Get all stops 
-[x] Handle browser back & forth arrow functionality
-[x] Test code
-[x] README.md file must include:
    -[x] Steps to build and run app
    -[x] Steps to execute test
    -[x] List of assumptions during development
-[x] Submit application via remote access to repo

