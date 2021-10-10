// scale levels: E (scaleName100, ... ,scaleName900):
//   - e, c, a, 9, 8, 7, 6, 4, 2 for the dominant color(s)
//   - b ,8, 6, 5, 4, 3, 2, 1, 0 for the secondary color(s)
const DOMINANT_COLOR_VALUES = ["e", "c", "a", 9, 8, 7, 6, 4, 2];
const SECONDARY_COLOR_VALUES = ["b", 8, 6, 5, 4, 3, 2, 1, 0];

export class Scale {
  constructor(scaleName, dominantBasicColors) {
    this.scaleName = scaleName;
    this.dominant = dominantBasicColors;
  }

  _getBasicColorValue(color, level) {
    const value = this.dominant.includes(color)
      ? DOMINANT_COLOR_VALUES[level / 100 - 1]
      : SECONDARY_COLOR_VALUES[level / 100 - 1];

    return value;
  }

  build() {
    const scale = {
      white: "#fff",
      black: "#000",
    };

    for (let level = 100; level <= 900; level += 100) {
      let hexValue = "#";

      hexValue += this._getBasicColorValue("R", level);
      hexValue += this._getBasicColorValue("G", level);
      hexValue += this._getBasicColorValue("B", level);

      scale[`${this.scaleName}${level}`] = hexValue;
    }

    return scale;
  }
}
