/**
 * Plenty of nice suggestions and explanations here about currying and recursive functions :)
 * For different suggestions and explanations:
 * * @see [StackOverflow](https://stackoverflow.com/questions/20477177/creating-an-array-of-cumulative-sum-in-javascript)
 * * @see [wiki](https://en.wikipedia.org/wiki/Currying) for those interested in Currying..
 * * @see [youtube](https://www.youtube.com/watch?v=iZLP4qOwY8I) for a funnier explanation
 *
 * Basically:
 * 1. cumulativeSum is called for every item as a callback in array.map
 * 1. sum is initialized to 0 (zero)
 * 2. passes sum to the next function, which takes the current array value
 * 3. adds current array value to sum
 * 4. returns the new 'sum'
 */
export const cumulativeSum = () =>
  (
    (sum) => (value: number) =>
      (sum += value)
  )(0);
