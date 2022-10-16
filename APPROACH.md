Hi! Thanks for taking the time to have a look at this assignment.

If you want to run this locally, please run the following commands:
```sh
rm yarn.lock # remove lock file to prevent conflicts with package version
yarn # installs files

# in terminal tab 1
yarn start server

# in terminal tab 2
yarn start
```

You'll find the project at `http://localhost:3000`

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
   3. prettier / eslint on commit, check-types and run test on push
7. Set up necessary libraries:
   1. TailwindCSS for styling
   2. Chartjs for bar charts
   3. tanstack table for React table
   4. tanstack query for handling/caching/refreshing API calls
8. Start building, mobile first. Once the product is done for one viewport, take care of the responsiveness. Mobile-first:
   1. Make all the requirements work
   2. Make it pretty
   3. Make it responsive

If I have some time after finishing all the requirements:
1. Cards showing some important data 'at a glance', so-called [stats](https://tailwindui.com/components/application-ui/data-display/stats)
   1. Total revenue (YTD): €2.234.756
   2. Top category (YTD): Fish
   3. Top region (YTD): Australia
   4. Best customer (YTD): Jane Burrow
2. Donut chart of regions, showing which region is most important
3. A so-called `Chloropleth` map would be very useful (and fancy), but I won't have time for that. Example from [nivo](https://nivo.rocks/choropleth/) (a library)