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

  // TASK 7: Live Text Preview
const textInput = document.querySelector("#textInput");
  const textPreview = document.querySelector("#textPreview");
  const charCount = document.querySelector("#charCount");

  textInput.addEventListener("input", () => {
    charCount.textContent = "Characters: " + textInput.value.length;
    textPreview.textContent = textInput.value || "Your text will appear here";
  });

  document.querySelector("#btnClearText").addEventListener("click", () => {
    textInput.value = "";
    textPreview.textContent = "Your text will appear here";
    charCount.textContent = "Characters: 0";
  });

  // TASK 8: Image Switcher
const imageSelect = document.querySelector("#imageSelect");
  const img = document.querySelector("#dynamicImage");
  const caption = document.querySelector("#imageCaption");

  imageSelect.addEventListener("change", () => {
    const opt = imageSelect.options[imageSelect.selectedIndex];
    img.src = opt.value;
    img.alt = opt.getAttribute("data-alt");
    caption.textContent = opt.getAttribute("data-caption");
  });

  // TASK 9: Keyboard Events
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
const card = document.querySelector("#interactiveCard");

  card.addEventListener("mouseenter", () => card.classList.add("highlight"));
  card.addEventListener("mouseleave", () => card.classList.remove("highlight"));
  card.addEventListener("focus", () => card.classList.add("highlight"));
  card.addEventListener("blur", () => card.classList.remove("highlight"));

});