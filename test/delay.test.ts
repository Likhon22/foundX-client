import delay from "../src/utils/delay";
import { describe, it, expect } from "vitest";

describe("delay function", () => {
  it("should return a promise after some delay", async () => {
    const start = Date.now();
    await delay(2000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(2000);
    expect(end - start).toBeLessThanOrEqual(3000);
  });
});
