import { CelciusPipe } from "./celcius.pipe";

describe("CelciusPipe", () => {
  const pipe = new CelciusPipe();

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should correctly format celcius values", () => {
    expect(pipe.transform(5)).toBe("5 °C");
  });
});
