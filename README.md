# Developer test
You are given a basic nodeJS based application that handles simple search and search results functionality.

Please read through the test description below to fully understand what is required. All assets needed to complete this test are attached.

## How to get it up and running
The base dependencies are declared in the `package.json` file.

The application has the following pre-built:
- `/results` route
- error handling
- 404 handling
- unit test for `/results` and `404`
- `views` folder with:
    + `layouts/master.hbs` - empty master template
    + `pages/results.hbs` - empty results page
    + `pages/error.hbs` - empty error page with only error message output
    + `partials/` - empty folder for partials (if needed)

There are also a few basic tasks for you to run:
- `npm run dev` will install dependencies, start the application and will watch for changes done to server side JS and unit tests for server side code. On change it will also restart your server and will run unit tests.
- `npm start` will install production dependencies and start the application

## Available assets
- wireframes for 3 different viewports to provide design requirements.

## Requirements
- proposed user stories are complete
- code is unit tested
- please don't use any client-side framework (Angular, React, Bootstrap, Foundation, jQuery...)
- feel free to use test framework of your choice if you aren't familiar with the one provided (`tap` and `supertest`)
- accessible via keyboard

## User acceptance criteria
Features below cover all user acceptance criteria from data manipulation, simple functionality and also what is expected to be rendered in the client. For visual guidance please refer to attached wireframes.

### Routing
```gherkin
Feature: Search Page

    Scenario: Show search page
        Given I enter a path in browser's address bar
            And path is "/search"
        Then "search" page should be returned
```

### Search functionality
```gherkin
Feature: Users need to be able to search for area by postcode

    Scenario: Search page is displayed
        Given I want to search for properties on the website
        When I visit "/search" page
        Then I am presented with a search field and submit button

    Scenario: Search for area returns results
        Given search page is rendered
            And search field is present
            And submit button is present
        When I enter "N11" postcode to search field
            And I submit search query
        Then I am presented with "results" page showing ordered list of results
            And page shows '"number of results" found'
            And each result contains "property image"
            And each result contains "property title"
            And each result contains "property price"
            And each result contains "property description"
            And each result contains agent data consisting of "agent logo", "agent name", "agent address" and "agent phone number"

    Scenario: Search for an area for which there are no results
        Given search page is rendered
            And search field is present
            And submit button is present
        When I enter "SE1" to search field
            And I submit search query
        Then search page returns message "No results found"
            And search search field is shown
            And submit button is shown
```

### Rendering in client
```gherkin
Feature: Search results page needs to be responsive and support 3 different viewports

    Scenario: Small screen user
        Given a search was performed for "N11"
        When "results" page renders ordered list of results for given search term
        Then each result occupies full width of the screen
            And each result's items occupy full width of the screen
            And each result's items are left aligned

    Scenario: Medium size screen user
        Given a search was performed for "N11"
        When "results" page renders ordered list of results for given search term
        Then each result is split into 2 rows
            And first row is split into 2 equally wide columns
            And first column renders "property image"
            And second column renders "property title" followed by "property price" and "property description"
            And last row occupies full width
            And contains "agent logo" followed by "agent name", "agent address" and "agent phone number"

    Scenario: Large screen user
        Given a search was performed for "N11"
        When "results" page renders ordered list of results for given search term
        Then each result is split into 3 columns
            And first column renders "property image"
            And second column renders "property title" followed by "property price" and "property description"
            And last column renders "agent logo" followed by "agent name", "agent address" and "agent phone number"
```

## Bonus - client-side JS validation on the search form
```gherkin
Feature: Client side JS validation for search field

    Scenario: Search field is empty
        Given search page is rendered
            And search field is present
            And submit button is present
        When search field is empty
            And I click submit button
        Then I am presented with message saying "This field cannot be empty" 
            And Form is not submitted
```

## Final notes
Please let us know if you liked the test and how long it took you to complete it. 
