console.log(hello("Frankie"));
// it
// test
// expect
// function it(){}
// const test = it
it("It should say hello to a name", () => {
  expect(hello("Luca")).toBe("Hello Luca!");
});

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
