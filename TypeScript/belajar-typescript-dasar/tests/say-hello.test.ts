import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("should return hello eed", () => {
    expect(sayHello("eed")).toBe("Hello eed!");
  });
});
