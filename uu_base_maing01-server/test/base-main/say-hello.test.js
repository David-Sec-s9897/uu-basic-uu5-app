const {TestHelper} = require("uu_appg01_server-test");

beforeEach(async () => {
  await TestHelper.setup();
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  await TestHelper.initUuAppWorkspace(
    {uuAppProfileAuthorities: "urn:uu:GGPLUS4U"});
});

afterEach(async () => {
  await TestHelper.teardown();
});

describe("SayHello uuCMD tests", () => {
  test("Test 1 - HDS test call of sayHello command", async () => {
    // Login as a predefined test user (see config/test.json)

    let result = await TestHelper.executeGetCommand("sayHello");

    expect(result.data.text).toBeDefined();
    expect(result.data.text).toEqual("Hello World!");
    // NOTE: uuIdentity and uuIdentityName can also be tested
    // for equality, if the values are known
    expect(result.data.uuAppErrorMap).toEqual({});
  });
});
