Hi! Thanks for taking the time to have a look at this assignment.

This is the workflow I went through for this project:

1. Set up the project and check out the `/routes` with Postman
2. Go over the requirements
3. Make a sketch of the dashboard in Excalidraw, using four viewports (there's a library for that), keeping in mind responsiveness.
4. Consider responsiveness - I'll go with 4 viewports: (<sm | md | lg | xl+)
   1. iPhone 8
   2. iPad Mini
   3. iPad pro
   4. MBP 16"
5. Make choices to save time:
   1. Pick a library for bar charts and line charts (just the most popular one, chart.js)
   2. Pick a library for tables: [tanstack table](https://tanstack.com/table/v8)
   3. PS: [this](https://www.robinwieruch.de/react-libraries/#react-animation-libraries) is a nice overview of React libraries
6. Set up tools:
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

Extra's: auto-refresh API data (every minute) - show popup
