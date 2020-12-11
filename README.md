# Getting Started with Abound test App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Design Influence - https://onepagelove.com/

Prettier and Eslint are used for linting.

Create React App is used in this project. CRA is built for this purpose (to get a site off the ground easily) and I have experience using it. I've also used Next.js and Gatsby which are similar in idea, but they’ve got a bit more setup and config to get running.

React Testing Library - I've built out smoke specs for all components. I'm using react testing library because I like the syntax and structure better, which leans into the ideology behind RTL, which is to test user behaviour rather than implementation details, which makes a lot more sense to me. I’m still not sure if I’m 100% sold on extensive front end testing though - specs on the back end make so much sense for controllers/API routes because you can test different outcomes relatively easily, but with front end testing outside of really obvious things like checking that content has loaded (e.g. after a successful API call) or that a popup is showing after a user has clicked a button I run out of ideas on what to test.

Data Fetching - I prefer Axios to Fetch because of the way it returns Promises (any failure is sent to .catch and any success to .then) whereas there’s some additional handling that’s required with Fetch for success/failure. I added error handling if the endpoint doesn’t return data and loading while waiting for the data response. I'm using a state machine to handle loading/error/success, even though it’s not really the most useful things right now, but if we had more states (specific errors, different success states, etc…) this would help to reduce clutter.

Hooks (useState, useEffect) - I love hooks. I really like their addition and they get rid of the react lifecycle which always felt a little forced. I think there's opportunity to leverage other hooks in this test app (like context) but since this is limited in scope there's just some prop drilling and state hoisting going on to pass data around.

Styled components - I prefer specific styles to live in each JS file with a Global styles folder for generic elements (e.g. b, p, h1) and a style vars file for repeatable styles (e.g. colors, font sizes, font-weights). Paired with that I’ll usually do Layout components for page structure and UI components for individual elements. I'm also using reset CSS to ensure consistency across browsers.

Unique ID in the Cart: I solved this with a quick hack using Date.now() but obviously that won’t work as a real solution. When I was looking this up some suggestions involved using a UUID library. I'm super curious to see how this would be handled in a real scenario.

TODO:
Add mobile styling.
Add show/hide button for Cart
Add preview of Cart Items in Landing page

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner (React Testing Library) in the interactive watch mode.\
