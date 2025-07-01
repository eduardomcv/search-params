import {
  createObjectFromSearchString,
  createSearchStringFromObject,
  SearchParamsObject,
} from "./searchParams";

describe("createObjectFromSearchString", () => {
  it("should create an object from a provided search string", () => {
    const searchString = "param1=test&param2=test1&param2=test2";
    const searchObject = createObjectFromSearchString(searchString);

    expect(searchObject).toStrictEqual({
      param1: "test",
      param2: ["test1", "test2"],
    });
  });
});

describe("createSearchStringFromObject", () => {
  it("should create a valid search string from a provided object", () => {
    const searchObject: SearchParamsObject = {
      param1: "test",
      param2: ["test1", "test2"],
    };

    const searchString = createSearchStringFromObject(searchObject);
    expect(searchString).toBe("param1=test&param2=test1&param2=test2");
  });
});
