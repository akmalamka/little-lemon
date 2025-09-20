/* eslint-disable no-undef */
import { initializeTimes, updateTimes } from "./times";
import { fetchAPI } from "./api";

// Mock fetchAPI
vi.mock("./api", () => ({
  fetchAPI: vi.fn(),
}));

describe("times.js functions", () => {
  test("initializeTimes returns times from fetchAPI", async () => {
    fetchAPI.mockResolvedValue(["17:00", "18:00"]);
    const times = await initializeTimes();
    expect(times).toEqual(["17:00", "18:00"]);
  });

  test("updateTimes updates state correctly", () => {
    const state = ["17:00"];
    const action = { type: "SET", times: ["18:00", "19:00"] };
    expect(updateTimes(state, action)).toEqual(["18:00", "19:00"]);
  });

  test("updateTimes returns current state for unknown action", () => {
    const state = ["17:00"];
    const action = { type: "UNKNOWN" };
    expect(updateTimes(state, action)).toEqual(["17:00"]);
  });
});
