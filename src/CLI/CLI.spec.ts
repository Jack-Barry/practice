import { CLI } from "./CLI";
import path from "path";
const mock = require("mock-fs");

describe(".parseForConfig()", () => {
  let cli: CLI;

  beforeEach(() => {
    cli = new CLI([]);
  });

  afterEach(() => {
    mock.restore();
  });

  describe("when --config flag is not present", () => {
    it("returns null", () => {
      expect(cli.parseForConfig([])).toEqual(null);
    });
  });

  describe("when --config flag is present", () => {
    it("throws an error if the provided config path fails", () => {
      expect(() => {
        cli.parseForConfig(["--config", "some/invalid/path"]);
      }).toThrow();
    });

    it("returns the provided config path if it is valid", () => {
      mock({
        "some/valid/path": {
          "config.ts": ""
        }
      });

      expect(
        cli.parseForConfig(["--config", "some/valid/path/config.ts"])
      ).toEqual(path.resolve("./some/valid/path/config.ts"));
    });
  });
});
