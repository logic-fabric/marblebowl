import { Scale } from "./scale.js";

const PALETTES_LEVELS = {
  0: [],
  1: [300, 500, 700],
  2: [100, 300, 500, 700, 900],
  3: [100, 200, 300, 400, 500, 600, 700, 800, 900],
};

const DOMINANT_BASIC_COLORS = {
  neutral: ["R", "G", "B"],
  red: ["R"],
  green: ["G"],
  blue: ["B"],
  magenta: ["R", "B"],
  yellow: ["R", "G"],
  cyan: ["G", "B"],
};

export class PaletteComponent {
  /**
   * Render the scales for each color of a palette
   * @param {Array.string} colors
   * @param {number} level
   */
  constructor(colors, level) {
    this._colors = colors;
    this._level = level;
  }

  _renderScale(colorName, colorScale) {
    const palettesContainer = document.getElementById("palettes-container");

    const scaleRow = document.createElement("div");
    scaleRow.classList.add("scale-row");

    const scaleNameBox = document.createElement("div");
    scaleNameBox.classList.add("scale-name-box");
    scaleNameBox.textContent = colorName;

    scaleRow.appendChild(scaleNameBox);

    for (let scaleLevel = 100; scaleLevel <= 900; scaleLevel += 100) {
      const hexValue = colorScale[`${colorName}${scaleLevel}`];

      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");

      if (PALETTES_LEVELS[this._level].includes(scaleLevel)) {
        colorBox.style.backgroundColor = hexValue;
        colorBox.innerHTML = `<p>${hexValue}</p><p class="text-white">${hexValue}</p>`;
      }

      scaleRow.appendChild(colorBox);
    }

    palettesContainer.appendChild(scaleRow);
  }

  _renderScaleValues() {
    const palettesContainer = document.getElementById("palettes-container");

    const scaleRow = document.createElement("div");
    scaleRow.classList.add("scale-row");

    for (let scaleLevel = 0; scaleLevel <= 900; scaleLevel += 100) {
      const scaleBox = document.createElement("div");
      scaleBox.classList.add("scale-box");
      scaleBox.textContent = scaleLevel;

      scaleRow.appendChild(scaleBox);
    }

    palettesContainer.appendChild(scaleRow);
  }

  render() {
    for (let color of this._colors) {
      let dominantColors = ["R", "G", "B"];

      if (Object.keys(DOMINANT_BASIC_COLORS).includes(color)) {
        dominantColors = DOMINANT_BASIC_COLORS[color];
      }

      const colorScale = new Scale(color, dominantColors);

      this._renderScale(color, colorScale.build());
      this._renderScaleValues();
    }
  }
}
