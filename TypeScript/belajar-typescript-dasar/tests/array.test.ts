describe("Array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["eed", "suaidi", "moh"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["reading", "coding", "traveling"];
    console.info(hobbies);
  });

  it("should support tuple", () => {
    const person: readonly [string, string, number] = ["Eed", "Ganteng", 19];
    console.info(person);
  });
});
