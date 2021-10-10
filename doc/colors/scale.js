// scale levels: E (scaleName100, ... ,scaleName900):
//   - e, c, a, 9, 8, 7, 6, 4, 2 for the dominant color(s)
//   - b ,8, 6, 5, 4, 3, 2, 1, 0 for the secondary color(s)
const DOMINANT_COLOR_VALUES = ["e", "c", "a", 9, 8, 7, 6, 4, 2];

const SECONDARY_COLOR_VALUES = ["b", 8, 6, 5, 4, 3, 2, 1, 0]; // desaturate
//const SECONDARY_COLOR_VALUES = ["a", 7, 5, 4, 3, 2, 1, 0, 0];
//const SECONDARY_COLOR_VALUES = [9, 7, 5, 4, 3, 2, 1, 0, 0];
//const SECONDARY_COLOR_VALUES = [8, 6, 4, 3, 2, 1, 0, 0, 0];
//const SECONDARY_COLOR_VALUES = [7, 5, 3, 2, 1, 0, 0, 0, 0]; // bright

export class Scale {
  /**
   * @constructs
   * @param {string} scaleName
   * @param {Array, string} dominantBasicColors
   */
  constructor(scaleName, dominantBasicColors) {
    this._scaleName = scaleName;
    this._dominant = dominantBasicColors;
  }

  /**
   * Returns hexdecimal value (0, 1, 2, ..., "d", "e" or "f") for one basic colors (Red, Green or Blue)
   * @param {name} color
   * @param {integer} level
   * @returns {integer | number}
   */
  _getBasicColorValue(color, level) {
    const value = this._dominant.includes(color)
      ? DOMINANT_COLOR_VALUES[level / 100 - 1]
      : SECONDARY_COLOR_VALUES[level / 100 - 1];

    return value;
  }

  /**
   * Returns the scale of 9 colors associated to the scaleName
   * @returns {Object}
   */
  build() {
    const scale = {};

    for (let level = 100; level <= 900; level += 100) {
      let hexValue = "#";

      hexValue += this._getBasicColorValue("R", level);
      hexValue += this._getBasicColorValue("G", level);
      hexValue += this._getBasicColorValue("B", level);

      scale[`${this._scaleName}${level}`] = hexValue;
    }

    return scale;
  }
}
