import {
  generateDictionaryFromSearchString,
  generateSearchStringFromDictionary,
  getSearchParamsDictionary,
  SearchParamsDictionary,
} from './searchParams';

describe('generateDictionaryFromSearchString', () => {
  it('should generate a dictionary structure from a provided search string', () => {
    const searchString = 'param1=test&param2=test1&param2=test2';
    const dictionary = generateDictionaryFromSearchString(searchString);

    expect(dictionary).toStrictEqual(
      {
        param1: 'test',
        param2: [
          'test1',
          'test2',
        ],
      },
    );
  });
});

describe('generateSearchStringFromDictionary', () => {
  it('should generate a valid search string from a provided dictionary', () => {
    const dictionary: SearchParamsDictionary = {
      param1: 'test',
      param2: [
        'test1',
        'test2',
      ],
    };

    const searchString = generateSearchStringFromDictionary(dictionary);
    expect(searchString).toBe('param1=test&param2=test1&param2=test2');
  });
});

describe('getSearchParamsDictionary', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should retrieve a dictionary from the search params', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        search: 'param1=test&param2=test1&param2=test2',
      },
    }));

    const dictionary = getSearchParamsDictionary();

    expect(dictionary).toStrictEqual(
      {
        param1: 'test',
        param2: [
          'test1',
          'test2',
        ],
      },
    );
  });
});
