const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  test("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow();
  });

  test("With empty array does not throw exception", () => {
    expect(() => sorting.sortByName([])).not.toThrow();
    expect(sorting.sortByName([])).toEqual([]);
  });

  test("Names should be sorted case insensitively", () => {
    expect(
      sorting.sortByName([
        "apple",
        "Banana",
        "cherry",
        "Apple",
      ])
    ).toEqual([
      "apple",
      "Apple",
      "Banana",
      "cherry",
    ]);
  });

  test("Identical names should remain in the same order", () => {
    expect(
      sorting.sortByName([
        "apple",
        "apple",
        "banana",
        "banana",
      ])
    ).toEqual([
      "apple",
      "apple",
      "banana",
      "banana",
    ]);
  });

  test("Throws exception if input is not an array", () => {
    expect(() => sorting.sortByName("not an array")).toThrow();
    expect(() => sorting.sortByName(123)).toThrow();
    expect(() => sorting.sortByName({})).toThrow();
  });
});
