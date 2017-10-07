import formatHTML from './formatHTML';

describe("i18n-react", () => {
  it("format renders tree 1", () => {
    expect(formatHTML("a *{v} _{q}_* z", { v: 1, q: 2 })).toBe("a <strong>1 <em>2</em></strong> z");
    expect(formatHTML("[a *{v} _{q}_* z]", { v: 1, q: 2 })).toBe("<p>a <strong>1 <em>2</em></strong> z</p>");
    expect(formatHTML("[a *{v} _{q}_* z][${q}]", { v: 1, q: 2 })).toBe("<p>a <strong>1 <em>2</em></strong> z</p><p>$2</p>");
  });

  it("format renders tree 2", () => {
    expect(formatHTML("_a *{v} {q}* z_", { v: 1, q: 2 })).toBe("<em>a <strong>1 2</strong> z</em>");
    expect(formatHTML("_a *{v} [{q}]* z_", { v: 1, q: 2 })).toBe("<em>a <strong>1 <p>2</p></strong> z</em>");
  });
});

