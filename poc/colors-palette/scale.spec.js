import { expect } from "@jest/globals";

import { Scale } from "./scale.js";

const NEUTRAL_SCALE = {
  white: "#fff",
  neutral100: "#eee",
  neutral200: "#ccc",
  neutral300: "#aaa",
  neutral400: "#999",
  neutral500: "#888",
  neutral600: "#777",
  neutral700: "#666",
  neutral800: "#444",
  neutral900: "#222",
  black: "#000",
};

const GREEN_SCALE = {
  white: "#fff",
  green100: "#beb",
  green200: "#8c8",
  green300: "#6a6",
  green400: "#595",
  green500: "#484",
  green600: "#373",
  green700: "#262",
  green800: "#141",
  green900: "#020",
  black: "#000",
};

const CYAN_SCALE = {
  white: "#fff",
  cyan100: "#bee",
  cyan200: "#8cc",
  cyan300: "#6aa",
  cyan400: "#599",
  cyan500: "#488",
  cyan600: "#377",
  cyan700: "#266",
  cyan800: "#144",
  cyan900: "#022",
  black: "#000",
};

describe("GIVEN the Scale.build() method", () => {
  describe("WHEN I build the scale with Red, Green and Blue as dominant", () => {
    test("THEN I obtain the NEUTRAL_SCALE", () => {
      const neutralScale = new Scale("neutral", ["R", "G", "B"]);

      expect(neutralScale.build()).toEqual(NEUTRAL_SCALE);
    });
  });

  describe("WHEN I build the scale with only Green as dominant", () =>
    test("THEN I obtain the GREEN_SCALE", () => {
      const neutralScale = new Scale("green", ["G"]);

      expect(neutralScale.build()).toEqual(GREEN_SCALE);
    }));

  describe("WHEN I build the scale with only Green and Blue as dominant", () =>
    test("THEN I obtain the CYAN_SCALE", () => {
      const neutralScale = new Scale("cyan", ["G", "B"]);

      expect(neutralScale.build()).toEqual(CYAN_SCALE);
    }));
});
