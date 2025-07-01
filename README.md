# search-params
Utils for handling search params using objects.

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
const searchParamObject = generateDictionaryFromSearchString('param1=test1&param2=test2&param2=test3');

/**
 * Returns: 'param1=test1&param2=test2&param2=test3'
 */
const searchString = generateSearchStringFromObject(
  {
    param1: 'test1',
    param2: [
      'test2',
      'test3'
    ]
  }
);
```
