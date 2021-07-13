## teaching subject 
- making a context api and use 
- making a custom context api like higher order component and use
(teaching-curtesy- stack learner) 
***without hooks***
### `yarn start`

# context api setting working part 1
- setting createContext() FUNCTION import from react in app.js
- set  a var for createcontex which will provide two parameter provider and consumer
- wrap context.provider in app.js and passing value init
- export from app.js context for every component that they get the value from it
- then import context from every child component for getting value and use as consumer

# context api setting working part 2
- make a var for createContext() in app.js
- then provider will wrap whole app to set up context exporting so that every  child can get the value
- then basicnav will get the context value and import the context from app and consume by the render props
- then import to Showcase page and render the context
- making all render of thises pages with context.consmer except function parameter

***passing functions***
- using rest operator to pass the user state along with other functions
- then use the functions all pages
- crateing an another paget name usercontex.js to use context for every page and remove form app import from "react"
# context api setting working part 3
***making provider***
- making custom provider . make  a userprovider class in userContex.js page and export all state and functions from app.js
to past into custom provider 
- then use in app.js userProvider instead of userContext 
- export all context from usercontex and use 

--- 
end of tusk