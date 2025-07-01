import {
  generateDictionaryFromSearchString,
  generateSearchStringFromDictionary,
  SearchParamsDictionary,
} from "./searchParams";

describe("generateDictionaryFromSearchString", () => {
  it("should generate a dictionary structure from a provided search string", () => {
    const searchString = "param1=test&param2=test1&param2=test2";
    const dictionary = generateDictionaryFromSearchString(searchString);

    expect(dictionary).toStrictEqual({
      param1: "test",
      param2: ["test1", "test2"],
    });
  });
});

describe("generateSearchStringFromDictionary", () => {
  it("should generate a valid search string from a provided dictionary", () => {
    const dictionary: SearchParamsDictionary = {
      param1: "test",
      param2: ["test1", "test2"],
    };

    const searchString = generateSearchStringFromDictionary(dictionary);
    expect(searchString).toBe("param1=test&param2=test1&param2=test2");
  });
});
