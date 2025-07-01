export type SearchParamsObject = Record<string, string | string[]>;

export function createObjectFromSearchString(
  searchString: string,
): Partial<SearchParamsObject> {
  const searchParamsObject: Partial<SearchParamsObject> = {};
  const searchParams = new URLSearchParams(searchString);
  const entries = Array.from(searchParams);

  entries.forEach(([key, value]) => {
    const objectValue = searchParamsObject[key];

    if (typeof objectValue === "undefined") {
      searchParamsObject[key] = value;
    } else if (Array.isArray(objectValue)) {
      searchParamsObject[key] = [...objectValue, value];
    } else {
      searchParamsObject[key] = [objectValue, value];
    }
  });

  return searchParamsObject;
}

export function createSearchStringFromObject(
  searchParamsObject: SearchParamsObject,
): string {
  const searchParams = new URLSearchParams();

  Object.entries(searchParamsObject).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
    } else {
      searchParams.set(key, value);
    }
  });

  return searchParams.toString();
}
