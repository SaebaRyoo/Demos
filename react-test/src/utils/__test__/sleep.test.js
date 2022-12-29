import { sleep } from "../sleep";

// 9 | FakeTimer：如何"快进"测试定时任务？
describe("examples for fakeTimers", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test("a test for a simple setTimeout", async () => {
    const res = sleep(6000, "this is a simple setTimeout test");
    jest.runAllTimers();
    await expect(res).resolves.toBe("this is a simple setTimeout test");
  });
});
