const textInput = document.getElementById("text");
const optionsDiv = document.getElementById("options");
const optionTemplate = document.getElementById("option-template");

const fonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Comic Sans MS",
    "Arial Black",
    "Impact",
    "Tahoma"
];

textInput.addEventListener("input", () => {
    const text = textInput.value;

    const options = fonts.map(font => {
        const option = optionTemplate.content.cloneNode(true).querySelector(".option");
        const circles = option.querySelectorAll(".circle");
        const textElement = option.querySelector(".text");

        textElement.style.fontFamily = font;
        textElement.innerText = text;

        circles.forEach(circle => {
            circle.style.borderColor = text ? "black" : "transparent";
        });

        option.addEventListener("click", () => {
            optionsDiv.querySelectorAll(".option").forEach(option => {
                option.classList.remove("selected");
            });

            option.classList.add("selected");
        });

        return option;
    });

    optionsDiv.innerHTML = "";
    options.forEach(option => optionsDiv.appendChild(option));
});
