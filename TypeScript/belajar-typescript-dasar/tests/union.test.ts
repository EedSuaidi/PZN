describe("Union Type", () => {
  it("should support union type", () => {
    let sample: number | string | boolean = "Eed";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof", () => {
    const process = (value: number | string | boolean) => {
      if (typeof value === "number") {
        return value * 2;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      } else {
        return !value;
      }
    };

    expect(process(100)).toBe(200);
    expect(process("Eed")).toBe("EED");
    expect(process(true)).toBe(false);
  });
});
