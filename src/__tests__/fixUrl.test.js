//Prepare test

import starkString from "../";

test("should decode unreadable characters to correct Persian characters", () => {
  expect(
    starkString(
      "https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C",
    )
      .decodeURL()
      .toString(),
  ).toBe("https://fa.wikipedia.org/wiki/صفحهٔ_اصلی");
});

describe("fix url", () => {
  test("fix url", () => {
    expect(starkString("fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "http://fa.wikipedia.org/wiki/",
    );

    expect(
      starkString("https://fa.wikipedia.org/wiki/").fixURL().toString(),
    ).toBe("https://fa.wikipedia.org/wiki/");

    expect(
      starkString(
        "http://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C",
      )
        .fixURL()
        .toString(),
    ).toBe(
      "http://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C/",
    );
  });

  test("fix web socket or file url", () => {
    expect(starkString("wss://fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "wss://fa.wikipedia.org/wiki/",
    );

    expect(starkString("ftp://fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "ftp://fa.wikipedia.org/wiki/",
    );
  });

  test("dirty url", () => {
    expect(starkString("://fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "http://fa.wikipedia.org/wiki/",
    );
    expect(starkString("/fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "http://fa.wikipedia.org/wiki/",
    );
    expect(starkString("/////fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "http://fa.wikipedia.org/wiki/",
    );
    expect(starkString("http:fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "http://fa.wikipedia.org/wiki/",
    );

    expect(
      starkString("http:::fa.wikipedia.org/wiki").fixURL().toString(),
    ).toBe("http://fa.wikipedia.org/wiki/");

    expect(starkString("wss:::fa.wikipedia.org/wiki").fixURL().toString()).toBe(
      "wss://fa.wikipedia.org/wiki/",
    );
  });
});
