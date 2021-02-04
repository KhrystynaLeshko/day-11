describe("helloFunc", () => {
  describe("Positive Use Case", () => {
    it("It should say hello to a name", () => {
      expect(hello("Luca")).toBe("Hello Luca!");
    });
  });
  describe("Negative Use Cases", () => {
    it("should not work, if i dont pass an argument", () => {
      expect(hello()).toBe("Hey Stranger");
    });

    it("should not work, if i pass an array", () => {
      expect(hello([])).toBe("This is strange, we just want your name");
      expect(hello([1, 2, 3, 4, 5])).toBe(
        "This is strange, we just want your name"
      );
    });

    it("should not work, if I pass an object", () => {
      expect(hello({})).toBe(`Humans are not objects, you fool`);
    });

    it("should not work, if I pass an number", () => {
      expect(hello(4)).toBe(`You're not Elon Musk`);
      expect(hello(Infinity)).toBe(`You're not Elon Musk`);
      expect(hello(NaN)).toBe(`You're not Elon Musk`);
    });

    it("should mock the person, if no name", () => {
      expect(hello("")).toBe("uuuh, so mysterious");
    });
  });
});

describe("addFunc", () => {
  describe("positive", () => {
    it("should add two numebrs together", () => {
      expect(add(1, 1)).toBe(2);
    });
  });
});

// unit tests
// test the tiniest fraction of code (small function)
// integration tests (tend to work with multiple functions and methods and how they integrate with each other)
// e2e - end to end tests

// cypress
// playwright
// puppeteer

describe("hickups", () => {
  it("is empty array", () => {
    console.log(expect([]));
    expect([]).toEqual([]);
    const obj = {
      name: "ola",
      in: "Berlin",
    };

    function returnOla() {
      return { name: "ola", in: "Berlin" };
    }

    expect(returnOla()).toEqual(obj);
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
    expect(undefined).toBeUndefined();
    expect(undefined).not.toBeDefined();
    expect(5).toBeGreaterThan(3);
    expect(5).toBeGreaterThanOrEqual(5);
    expect(5).toBeGreaterThanOrEqual(4);
  });
});
