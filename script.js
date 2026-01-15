const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

let clickCount = 0;

const messages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Okay, no more clicking.",
  "Seriously?",
  "I get it :(",
  "But why?",
  "Are you like 100% sure?",
  "Maybe 110%?",
  "Oh.... ok...",
  "Yes"
];

yesButton.addEventListener("click", () => {
    handleYes();
});

function handleYes() {
    alert("YAYYYY ILYSMBB <3");
}

noButton.addEventListener("click", function handleNo() {
    clickCount++;
    noButton.textContent = messages[clickCount];

    if (clickCount === messages.length - 1) {
        noButton.removeEventListener("click", handleNo);
        noButton.addEventListener("click", handleYes);

        noButton.classList.remove("no");
        noButton.classList.add("yes");
    }
});