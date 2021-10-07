const PALETTES = {
  "neutral scale": [
    "#ddd",
    "#bbb",
    "#aaa",
    "#999",
    "#888",
    "#777",
    "#666",
    "#444",
    "#222",
  ],
  "magenta scale": [
    "#ebe",
    "#c8c",
    "#a6a",
    "#959",
    "#848",
    "#737",
    "#626",
    "#414",
    "#202",
  ],
  "yellow scale": [
    "#eeb",
    "#cc8",
    "#aa6",
    "#995",
    "#884",
    "#773",
    "#662",
    "#441",
    "#220",
  ],
  "cyan scale": [
    "#bee",
    "#8cc",
    "#6aa",
    "#599",
    "#488",
    "#377",
    "#266",
    "#144",
    "#022",
  ],
  "red scale": [
    "#ebb",
    "#c88",
    "#a66",
    "#955",
    "#844",
    "#733",
    "#622",
    "#411",
    "#200",
  ],
  "green scale": [
    "#beb",
    "#8c8",
    "#6a6",
    "#595",
    "#484",
    "#373",
    "#262",
    "#141",
    "#020",
  ],
  "blue scale": [
    "#bbe",
    "#88c",
    "#66a",
    "#559",
    "#448",
    "#337",
    "#226",
    "#114",
    "#002",
  ],
};

function completePaletteColors(colors) {
  const completedColors = [];

  completedColors.push("white");

  if (colors.length === 9) {
    for (let color of colors) {
      completedColors.push(color);
    }
  }

  completedColors.push("black");

  return completedColors;
}

function buildPaletteHeading(palette) {
  const paletteHeading = document.createElement("h2");
  paletteHeading.textContent = palette;

  return paletteHeading;
}

function buildPaletteRow(colors) {
  const paletteRow = document.createElement("div");
  paletteRow.classList.add("palette-row");

  for (let color of colors) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color;

    colorBox.innerHTML = `<p>${color}</p><p class="text-white">${color}</p>`;

    paletteRow.appendChild(colorBox);
  }

  return paletteRow;
}

function buildPaletteScale() {
  const scaleRow = document.createElement("div");
  scaleRow.classList.add("scale-row");

  for (let i = 0; i < 11; i++) {
    const scaleBox = document.createElement("div");
    scaleBox.classList.add("scale-box");

    if (i > 0 && i < 10) {
      scaleBox.innerHTML = `<p>${100 * i}</p>`;
    }

    scaleRow.appendChild(scaleBox);
  }

  return scaleRow;
}

const palettesContainer = document.getElementById("palettes-container");

for (let palette of Object.keys(PALETTES)) {
  const paletteColors = completePaletteColors(PALETTES[palette]);

  const paletteHeading = buildPaletteHeading(palette);
  palettesContainer.appendChild(paletteHeading);

  const paletteRow = buildPaletteRow(paletteColors);
  palettesContainer.appendChild(paletteRow);

  const paletteScale = buildPaletteScale(palette);
  palettesContainer.appendChild(paletteScale);
}
