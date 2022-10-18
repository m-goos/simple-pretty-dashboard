# Dashboard

*find the original readme [here](./ORIGINAL_README.md)*

> Hi! Thanks for taking the time to have a look at this assignment.

## Setup
On your local machine
```sh
yarn # installs files

# in terminal tab 1
yarn server

# in terminal tab 2
yarn start
```
You'll find the project at `http://localhost:3000`

Alternatively, if you want to check out the project on your mobile phone / ipad locally:
```sh
yarn server:local-network
yarn start:local-network # terminal output will print your IP
```
## Process

This is the workflow I went through for this project:

1. Set up the project and check out the `/routes` by creating a small Postman collection
2. Go over the requirements
3. Make a sketch of the dashboard in Excalidraw, using four viewports (there's a library for just pulling in those viewports), keeping in mind responsiveness.
4. Responsiveness - I'll go with 4 viewports: (<sm | md | lg | xl+)
   1. iPhone 8
   2. iPad Mini
   3. iPad pro
   4. MBP 16"
5. Make choices to save time:
   1. Pick a library for bar charts and line charts, simply the most popular one, chart.js, and to save some time the [react-version](https://react-chartjs-2.js.org/). No custom [D3JS](https://d3js.org/) in this timeframe..
   2. Pick a library for tables: [tanstack table](https://tanstack.com/table/v8)
   3. Use TailwindCSS and use some of their components, e.g. [headlessui.dev](https://headlessui.com/react/radio-group)
   4. Use tanstack query to handle API calls, caching, re-fetching/invalidating, handling multiple promises, [aborting promises](https://developer.mozilla.org/en-US/docs/Web/API/AbortController), etc..
   5. PS: [this](https://www.robinwieruch.de/react-libraries/#react-animation-libraries) is a nice overview of React libraries
6. Set up tools to enforce basic quality for git history:
   1. husky
   2. commit message linter, [here](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)
   3. prettier / eslint on `commit`, check-types and run test on `push`
      1. this prevents code with any errors from entering the codebase..
   4. prettier plugin for tailwindcss
7. Set up necessary libraries:
   1. TailwindCSS for styling
   2. Chartjs for bar charts
   3. tanstack table for React table
   4. tanstack query for handling/caching/refreshing API calls
8. Start building, mobile first. Once the product is done for one viewport, take care of the responsiveness. Mobile-first:
   1. Make all the requirements work
   2. Make it pretty
   3. Make it responsive

## Improvements
There are plenty of things that can be improved, that I believe would add a lot. In no particular order:

### Value of the dashboard information
1. A donut chart that shows turnover per region - something like [[this](https://react-chartjs-2.js.org/examples/doughnut-chart/)]
2. Maybe even plotting this information on a region map like this [nivo](https://nivo.rocks/choropleth/) example.
3. More insights into which products generate the most revenue, the biggest total margin, ..


### User experience
1. Add 'skeleton' components that show while the page is in loading state, or take the place of a component with a (network) error
2. The `filters` currently go out of view when you scroll down on a mobile phone. It would be great if they could somehow float on the screen and could be expanded when desired. Something like this [popover](https://headlessui.com/react/popover) example could be nice.
3. I love `dark themes` - a first step would be to extract the used tailwind colors into a list of CSS variables and apply them across the project. Next, themes can be added and (easily) toggled.
4. In terms of loading times: `chartjs` can use treeshaking but I have not looked at that due to the time frame.
5. If the dashboard gets built out: code splitting, `React.lazy(() => ...)`.

### Code quality
1. `git strategy`: using branches! - now I just worked on main, but I would suggest using a branch per feature for project that are supposed to have a future life. E.g.: 
   1. feat/bar-chart, 
   2. feat/api-client, 
   3. refactor/organize-all-charts, 
   4. fix/network-error-for-customer-endpoint
   5. style/implement-responsiveness
2. Code reviews. Other people looking critically at my code..
3. Testing testing testing... The project needs to be properly tested. I would start with some integration tests on the `<App />` page probably. The `utils` can be unit tested, but following `react-testing-library` principles, the goal is to build tests that resemble the way our users interact with the website. First and foremost.
   1. I already took some steps to set up `mock service worker` with `react-query`, but have not gotten far enough with the app. Good [documentation](https://tkdodo.eu/blog/testing-react-query) and [example repo](https://github.com/TkDodo/testing-react-query/blob/main/package.json) for `react-query` testing
4. Another nice visual regression test is 'screenshot comparison' (e.g. [playwright](https://playwright.dev/docs/test-snapshots))
5. There is one 'any' type in the whole project, for the react-table columns. I decided not to dig into react-table too deep for this assignment, but that should definitely be strongly typed.