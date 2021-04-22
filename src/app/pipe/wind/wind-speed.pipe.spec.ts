import { WindSpeedPipe } from "./wind-speed.pipe";

describe("WindSpeedPipe", () => {
  const pipe = new WindSpeedPipe();
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should correctly format wind speed values", () => {
    expect(pipe.transform("5")).toBe("5 km/h");
  });
});
