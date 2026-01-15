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
  "but like are you really sure?",
  "okay but seriously just hit yes",
  "I know you are just playing now",
  "how about this, ill make it easier",
  "Yeah, no",
  "damn okay, i see you understand Canadian slang well",
  "how about i do something else?",
  "❤️ Yes"
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