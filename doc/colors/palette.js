import { Scale } from "./scale.js";

const PALETTES_LEVELS = {
  0: [],
  1: [300, 500, 700],
  2: [100, 300, 500, 700, 900],
  3: [100, 200, 300, 400, 500, 600, 700, 800, 900],
};

const COLORS_DOMINANT = {
  neutral: ["R", "G", "B"],
  red: ["R"],
  green: ["G"],
  blue: ["B"],
  magenta: ["R", "B"],
  yellow: ["R", "G"],
  cyan: ["G", "B"],
};

export class PaletteComponent {
  constructor(colors, level) {
    this.colors = colors;
    this.level = level;
  }

  _renderPaletteHeading() {
    const palettesContainer = document.getElementById("palettes-container");

    const paletteHeading = document.createElement("h2");
    paletteHeading.textContent = `Palette level ${this.level} (${this.colors})`;

    palettesContainer.appendChild(paletteHeading);
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

      if (PALETTES_LEVELS[this.level].includes(scaleLevel)) {
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

      if (scaleLevel >= 100 && scaleLevel <= 900) {
        scaleBox.textContent = scaleLevel;
      }

      scaleRow.appendChild(scaleBox);
    }

    palettesContainer.appendChild(scaleRow);
  }

  render() {
    //this._renderPaletteHeading();

    for (let color of this.colors) {
      const colorScale = new Scale(color, COLORS_DOMINANT[color]);

      this._renderScale(color, colorScale.build());
      this._renderScaleValues();
    }
  }
}
