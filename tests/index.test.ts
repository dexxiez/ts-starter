import app from "../src/index";

describe("test placeholder", () => {
  it("should return a string", () => {
    expect(app()).toEqual("Ahoyhoy");
  });
});
