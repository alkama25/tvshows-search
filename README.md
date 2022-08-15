# tvshows-search

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Steps to build : 
1. Clone the repository from Github link provided.
2. Run npm run serve to run the project locally.
3. Run npm run test to run all the unit tests.

## Tech Stack

    Vue 2
    JavaScript
    SCSS
    Semantic HTML
    Axios
    Jest
    Vue Test Utils

## Description

For detailed documentation please visit - https://v2.vuejs.org/

The structure of the project is:

    ## Assets
    1. Scss folder that has variables and scss file imported in App.vue

    ## Components
    1. SearchBar.vue - that contains the search input and header.
    2. ShowsList.vue - renders the list of shows.
    
    ## Services
    1. movieListService.js - helps to write all endpoints in one single place

    ## tests
    Unit Tests - contains data folder for storing static data to be passed in propsData.
    SearchBar.spec.js and ShowList.spec.js - contains unit tests for individual functionality.
    For more information please visit - https://jestjs.io/ , https://v1.test-utils.vuejs.org/

Show List API consumption is handled through Axios. (API used - https://api.tvmaze.com/search/shows?q=${searchTerm}`)

## Remarks

Further we can implement various filters like date, genre, actor names to filter out the tv shows and allow search on the basis of that filters.

Allow users to mark their favorite show and add them in their watch history.

Sort the TV Shows on the basis of ratings provided.

Display recently released and most popular shows on the top.

Add more information to the show grid along with name and language.



