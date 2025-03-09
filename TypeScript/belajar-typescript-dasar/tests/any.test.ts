describe("Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "Eed",
      age: 19,
    };

    person.age = 31;
    person.address = "Indonesia";

    console.info(person);
  });
});
