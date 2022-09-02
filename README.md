# search-params
Utils for handling search params using dictionaries.

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
const dictionary = generateDictionaryFromSearchString('param1=test1&param2=test2&param2=test3');

/**
 * Returns: 'param1=test1&param2=test2&param2=test3'
 */
const searchString = generateSearchStringFromDictionary(
  {
    param1: 'test1',
    param2: [
      'test2',
      'test3'
    ]
  }
);
```
