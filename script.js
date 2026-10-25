document.addEventListener("DOMContentLoaded", () => {

  // TASK 6
const countText = document.querySelector("#counterValue");
  let count = 0;

document.querySelector("#btnIncrease").addEventListener("click", () => {
    count++;
    countText.textContent = count;
  });

document.querySelector("#btnDecrease").addEventListener("click", () => {
    if (count > 0) count--;
    countText.textContent = count;
  });

document.querySelector("#btnReset").addEventListener("click", () => {
    count = 0;
    countText.textContent = count;
  });

  // TASK 7
const textInput = document.querySelector("#textInput");
const textPreview = document.querySelector("#textPreview");
const charCount = document.querySelector("#charCount");
const btnClearText = document.querySelector("#btnClearText");
const emptyPreviewMessage = "Your text will appear here";

function updateTextPreview() {
    const text = textInput.value;
    textPreview.textContent = text.length > 0 ? text : emptyPreviewMessage;
    charCount.textContent = `Characters: ${text.length}`;
  }

textInput.addEventListener("input", updateTextPreview);

btnClearText.addEventListener("click", () => {
    textInput.value = "";
    updateTextPreview();
    textInput.focus();
  });

  // TASK 8
const imageSelect = document.querySelector("#imageSelect");
const img = document.querySelector("#dynamicImage");
const caption = document.querySelector("#imageCaption");

imageSelect.addEventListener("change", () => {
    const opt = imageSelect.options[imageSelect.selectedIndex];
    img.src = opt.value;
    img.alt = opt.getAttribute("data-alt");
    caption.textContent = opt.getAttribute("data-caption");
  });

  // TASK 9
const keyInput = document.querySelector("#keyInput");
const keyStatus = document.querySelector("#keyStatus");
const keyResult = document.querySelector("#keyResult");

keyInput.addEventListener("keydown", (e) => {
    keyStatus.textContent = "Last key pressed: " + e.key;

    if (e.key === "Enter") {
      e.preventDefault();
      keyResult.textContent = "Submitted: " + keyInput.value;
      keyResult.classList.remove("hidden");
    }

    if (e.key === "Escape") {
      keyInput.value = "";
      keyResult.classList.add("hidden");
    }
  });

  // TASK 10: Mouse & Focus Events
const interactiveCard = document.querySelector("#interactiveCard");
const cardInstruction = document.querySelector("#cardInstruction");
const defaultInstruction =
    "Hover with mouse to highlight card.";
  const activeInstruction =
    "Card highlighted!";

function highlightCard() {
    interactiveCard.classList.add("highlight");
    cardInstruction.textContent = activeInstruction;
  }

function unhighlightCard() {
    interactiveCard.classList.remove("highlight");
    cardInstruction.textContent = defaultInstruction;
  }

  interactiveCard.addEventListener("mouseenter", highlightCard);
  interactiveCard.addEventListener("mouseleave", unhighlightCard);
  interactiveCard.addEventListener("focus", highlightCard);
  interactiveCard.addEventListener("blur", unhighlightCard);
});