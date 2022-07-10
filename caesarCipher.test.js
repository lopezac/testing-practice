const caesarCipher = require("./caesarCipher.js");

test("works with a shift of 1", () => {
  expect(caesarCipher.encrypt("defend the east", 1)).toBe("efgfoe uif fbtu");
  expect(caesarCipher.encrypt("attack at dawn", 1)).toBe("buubdl bu ebxo");
});

test("works with differents shifts", () => {
  expect(caesarCipher.encrypt("defend the east", 11)).toBe("opqpyo esp plde");
  expect(caesarCipher.encrypt("defend the east", 25)).toBe("cdedmc sgd dzrs");
  expect(caesarCipher.encrypt("attack at dawn", 3)).toBe("dwwdfn dw gdzq");
});

test("wraps from z to next correctly", () => {
  expect(caesarCipher.encrypt("la zeta del zorro", 6)).toBe(
    "rg fkzg jkr fuxxu"
  );
  expect(caesarCipher.encrypt("la zeta del zorro", 10)).toBe(
    "vk jodk nov jybby"
  );
  expect(caesarCipher.encrypt("la zeta del zorro", 1)).toBe(
    "mb afub efm apssp"
  );
});

test("works with punctuation", () => {
  expect(caesarCipher.encrypt("defend.the.east", 11)).toBe("opqpyo.esp.plde");
  expect(caesarCipher.encrypt("?defend_the.east", 25)).toBe("?cdedmc_sgd.dzrs");
});

test("works with 0, values > 25, values < 0", () => {
  expect(caesarCipher.encrypt("defend the east", 0)).toBe("defend the east");
  expect(caesarCipher.encrypt("defend the east", 28)).toBe("defend the east");
  expect(caesarCipher.encrypt("attack at dawn", -3)).toBe("attack at dawn");
});

test("works with uppercase", () => {
  expect(caesarCipher.encrypt("Defend tHe east", 11)).toBe("Opqpyo eSp plde");
  expect(caesarCipher.encrypt("Defend The east", 25)).toBe("Cdedmc Sgd dzrs");
  expect(caesarCipher.encrypt("Attack At Dawn", 3)).toBe("Dwwdfn Dw Gdzq");
});
