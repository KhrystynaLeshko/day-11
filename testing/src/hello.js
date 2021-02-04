function hello(name) {
  if (typeof name === "string" && !name.length) {
    return `uuuh, so mysterious`;
  }
  if (typeof name === "number") {
    return `You're not Elon Musk`;
  }
  if (Array.isArray(name)) {
    return "This is strange, we just want your name";
  }
  if (typeof name === "object" && name !== null) {
    return `Humans are not objects, you fool`;
  }
  if (name === undefined) {
    return "Hey Stranger";
  }

  return `Hello ${name}!`;
}
