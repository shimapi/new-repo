const inputText = document.getElementById("input-text");
const fontContainer = document.getElementById("font-container");
const fontTemplate = document.getElementById("font-template");

const fonts = [
  "Arial",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Verdana",
  "Georgia",
  "Palatino",
  "Garamond",
  "Bookman",
  "Comic Sans MS",
];

function updateFonts() {
  fontContainer.innerHTML = "";
  const text = inputText.value;
  fonts.map((font) => {
    const card = document.importNode(fontTemplate.content, true);
    card.querySelector("p").textContent = text;
    card.querySelector(".cardFont").style.fontFamily = font;
    fontContainer.appendChild(card);
  });
}

inputText.addEventListener("input", updateFonts);
updateFonts();
