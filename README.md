# search-params
Utils for creating and parsing URL search parameters using objects.

### Usage
```ts
/**
 * Returns:
 * {
 *   param1: 'test1',
 *   param2: [
 *     'test2',
 *     'test3'
 *   ]
 * }
 */
const searchParamObject = createObjectFromSearchString('param1=test1&param2=test2&param2=test3');

/**
 * Returns: 'param1=test1&param2=test2&param2=test3'
 */
const searchString = createSearchStringFromObject(
  {
    param1: 'test1',
    param2: [
      'test2',
      'test3'
    ]
  }
);
```
