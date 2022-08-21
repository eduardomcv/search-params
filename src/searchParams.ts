export type SearchParamsDictionary = Record<string, string | string[]>;

function generateDictionaryFromSearchString(searchString: string): Partial<SearchParamsDictionary> {
  const dictionary: Partial<SearchParamsDictionary> = {};
  const searchParams = new URLSearchParams(searchString);
  const entries = Array.from(searchParams);

  entries.forEach(([key, value]) => {
    const dictionaryValue = dictionary[key];

    if (typeof dictionaryValue === 'undefined') {
      dictionary[key] = value;
    } else if (Array.isArray(dictionaryValue)) {
      dictionary[key] = [
        ...dictionaryValue,
        value,
      ];
    } else {
      dictionary[key] = [
        dictionaryValue,
        value,
      ];
    }
  });

  return dictionary;
}

function generateSearchStringFromDictionary(dictionary: SearchParamsDictionary): string {
  const searchParams = new URLSearchParams();

  Object.entries(dictionary)
    .forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => searchParams.append(key, item));
      } else {
        searchParams.set(key, value);
      }
    });

  return searchParams.toString();
}

export function getSearchParamsDictionary(): Partial<SearchParamsDictionary> {
  const searchString = window.location.search;
  return generateDictionaryFromSearchString(searchString);
}

export function setSearchParamsDictionary(dictionary: SearchParamsDictionary): void {
  const searchString = generateSearchStringFromDictionary(dictionary);
  window.location.search = searchString;
}
