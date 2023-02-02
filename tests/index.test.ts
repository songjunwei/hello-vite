import { sum } from "../src/utils/index";

describe("hello jest", () => {
  it("test sum utils", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
